document.addEventListener('DOMContentLoaded', () => {
    // ---- 1. SAFE DOM SELECTORS WITH FALLBACKS ----
    const safeGet = (id) => document.getElementById(id);
    const themeToggleBtn = safeGet('theme-toggle');
    const scriptsGrid = safeGet('scripts-grid');
    const searchBar = safeGet('search-bar');
    const genreFilter = safeGet('genre-filter');
    const formatFilter = safeGet('format-filter');
    const statusFilter = safeGet('status-filter');
    const industryFilter = safeGet('industry-filter');
    const contactForm = safeGet('portfolio-contact-form');
    const successMessage = safeGet('form-success-msg');
    const tagCloudContainer = safeGet('tag-cloud');
    const backToTopBtn = safeGet('back-to-top');
    const savedCountBadge = safeGet('saved-count');
    const luckyBtn = safeGet('lucky-btn');
    const downloadDossierBtn = safeGet('download-dossier-btn');

    let activeTag = 'all';
    let savedScriptsList = JSON.parse(localStorage.getItem('sathwik_bookmarks_v4')) || [];

    // Ensure core grid exists before proceeding
    if (!scriptsGrid) {
        console.error("Critical Error: 'scripts-grid' element not found in HTML.");
        return;
    }

    // ---- 2. THEME TOGGLE ----
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', targetTheme);
        });
    }

    // ---- 3. BOOKMARK COUNT ----
    function updateBookmarkCount() {
        if (savedCountBadge) savedCountBadge.textContent = savedScriptsList.length;
    }

    // ---- 4. DYNAMIC TAG CLOUD ENGINE ----
    function generateTagCloud() {
        if (!tagCloudContainer || typeof SCREENPLAY_PORTFOLIO_DATA === 'undefined') return;
        const allTags = new Set();
        SCREENPLAY_PORTFOLIO_DATA.forEach(script => {
            if (script.tags && Array.isArray(script.tags)) {
                script.tags.forEach(tag => allTags.add(tag));
            }
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

    // ---- 5. SAFE PORTFOLIO RENDERING ENGINE ----
    function renderPortfolioCards(scriptsData) {
        scriptsGrid.innerHTML = '';

        if (!scriptsData || scriptsData.length === 0) {
            scriptsGrid.innerHTML = `<p style="text-align:center; padding: 2rem; color: var(--text-secondary); width:100%;">No matching scripts found matching your parameters.</p>`;
            return;
        }

        scriptsData.forEach(script => {
            const cardElement = document.createElement('div');
            cardElement.className = 'script-card';
            cardElement.id = `script-${script.id}`;

            const isBookmarked = savedScriptsList.includes(script.id);
            const bookmarkIcon = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';

            // Safe Metric Fallbacks to prevent crash
            const metrics = script.metrics || {};
            const dayPct = metrics.dayPct || 50;
            const nightPct = metrics.nightPct || 50;
            const actionRatio = metrics.actionRatio || 50;
            const dialogueRatio = metrics.dialogueRatio || 50;
            const locations = script.locations || { int: 0, ext: 0 };
            const pNotes = script.pitchNotes || { shooting: "N/A", editing: "N/A" };

            // Render Dynamic Character List Safely
            let charactersHtml = '';
            if (script.characters && Array.isArray(script.characters)) {
                script.characters.forEach(char => {
                    charactersHtml += `<li><strong>${char.name || 'Character'}</strong> (${char.castAge || 'Any Age'}, ${char.archetype || 'Generic'}) - ${char.desc || 'No description available.'}</li>`;
                });
            }

            // Render Dynamic Storyboard Array Safely
            let storyboardHtml = '';
            const boardArray = script.storyboard || [];
            if (boardArray.length > 0) {
                boardArray.forEach((frame, idx) => {
                    storyboardHtml += `
                        <div class="storyboard-slide ${idx === 0 ? 'active-slide' : ''}" data-frame="${frame.frame || idx + 1}">
                            <div class="clapboard-overlay">
                                <div class="clapboard-row"><span>ROLL:</span> <strong>${frame.roll || 'A1'}</strong></div>
                                <div class="clapboard-row"><span>SCENE:</span> <strong>${frame.scene || script.id}</strong></div>
                                <div class="clapboard-row"><span>TAKE:</span> <strong>${frame.take || '1'}</strong></div>
                                <div class="clapboard-row"><span>CAM:</span> <strong>${frame.cameraBody || 'ARRI LF'}</strong></div>
                                <div class="clapboard-row"><span>LENS:</span> <strong>${frame.lensMM || '35mm'}</strong></div>
                            </div>
                            <div class="storyboard-visual-fallback">[ FRAME ${frame.frame || idx + 1}: ${frame.shot || 'Cinematic Shot'} ]</div>
                            <div class="storyboard-metadata-panel">
                                <p>🎥 <strong>Shot Type:</strong> ${frame.shot || 'N/A'}</p>
                                <p>⚡ <strong>Transition:</strong> ${frame.transition || 'N/A'}</p>
                                <p>📝 <strong>Director Layout Notes:</strong> ${frame.notes || 'No layout descriptors provided.'}</p>
                            </div>
                        </div>
                    `;
                });
            } else {
                storyboardHtml = `<p style="padding:1rem; color:var(--text-secondary); text-align:center;">Storyboard assets rolling out in next production draft update.</p>`;
            }

            cardElement.innerHTML = `
                <div class="script-summary">
                    <div class="script-title-block">
                        <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                            <h3 class="cinematic-title">${script.title || 'Untitled Script'}</h3>
                            <span class="status-badge">${script.status || 'Draft'}</span>
                        </div>
                        <div class="script-meta-tags">
                            <span class="badge genre-tag">${script.genre || 'General'}</span>
                            <span class="badge">${script.format || 'Feature'}</span>
                            <span class="badge">${script.pages || '0'} Pages</span>
                            <span class="badge target-industry">${script.industry || 'Regional'}</span>
                        </div>
                    </div>
                    <div style="display:flex; align-items:center; gap:1rem;">
                        <button class="bookmark-btn v4-action-btn" data-id="${script.id}">${bookmarkIcon}</button>
                        <div class="accordion-arrow">▼</div>
                    </div>
                </div>
                <div class="script-details-pane">
                    <div class="details-content-inner">
                        
                        <!-- V4 PRODUCTION DASHBOARD GRID METRICS -->
                        <div class="v4-dashboard-grid">
                            <div class="dashboard-metric-box">
                                <h5>Day vs Night Environment</h5>
                                <div class="circular-meter-wrapper">
                                    <div class="pure-css-circle" style="background: conic-gradient(var(--accent-color) ${dayPct}%, var(--border-color) 0%);">
                                        <div class="circle-inner-value">${dayPct}% Day</div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-metric-box">
                                <h5>Action vs Dialogue Pace</h5>
                                <div class="circular-meter-wrapper">
                                    <div class="pure-css-circle" style="background: conic-gradient(#ff4757 ${actionRatio}%, #2ed573 0%);">
                                        <div class="circle-inner-value">${actionRatio}% Act</div>
                                    </div>
                                </div>
                            </div>
                            <div class="dashboard-metric-text-box">
                                <p>📍 <strong>Total Locations:</strong> ${locations.total || (locations.int + locations.ext) || 0} (INT: ${locations.int || 0}, EXT: ${locations.ext || 0})</p>
                                <p>👥 <strong>Cast Density Profile:</strong> ${metrics.castDensity || 'N/A'}</p>
                                <p>🎬 <strong>Stunt Intensity Level:</strong> ${metrics.stuntLevel || 'N/A'}</p>
                                <p>💻 <strong>VFX Pipeline Load:</strong> ${metrics.vfxDensity || 'N/A'}</p>
                            </div>
                        </div>

                        <p class="script-v3-hook"><strong>Concept Hook:</strong> ${script.hook || 'N/A'}</p>
                        <p><strong>Logline Synopsis:</strong> ${script.plot || 'N/A'}</p>
                        
                        <div class="script-v2-tabs">
                            <button class="v2-tab-btn active-tab" data-target="script-view-${script.id}">Hollywood Screenplay Text</button>
                            <button class="v2-tab-btn" data-target="storyboard-matrix-${script.id}">Director's Storyboard Matrix (V4)</button>
                        </div>

                        <!-- PANEL 1: HOLLYWOOD SCREENPLAY TEXT INTERFACE -->
                        <div id="script-view-${script.id}" class="v2-panel-content">
                            <div class="viewport-controls">
                                <div style="display:flex; align-items:center; gap:0.5rem;">
                                    <button class="font-size-btn" data-action="decrease" data-target="viewport-${script.id}">A-</button>
                                    <button class="font-size-btn" data-action="increase" data-target="viewport-${script.id}">A+</button>
                                </div>
                                <button class="reader-mode-toggle v3-action-btn" data-target="viewport-${script.id}">Toggle Reader Mode 🖥️</button>
                            </div>
                            <div class="hollywood-layout-wrapper">
                                <div id="viewport-${script.id}" class="hollywood-script-viewport">${script.excerpt || 'No script text attached.'}</div>
                                <aside class="pitch-notes-sidebar">
                                    <h4>Directorial Blueprint</h4>
                                    <p>🎥 <strong>Shooting:</strong> ${pNotes.shooting}</p>
                                    <p>✂️ <strong>Editing:</strong> ${pNotes.editing}</p>
                                </aside>
                            </div>
                        </div>

                        <!-- PANEL 2: INTERACTIVE STORYBOARD MATRIX (V4 SLIDER ENGINE) -->
                        <div id="storyboard-matrix-${script.id}" class="v2-panel-content hidden-panel">
                            <div class="storyboard-slider-container">
                                ${storyboardHtml}
                                ${boardArray.length > 0 ? `
                                <div class="storyboard-controls-bar">
                                    <button class="v4-nav-btn prev-frame" data-id="${script.id}">◀ Previous Frame</button>
                                    <button class="v4-nav-btn play-pause-btn" data-id="${script.id}">⏸ Pause Loop</button>
                                    <button class="v4-nav-btn next-frame" data-id="${script.id}">Next Frame ▶</button>
                                </div>
                                ` : ''}
                            </div>
                        </div>

                    </div>
                </div>
            `;

            // Setup Accordion Toggles
            const summaryClickArea = cardElement.querySelector('.script-summary');
            summaryClickArea.addEventListener('click', (e) => {
                if (e.target.classList.contains('bookmark-btn') || e.target.closest('.bookmark-btn')) return;
                const isExpanded = cardElement.classList.contains('expanded');
                document.querySelectorAll('.script-card').forEach(c => c.classList.remove('expanded'));
                if (!isExpanded) cardElement.classList.add('expanded');
            });

            // Setup Bookmark Engine
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
                localStorage.setItem('sathwik_bookmarks_v4', JSON.stringify(savedScriptsList));
                updateBookmarkCount();
            });

            // Setup Tab Switches
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

            // Setup Font Controls
            const fontButtons = cardElement.querySelectorAll('.font-size-btn');
            fontButtons.forEach(fBtn => {
                fBtn.addEventListener('click', (e) => {
                    const viewport = cardElement.querySelector(`#${e.target.getAttribute('data-target')}`);
                    let size = parseFloat(window.getComputedStyle(viewport).fontSize);
                    size = e.target.getAttribute('data-action') === 'increase' ? size + 2 : size - 2;
                    if (size >= 12 && size <= 24) viewport.style.fontSize = `${size}px`;
                });
            });

            // Setup Reader Mode Toggles
            const readerBtn = cardElement.querySelector('.reader-mode-toggle');
            if (readerBtn) {
                readerBtn.addEventListener('click', () => {
                    const vp = cardElement.querySelector(`#${readerBtn.getAttribute('data-target')}`);
                    vp.classList.toggle('fullscreen-reader-active');
                    readerBtn.textContent = vp.classList.contains('fullscreen-reader-active') ? "Exit Reader Mode ✖" : "Toggle Reader Mode 🖥️";
                });
            }

            // ---- STORYBOARD ROTATION LOOP SUB-SYSTEM (V4 ENGINE) ----
            const sliderSlides = cardElement.querySelectorAll('.storyboard-slide');
            let currentFrameIndex = 0;
            let loopInterval = null;
            let isPaused = false;

            function showFrame(idx) {
                sliderSlides.forEach((s, i) => s.classList.toggle('active-slide', i === idx));
                currentFrameIndex = idx;
            }

            function startStoryboardLoop() {
                if (sliderSlides.length <= 1) return;
                loopInterval = setInterval(() => {
                    if (!isPaused) {
                        currentFrameIndex = (currentFrameIndex + 1) % sliderSlides.length;
                        showFrame(currentFrameIndex);
                    }
                }, 4000); // Rotates frames smoothly every 4 seconds
            }

            const prevFrameBtn = cardElement.querySelector('.prev-frame');
            const nextFrameBtn = cardElement.querySelector('.next-frame');
            const playPauseBtn = cardElement.querySelector('.play-pause-btn');

            if (prevFrameBtn && nextFrameBtn && playPauseBtn) {
                prevFrameBtn.addEventListener('click', () => { isPaused = true; playPauseBtn.textContent = '▶ Play Loop'; showFrame((currentFrameIndex - 1 + sliderSlides.length) % sliderSlides.length); });
                nextFrameBtn.addEventListener('click', () => { isPaused = true; playPauseBtn.textContent = '▶ Play Loop'; showFrame((currentFrameIndex + 1) % sliderSlides.length); });
                playPauseBtn.addEventListener('click', () => {
                    isPaused = !isPaused;
                    playPauseBtn.textContent = isPaused ? '▶ Play Loop' : '⏸ Pause Loop';
                });
                startStoryboardLoop();
            }

            scriptsGrid.appendChild(cardElement);
        });
    }

    // ---- 6. MULTI-PARAMETER DYNAMIC FILTER MECHANICS ----
    function processFilters() {
        if (typeof SCREENPLAY_PORTFOLIO_DATA === 'undefined') return;

        const searchPhrase = searchBar ? searchBar.value.toLowerCase().trim() : '';
        const activeGenre = genreFilter ? genreFilter.value : 'all';
        const activeFormat = formatFilter ? formatFilter.value : 'all';
        const activeStatus = statusFilter ? statusFilter.value : 'all';
        const activeIndustry = industryFilter ? industryFilter.value : 'all';

        const filteredResults = SCREENPLAY_PORTFOLIO_DATA.filter(script => {
            const matchesSearch = !searchPhrase || 
                                  (script.title && script.title.toLowerCase().includes(searchPhrase)) || 
                                  (script.plot && script.plot.toLowerCase().includes(searchPhrase)) || 
                                  (script.hook && script.hook.toLowerCase().includes(searchPhrase));
            
            const matchesGenre = activeGenre === 'all' || script.genre === activeGenre;
            const matchesFormat = activeFormat === 'all' || script.format === activeFormat;
            const matchesStatus = activeStatus === 'all' || script.status === activeStatus;
            const matchesIndustry = activeIndustry === 'all' || (script.industry && script.industry.toLowerCase().includes(activeIndustry));
            const matchesTag = activeTag === 'all' || (script.tags && script.tags.includes(activeTag));

            return matchesSearch && matchesGenre && matchesFormat && matchesStatus && matchesIndustry && matchesTag;
        });

        renderPortfolioCards(filteredResults);
    }

    // Bind Filter Controls
    if (searchBar) searchBar.addEventListener('input', processFilters);
    if (genreFilter) genreFilter.addEventListener('change', processFilters);
    if (formatFilter) formatFilter.addEventListener('change', processFilters);
    if (statusFilter) statusFilter.addEventListener('change', processFilters);
    if (industryFilter) industryFilter.addEventListener('change', processFilters);

    // ---- 7. GAMIFIED RANDOM SELECTION ENGINE ----
    if (luckyBtn) {
        luckyBtn.addEventListener('click', () => {
            if (typeof SCREENPLAY_PORTFOLIO_DATA === 'undefined' || SCREENPLAY_PORTFOLIO_DATA.length === 0) return;
            const randomIndex = Math.floor(Math.random() * SCREENPLAY_PORTFOLIO_DATA.length);
            const chosenScript = SCREENPLAY_PORTFOLIO_DATA[randomIndex];
            
            if (searchBar) searchBar.value = '';
            if (genreFilter) genreFilter.value = 'all';
            if (formatFilter) formatFilter.value = 'all';
            if (statusFilter) statusFilter.value = 'all';
            if (industryFilter) industryFilter.value = 'all';
            activeTag = 'all';
            
            renderPortfolioCards(SCREENPLAY_PORTFOLIO_DATA);

            const card = safeGet(`script-${chosenScript.id}`);
            if (card) {
                document.querySelectorAll('.script-card').forEach(c => c.classList.remove('expanded'));
                card.classList.add('expanded');
                card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // ---- 8. DOSSIER MASTER DOWNLOAD SYSTEM ----
    if (downloadDossierBtn) {
        downloadDossierBtn.addEventListener('click', () => {
            if (typeof SCREENPLAY_PORTFOLIO_DATA === 'undefined') return;
            let text = `SATHWIK PRINCE FILM PORTFOLIO SLATE DOSSIER V4\n==============================================\n\n`;
            SCREENPLAY_PORTFOLIO_DATA.forEach(s => {
                text += `PROJECT: ${s.title}\nGenre: ${s.genre} | Format: ${s.format}\nHook: ${s.hook}\nPlot: ${s.plot}\n----------------------------------------------\n\n`;
            });
            const blob = new Blob([text], { type: 'text/plain' });
            const a = document.createElement('a');
            a.download = 'Sathwik_Master_Slate_Dossier.txt';
            a.href = URL.createObjectURL(blob);
            a.click();
        });
    }

    // ---- 9. FLOATING BACK TO TOP BUTTON ----
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) backToTopBtn.classList.add('visible');
            else backToTopBtn.classList.remove('visible');
        });
        backToTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    // ---- 10. FORM SUBMISSION INTERCEPT ----
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (successMessage) {
                successMessage.classList.remove('hidden');
                setTimeout(() => successMessage.classList.add('hidden'), 4000);
            }
            contactForm.reset();
        });
    }

    // ---- INITIALIZE CORE ENGINES ----
    if (typeof SCREENPLAY_PORTFOLIO_DATA !== 'undefined') {
        generateTagCloud();
        updateBookmarkCount();
        renderPortfolioCards(SCREENPLAY_PORTFOLIO_DATA);
    } else {
        scriptsGrid.innerHTML = `<p style="text-align:center; padding: 2rem; color:red; width:100%;">Error: 'scripts-data.js' is either missing or empty. Please create it to load portfolio items.</p>`;
    }
});
