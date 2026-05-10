document.addEventListener('DOMContentLoaded', () => {
    // DOM Element Declarations
    const themeToggleBtn = document.getElementById('theme-toggle');
    const scriptsGrid = document.getElementById('scripts-grid');
    const searchBar = document.getElementById('search-bar');
    const genreFilter = document.getElementById('genre-filter');
    const formatFilter = document.getElementById('format-filter');
    const statusFilter = document.getElementById('status-filter');
    const industryFilter = document.getElementById('industry-filter');
    const contactForm = document.getElementById('portfolio-contact-form');
    const successMessage = document.getElementById('form-success-msg');
    const tagCloudContainer = document.getElementById('tag-cloud');
    const backToTopBtn = document.getElementById('back-to-top');
    const savedCountBadge = document.getElementById('saved-count');

    let activeTag = 'all';

    // 1. Core Light / Dark Mode Toggle Logic
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', targetTheme);
    });

    // 2. Generate Interactive Tag Cloud
    function generateTagCloud() {
        const allTags = new Set();
        SCREENPLAY_PORTFOLIO_DATA.forEach(script => {
            script.tags.forEach(tag => allTags.add(tag));
        });

        tagCloudContainer.innerHTML = '<span class="tag-item active" data-tag="all">#AllThemes</span>';
        
        allTags.forEach(tag => {
            const span = document.createElement('span');
            span.className = 'tag-item';
            span.setAttribute('data-tag', tag);
            span.textContent = `#${tag}`;
            tagCloudContainer.appendChild(span);
        });

        // Tag Click Event Listeners
        document.querySelectorAll('.tag-item').forEach(item => {
            item.addEventListener('click', (e) => {
                document.querySelectorAll('.tag-item').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                activeTag = e.target.getAttribute('data-tag');
                processFilters();
            });
        });
    }

    // Initialize Bookmarks Array from LocalStorage
    let savedScriptsList = JSON.parse(localStorage.getItem('sathwik_bookmarks')) || [];
    function updateBookmarkCount() {
        if (savedCountBadge) {
            savedCountBadge.textContent = savedScriptsList.length;
        }
    }

    // 3. Render Engine for Portfolio Data Cards (Version 2.0)
    function renderPortfolioCards(scriptsData) {
        scriptsGrid.innerHTML = '';

        if (scriptsData.length === 0) {
            scriptsGrid.innerHTML = `<p style="text-align:center; padding: 2rem; color: var(--text-secondary); width:100%;">No matching scripts found matching your parameters.</p>`;
            return;
        }

        scriptsData.forEach(script => {
            const cardElement = document.createElement('div');
            cardElement.className = 'script-card';
            cardElement.id = `script-${script.id}`;

            const isBookmarked = savedScriptsList.includes(script.id);
            const bookmarkIcon = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';

            // Generate Character HTML list
            let charactersHtml = '';
            script.characters.forEach(char => {
                charactersHtml += `<li><strong>${char.name}</strong> - ${char.desc}</li>`;
            });

            // Generate Theme Tags HTML list
            let tagsHtml = '';
            script.tags.forEach(t => {
                tagsHtml += `<span class="badge">#${t}</span>`;
            });

            cardElement.innerHTML = `
                <div class="script-summary">
                    <div class="script-title-block">
                        <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                            <h3>${script.title}</h3>
                            <span class="status-badge">${script.status}</span>
                        </div>
                        <div class="script-meta-tags">
                            <span class="badge genre-tag">${script.genre}</span>
                            <span class="badge">${script.format}</span>
                            <span class="badge">${script.pages} Pages</span>
                            <span class="badge target-industry">${script.industry}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1.5rem;">
                        <button class="bookmark-btn" data-id="${script.id}">${bookmarkIcon}</button>
                        <div class="accordion-arrow">▼</div>
                    </div>
                </div>
                <div class="script-details-pane">
                    <div class="details-content-inner">
                        <div class="meta-metrics">
                            <span>⏱️ <strong>Est. Reading Time:</strong> ${script.readTime}</span>
                        </div>
                        
                        <p><strong>Concept Hook:</strong> ${script.hook}</p>
                        <p><strong>Logline Synopsis:</strong> ${script.plot}</p>
                        
                        <div class="script-v2-tabs">
                            <button class="v2-tab-btn active-tab" data-target="script-view-${script.id}">Script Excerpt</button>
                            <button class="v2-tab-btn" data-target="pitch-deck-${script.id}">Interactive Pitch Slide</button>
                        </div>

                        <!-- Panel 1: Hollywood Script Viewport -->
                        <div id="script-view-${script.id}" class="v2-panel-content">
                            <div class="viewport-controls">
                                <span style="font-size:0.85rem; font-weight:600;">FONT SIZE:</span>
                                <button class="font-size-btn" data-action="decrease" data-target="viewport-${script.id}">A-</button>
                                <button class="font-size-btn" data-action="increase" data-target="viewport-${script.id}">A+</button>
                            </div>
                            <div class="hollywood-layout-wrapper">
                                <div id="viewport-${script.id}" class="hollywood-script-viewport">${script.excerpt}</div>
                                <aside class="pitch-notes-sidebar">
                                    <h4>Director & Editor Notes</h4>
                                    <p>🎥 <strong>Shooting Logic:</strong> ${script.pitchNotes.shooting}</p>
                                    <p>✂️ <strong>Lined Editing Logic:</strong> ${script.pitchNotes.editing}</p>
                                </aside>
                            </div>
                        </div>

                        <!-- Panel 2: Interactive Pitch Slides -->
                        <div id="pitch-deck-${script.id}" class="v2-panel-content hidden-panel">
                            <div class="pitch-slide-container">
                                <div class="pitch-slide active-slide" data-slide="1">
                                    <h4>[ SLIDE 1: THE CORE HOOK ]</h4>
                                    <p style="font-size:1.2rem; text-align:center; margin-top:1rem; font-style:italic;">"${script.hook}"</p>
                                </div>
                                <div class="pitch-slide" data-slide="2">
                                    <h4>[ SLIDE 2: DRAMATIC SYNOPSIS ]</h4>
                                    <p style="margin-top:1rem;">${script.plot}</p>
                                </div>
                                <div class="pitch-slide" data-slide="3">
                                    <h4>[ SLIDE 3: CHARACTER SLATE ]</h4>
                                    <ul class="character-list" style="margin-top:1rem; text-align:left; display:inline-block;">
                                        ${charactersHtml}
                                    </ul>
                                </div>
                                <div class="pitch-nav-controls">
                                    <button class="slide-nav-btn prev-slide" data-parent="${script.id}">◀ Prev</button>
                                    <span class="slide-indicator">Slide 1 of 3</span>
                                    <button class="slide-nav-btn next-slide" data-parent="${script.id}">Next ▶</button>
                                </div>
                            </div>
                        </div>

                        <div style="margin-top: 1.5rem; display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
                            <span style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">THEME TAGS:</span>
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            `;

            // Accordion Collapse/Expand Event Trigger
            const summaryClickArea = cardElement.querySelector('.script-summary');
            summaryClickArea.addEventListener('click', (e) => {
                if (e.target.classList.contains('bookmark-btn')) return; // Prevent collapse when bookmarking
                const isCurrentlyExpanded = cardElement.classList.contains('expanded');
                document.querySelectorAll('.script-card').forEach(c => c.classList.remove('expanded'));
                if (!isCurrentlyExpanded) {
                    cardElement.classList.add('expanded');
                }
            });

            // Bookmark Button Functional Logic Engine
            const bBtn = cardElement.querySelector('.bookmark-btn');
            bBtn.addEventListener('click', () => {
                const sId = parseInt(bBtn.getAttribute('data-id'));
                if (savedScriptsList.includes(sId)) {
                    savedScriptsList = savedScriptsList.filter(id => id !== sId);
                    bBtn.textContent = '☆ Bookmark';
                } else {
                    savedScriptsList.push(sId);
                    bBtn.textContent = '★ Bookmarked';
                }
                localStorage.setItem('sathwik_bookmarks', JSON.stringify(savedScriptsList));
                updateBookmarkCount();
            });

            // Tab Switching Switchboards (Excerpt View vs Pitch Deck View)
            const tabButtons = cardElement.querySelectorAll('.v2-tab-btn');
            tabButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    tabButtons.forEach(b => b.classList.remove('active-tab'));
                    e.target.classList.add('active-tab');
                    
                    const targetId = e.target.getAttribute('data-target');
                    cardElement.querySelectorAll('.v2-panel-content').forEach(p => p.classList.add('hidden-panel'));
                    cardElement.querySelector(`#${targetId}`).classList.remove('hidden-panel');
                });
            });

            // Font Resizer Implementation Engine
            const fontButtons = cardElement.querySelectorAll('.font-size-btn');
            fontButtons.forEach(fBtn => {
                fBtn.addEventListener('click', (e) => {
                    const targetViewportId = e.target.getAttribute('data-target');
                    const viewport = cardElement.querySelector(`#${targetViewportId}`);
                    let currentSize = parseFloat(window.getComputedStyle(viewport).fontSize);
                    const action = e.target.getAttribute('data-action');
                    
                    if (action === 'increase' && currentSize < 24) currentSize += 2;
                    if (action === 'decrease' && currentSize > 12) currentSize -= 2;
                    viewport.style.fontSize = `${currentSize}px`;
                });
            });

            // Pitch Deck Slide Navigation Core Slider Engine
            const prevBtn = cardElement.querySelector('.prev-slide');
            const nextBtn = cardElement.querySelector('.next-slide');
            const slides = cardElement.querySelectorAll('.pitch-slide');
            const indicator = cardElement.querySelector('.slide-indicator');
            let currentSlideIndex = 0;

            function updateSlideView() {
                slides.forEach((s, idx) => {
                    s.classList.toggle('active-slide', idx === currentSlideIndex);
                });
                indicator.textContent = `Slide ${currentSlideIndex + 1} of ${slides.length}`;
            }

            prevBtn.addEventListener('click', () => {
                if (currentSlideIndex > 0) {
                    currentSlideIndex--;
                    updateSlideView();
                }
            });

            nextBtn.addEventListener('click', () => {
                if (currentSlideIndex < slides.length - 1) {
                    currentSlideIndex++;
                    updateSlideView();
                }
            });

            scriptsGrid.appendChild(cardElement);
        });
    }

    // 4. Search and Multi-Parameter Filter Processor (Enhanced)
    function processFilters() {
        const searchPhrase = searchBar.value.toLowerCase().trim();
        const activeGenre = genreFilter.value;
        const activeFormat = formatFilter.value;
        const activeStatus = statusFilter.value;
        const activeIndustry = industryFilter.value;

        const filteredResults = SCREENPLAY_PORTFOLIO_DATA.filter(script => {
            const matchesSearch = script.title.toLowerCase().includes(searchPhrase) || 
                                  script.plot.toLowerCase().includes(searchPhrase) || 
                                  script.hook.toLowerCase().includes(searchPhrase);
            
            const matchesGenre = activeGenre === 'all' || script.genre === activeGenre;
            const matchesFormat = activeFormat === 'all' || script.format === activeFormat;
            const matchesStatus = activeStatus === 'all' || script.status === activeStatus;
            const matchesIndustry = industryFilter.value === 'all' || script.industry.toLowerCase().includes(activeIndustry);
            const matchesTag = activeTag === 'all' || script.tags.includes(activeTag);

            return matchesSearch && matchesGenre && matchesFormat && matchesStatus && matchesIndustry && matchesTag;
        });

        renderPortfolioCards(filteredResults);
    }

    // Event Triggers for Selection Parameters
    searchBar.addEventListener('input', processFilters);
    genreFilter.addEventListener('change', processFilters);
    formatFilter.addEventListener('change', processFilters);
    statusFilter.addEventListener('change', processFilters);
    industryFilter.addEventListener('change', processFilters);

    // 5. Floating Back To Top Component Logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 6. Contact Form Processing Interceptor
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        successMessage.classList.remove('hidden');
        contactForm.reset();

        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });

    // Run Startup Subsystems
    generateTagCloud();
    updateBookmarkCount();
    renderPortfolioCards(SCREENPLAY_PORTFOLIO_DATA);
});
