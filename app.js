document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM ELEMENT DECLARATIONS ----
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
    const luckyBtn = document.getElementById('lucky-btn');
    const downloadDossierBtn = document.getElementById('download-dossier-btn');

    let activeTag = 'all';
    let savedScriptsList = JSON.parse(localStorage.getItem('sathwik_bookmarks_v3')) || [];
    
    // Track panel clicks in local storage for Version 3.0 metrics tracking
    let panelInteractionsCount = parseInt(localStorage.getItem('sathwik_panel_clicks')) || 0;

    // ---- 1. CORE LIGHT / DARK MODE TOGGLE ----
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', targetTheme);
    });

    // ---- 2. BOOKMARK SUBSYSTEMS ----
    function updateBookmarkCount() {
        if (savedCountBadge) {
            savedCountBadge.textContent = savedScriptsList.length;
        }
    }

    // ---- 3. TAG CLOUD RENDERING ENGINE ----
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

        document.querySelectorAll('.tag-item').forEach(item => {
            item.addEventListener('click', (e) => {
                document.querySelectorAll('.tag-item').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                activeTag = e.target.getAttribute('data-tag');
                processFilters();
            });
        });
    }

    // ---- 4. MAIN PORTFOLIO RENDER LOOP ----
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

            // Location HTML breakdown string
            const locationsHtml = `INT: ${script.locations.int} | EXT: ${script.locations.ext}`;

            // Character Casting List builder
            let charactersHtml = '';
            script.characters.forEach(char => {
                charactersHtml += `<li><strong>${char.name}</strong> (${char.castAge}, ${char.archetype}) - ${char.desc}</li>`;
            });

            // Theme Badges layout builder
            let tagsHtml = '';
            script.tags.forEach(t => {
                tagsHtml += `<span class="badge">#${t}</span>`;
            });

            cardElement.innerHTML = `
                <div class="script-summary">
                    <div class="script-title-block">
                        <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                            <h3 class="cinematic-title">${script.title}</h3>
                            <span class="status-badge">${script.status}</span>
                        </div>
                        <div class="script-meta-tags">
                            <span class="badge genre-tag">${script.genre}</span>
                            <span class="badge">${script.format}</span>
                            <span class="badge">${script.pages} Pages</span>
                            <span class="badge target-industry">${script.industry}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
                        <button class="bookmark-btn v3-action-btn" data-id="${script.id}">${bookmarkIcon}</button>
                        <div class="accordion-arrow">▼</div>
                    </div>
                </div>
                <div class="script-details-pane">
                    <div class="details-content-inner">
                        <div class="meta-metrics">
                            <span>⏱️ <strong>Est. Reading Time:</strong> ${script.readTime}</span>
                            <span>🎬 <strong>Formula:</strong> ${script.formula}</span>
                            <span>⚖️ <strong>Comps:</strong> ${script.comps}</span>
                            <span>📍 <strong>Scenes:</strong> ${locationsHtml}</span>
                        </div>
                        
                        <p class="script-v3-hook"><strong>Concept Hook:</strong> ${script.hook}</p>
                        <p><strong>Logline Synopsis:</strong> ${script.plot}</p>
                        <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:1.5rem;">🎵 <strong>Sonic Identity / Soundtrack Guide:</strong> ${script.musicIdentity}</p>
                        
                        <div class="script-v2-tabs">
                            <button class="v2-tab-btn active-tab" data-target="script-view-${script.id}">Script Excerpt</button>
                            <button class="v2-tab-btn" data-target="pitch-deck-${script.id}">Interactive Pitch Slide</button>
                        </div>

                        <!-- PANEL 1: HOLLYWOOD EXCERPT VIEWPORT -->
                        <div id="script-view-${script.id}" class="v2-panel-content">
                            <div class="viewport-controls">
                                <div style="display:flex; align-items:center; gap:0.5rem;">
                                    <span style="font-size:0.85rem; font-weight:600;">FONT SIZE:</span>
                                    <button class="font-size-btn" data-action="decrease" data-target="viewport-${script.id}">A-</button>
                                    <button class="font-size-btn" data-action="increase" data-target="viewport-${script.id}">A+</button>
                                </div>
                                <button class="reader-mode-toggle v3-action-btn" data-target="viewport-${script.id}">Toggle Reader Mode 🖥️</button>
                            </div>
                            <div class="hollywood-layout-wrapper">
                                <div id="viewport-${script.id}" class="hollywood-script-viewport">${script.excerpt}</div>
                                <aside class="pitch-notes-sidebar">
                                    <h4>Director & Editor Frameworks</h4>
                                    <p>🎥 <strong>Shooting Mechanics:</strong> ${script.pitchNotes.shooting}</p>
                                    <p>✂️ <strong>Lined Editing Timeline:</strong> ${script.pitchNotes.editing}</p>
                                </aside>
                            </div>
                        </div>

                        <!-- PANEL 2: INTERACTIVE PITCH SLIDES (PAGE-FLIP SIMULATION ENABLED) -->
                        <div id="pitch-deck-${script.id}" class="v2-panel-content hidden-panel">
                            <div class="pitch-slide-container">
                                <div class="pitch-slide active-slide" data-slide="1">
                                    <h4>[ SLIDE 1: INDUSTRIAL COMPS & FORMULA ]</h4>
                                    <div style="margin-top:1.5rem; text-align:left; display:inline-block;">
                                        <p style="margin-bottom:0.5rem;"><strong>Structural Formula:</strong> ${script.formula}</p>
                                        <p style="margin-bottom:0.5rem;"><strong>Production Budget Comps:</strong> ${script.comps}</p>
                                        <p><strong>Sound Track Landscape:</strong> ${script.musicIdentity}</p>
                                    </div>
                                </div>
                                <div class="pitch-slide" data-slide="2">
                                    <h4>[ SLIDE 2: NARRATIVE OUTLINE ]</h4>
                                    <p style="margin-top:1rem; font-style:italic;">"${script.plot}"</p>
                                </div>
                                <div class="pitch-slide" data-slide="3">
                                    <h4>[ SLIDE 3: CASTING ARCHETYPES ]</h4>
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
                            <div style="text-align:right; margin-top:1rem;">
                                <button class="export-pitch-txt v3-action-btn" data-id="${script.id}">Export Slide Text 📥</button>
                            </div>
                        </div>

                        <div style="margin-top: 1.5rem; display:flex; gap:0.5rem; flex-wrap:wrap; align-items:center;">
                            <span style="font-size:0.8rem; font-weight:600; color:var(--text-secondary);">THEME TAGS:</span>
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
            `;

            // Accordion Interaction Configuration
            const summaryClickArea = cardElement.querySelector('.script-summary');
            summaryClickArea.addEventListener('click', (e) => {
                if (e.target.classList.contains('bookmark-btn')) return;
                const isCurrentlyExpanded = cardElement.classList.contains('expanded');
                document.querySelectorAll('.script-card').forEach(c => c.classList.remove('expanded'));
                if (!isCurrentlyExpanded) {
                    cardElement.classList.add('expanded');
                }
            });

            // Bookmark Action Engine
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
                localStorage.setItem('sathwik_bookmarks_v3', JSON.stringify(savedScriptsList));
                updateBookmarkCount();
            });

            // Tabs Management Engine + Local Interaction Metric Counting
            const tabButtons = cardElement.querySelectorAll('.v2-tab-btn');
            tabButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    tabButtons.forEach(b => b.classList.remove('active-tab'));
                    e.target.classList.add('active-tab');
                    
                    // Analytics tracking logic
                    panelInteractionsCount++;
                    localStorage.setItem('sathwik_panel_clicks', panelInteractionsCount);
                    
                    const targetId = e.target.getAttribute('data-target');
                    cardElement.querySelectorAll('.v2-panel-content').forEach(p => p.classList.add('hidden-panel'));
                    cardElement.querySelector(`#${targetId}`).classList.remove('hidden-panel');
                });
            });

            // Font Sizer Sub-Engine
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

            // Fullscreen Reader Mode Toggle Engine
            const readerBtn = cardElement.querySelector('.reader-mode-toggle');
            readerBtn.addEventListener('click', (e) => {
                const targetViewportId = e.target.getAttribute('data-target');
                const targetViewport = cardElement.querySelector(`#${targetViewportId}`);
                targetViewport.classList.toggle('fullscreen-reader-active');
                if(targetViewport.classList.contains('fullscreen-reader-active')) {
                    readerBtn.textContent = "Exit Reader Mode ✖";
                    readerBtn.style.backgroundColor = "#dc3545";
                } else {
                    readerBtn.textContent = "Toggle Reader Mode 🖥️";
                    readerBtn.style.backgroundColor = "transparent";
                }
            });

            // Pitch Slide Custom Text Exporter Component
            const exportTxtBtn = cardElement.querySelector('.export-pitch-txt');
            exportTxtBtn.addEventListener('click', () => {
                const textOutput = `SLATE PROJECT PITCH: ${script.title}\n=================================\nFormula Model: ${script.formula}\nComps Profile: ${script.comps}\nConcept Hook: ${script.hook}\nLogline Outline: ${script.plot}\nSoundtrack Profile: ${script.musicIdentity}`;
                const blob = new Blob([textOutput], { type: 'text/plain' });
                const anchor = document.createElement('a');
                anchor.download = `${script.title.replace(/\s+/g, '_')}_Pitch_Deck.txt`;
                anchor.href = URL.createObjectURL(blob);
                anchor.click();
                URL.revokeObjectURL(anchor.href);
            });

            // Slide Component Page-Flip Slider Engine
            const prevBtn = cardElement.querySelector('.prev-slide');
            const nextBtn = cardElement.querySelector('.next-slide');
            const slides = cardElement.querySelectorAll('.pitch-slide');
            const indicator = cardElement.querySelector('.slide-indicator');
            let currentSlideIndex = 0;

            function updateSlideView() {
                slides.forEach((s, idx) => {
                    s.classList.remove('active-slide');
                    if(idx === currentSlideIndex) {
                        s.classList.add('active-slide');
                    }
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

    // ---- 5. FILTER PROCESSOR ----
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
            const matchesIndustry = activeIndustry === 'all' || script.industry.toLowerCase().includes(activeIndustry);
            const matchesTag = activeTag === 'all' || script.tags.includes(activeTag);

            return matchesSearch && matchesGenre && matchesFormat && matchesStatus && matchesIndustry && matchesTag;
        });

        renderPortfolioCards(filteredResults);
    }

    // Interactive event bindings for control parameters
    searchBar.addEventListener('input', processFilters);
    genreFilter.addEventListener('change', processFilters);
    formatFilter.addEventListener('change', processFilters);
    statusFilter.addEventListener('change', processFilters);
    industryFilter.addEventListener('change', processFilters);

    // ---- 6. GAMIFIED LUCKY RECOMMENDATION SELECTOR ----
    luckyBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * SCREENPLAY_PORTFOLIO_DATA.length);
        const chosenScript = SCREENPLAY_PORTFOLIO_DATA[randomIndex];
        
        // Match the filter states to include this item
        searchBar.value = '';
        genreFilter.value = 'all';
        formatFilter.value = 'all';
        statusFilter.value = 'all';
        industryFilter.value = 'all';
        activeTag = 'all';
        document.querySelectorAll('.tag-item').forEach(t => t.classList.toggle('active', t.getAttribute('data-tag') === 'all'));
        
        renderPortfolioCards(SCREENPLAY_PORTFOLIO_DATA);

        // Expand the targeted element node smooth layout focus auto adjustments
        const targetElement = document.getElementById(`script-${chosenScript.id}`);
        if(targetElement) {
            document.querySelectorAll('.script-card').forEach(c => c.classList.remove('expanded'));
            targetElement.classList.add('expanded');
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });

    // ---- 7. MASTER SLATE DOSSIER GENERATION MACHINE ----
    downloadDossierBtn.addEventListener('click', () => {
        let masterManifestText = `MASTER FILM SLATE OVERVIEW\nDEVELOPER PROFILE: KANCHARLA SATHWIK PRINCE\nCREATIVE START DATE: MARCH 2025\nTOTAL SCREENPLAY SLATE VOLUME: 8 PROJECTS\n\n========================================================================\n\n`;

        SCREENPLAY_PORTFOLIO_DATA.forEach((script, idx) => {
            masterManifestText += `${idx + 1}. PROJECT DOSSIER: ${script.title.toUpperCase()}\n`;
            masterManifestText += `------------------------------------------------------------------------\n`;
            masterManifestText += `Genre Class: ${script.genre.toUpperCase()} | Format Structure: ${script.format.toUpperCase()} | Scope: ${script.pages} Pages\n`;
            masterManifestText += `Industrial Status: ${script.status} | Targeted Market Context: ${script.industry}\n`;
            masterManifestText += `Estimated Script Read Runtime Metric: ${script.readTime}\n`;
            masterManifestText += `Structural Logline Formula Target: ${script.formula}\n`;
            masterManifestText += `Industrial Budgetary Comparison Comps: ${script.comps}\n`;
            masterManifestText += `Sound Track Identity Signature: ${script.musicIdentity}\n`;
            masterManifestText += `Location Balance Profile: INT: ${script.locations.int} scenes, EXT: ${script.locations.ext} scenes\n\n`;
            masterManifestText += `Concept Hook Line:\n"${script.hook}"\n\n`;
            masterManifestText += `Logline Structural Narrative Synopsis:\n${script.plot}\n\n`;
            masterManifestText += `Casting Blueprint Character Archetypes:\n`;
            
            script.characters.forEach(c => {
                masterManifestText += `  • [${c.name}] (Cast Age Profile: ${c.castAge} | Archetype: ${c.archetype}) -> ${c.desc}\n`;
            });

            masterManifestText += `\nTechnical Production Blueprint Directives:\n`;
            masterManifestText += `  🎥 Director's Shooting Script Alignment: ${script.pitchNotes.shooting}\n`;
            masterManifestText += `  ✂️ Editor's Lined Assembly Matrix: ${script.pitchNotes.editing}\n`;
            masterManifestText += `\n========================================================================\n\n`;
        });

        const dossierBlob = new Blob([masterManifestText], { type: 'text/plain;charset=utf-8' });
        const downloadAnchor = document.createElement('a');
        downloadAnchor.download = `Sathwik_Writings_Master_Slate_Dossier_v3.txt`;
        downloadAnchor.href = URL.createObjectURL(dossierBlob);
        downloadAnchor.click();
        URL.revokeObjectURL(downloadAnchor.href);
    });

    // ---- 8. FLOATING BACK TO TOP TRIGGER ----
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

    // ---- 9. CONTACT FORM INTERACTION INTERCEPTOR ----
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        successMessage.classList.remove('hidden');
        contactForm.reset();
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });

    // ---- 10. SYSTEM INITIALIZATION INITIAL RUNS ----
    generateTagCloud();
    updateBookmarkCount();
    renderPortfolioCards(SCREENPLAY_PORTFOLIO_DATA);
});
