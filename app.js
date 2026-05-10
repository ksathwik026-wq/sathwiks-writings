document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM ELEMENT SELECTION ENGINE ----
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
    let savedScriptsList = JSON.parse(localStorage.getItem('sathwik_bookmarks_v4')) || [];
    
    // Global active intervals tracker dictionary object for Version 4.1 looping animation storage
    let storyboardIntervals = {};
    let storyboardCurrentFrames = {};
    let storyboardSpeeds = {};

    // ---- 1. SYSTEM LIGHT / DARK MULTI-THEME TOGGLER ----
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', targetTheme);
    });

    function updateBookmarkCount() {
        if (savedCountBadge) savedCountBadge.textContent = savedScriptsList.length;
    }

    // ---- 2. DYNAMIC THEMATIC TAG CLOUD GENERATION ----
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
            span.textContent = `#\${tag}`;
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

    // ---- 3. VERSION 4.1 STORYBOARD LOOP SYSTEM CONTROLLER ----
    function startStoryboardLoop(scriptId) {
        if (storyboardIntervals[scriptId]) clearInterval(storyboardIntervals[scriptId]);
        
        const card = document.getElementById(`script-\${scriptId}`);
        if (!card) return;

        const frames = card.querySelectorAll('.v4-frame-slide');
        const indicator = card.querySelector('.v4-frame-indicator');
        const speed = storyboardSpeeds[scriptId] || 2500;

        storyboardIntervals[scriptId] = setInterval(() => {
            frames[storyboardCurrentFrames[scriptId]].classList.remove('active-frame');
            
            // Increment ring loop bounded to total storyboard frames depth size (4 frames)
            storyboardCurrentFrames[scriptId] = (storyboardCurrentFrames[scriptId] + 1) % frames.length;
            
            frames[storyboardCurrentFrames[scriptId]].classList.add('active-frame');
            if (indicator) {
                indicator.textContent = `Frame \({storyboardCurrentFrames[scriptId] + 1} of\){frames.length}`;
            }
        }, speed);
    }

    function stopStoryboardLoop(scriptId) {
        if (storyboardIntervals[scriptId]) {
            clearInterval(storyboardIntervals[scriptId]);
            storyboardIntervals[scriptId] = null;
        }
    }

    // ---- 4. DYNAMIC PORTFOLIO LAYOUT ENGINE RENDER BLOCK ----
    function renderPortfolioCards(scriptsData) {
        scriptsGrid.innerHTML = '';

        if (scriptsData.length === 0) {
            scriptsGrid.innerHTML = `<p style="text-align:center; padding: 2rem; color: var(--text-secondary); width:100%;">No projects match your chosen criteria.</p>`;
            return;
        }

        scriptsData.forEach(script => {
            const cardElement = document.createElement('div');
            cardElement.className = 'script-card';
            cardElement.id = `script-\${script.id}`;

            const isBookmarked = savedScriptsList.includes(script.id);
            const bookmarkIcon = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';

            // Seed default animation variable configurations if empty
            if (storyboardCurrentFrames[script.id] === undefined) storyboardCurrentFrames[script.id] = 0;
            if (storyboardSpeeds[script.id] === undefined) storyboardSpeeds[script.id] = 2500;

            // Idea 6: Generating 4x Multi-Frame Cinematic Storyboard Mock Layout Blocks with 4.1 Clapboard Data Overlays
            let storyboardFramesHtml = '';
            script.storyboard.forEach((sb, index) => {
                const isActiveClass = index === storyboardCurrentFrames[script.id] ? 'active-frame' : '';
                storyboardFramesHtml += `
                    <div class="v4-frame-slide \({isActiveClass}" data-frame="\){sb.frame}">
                        <div class="v4-frame-image-mock">
                            <h4>[ CINEMATIC FRAME BLANK \${sb.frame} ]</h4>
                            <p class="v4-frame-notes"><strong>\({sb.shot}:</strong>\){sb.notes}</p>
                            
                            <!-- VERSION 4.1 INTERACTIVE CLAPBOARD HOVER OVERLAY BLOCK -->
                            <div class="v4-clapboard-overlay">
                                <div class="v4-clapboard-top-stripes"></div>
                                <div class="v4-clapboard-grid">
                                    <div class="v4-clapboard-cell">ROLL<span>4.1A</span></div>
                                    <div class="v4-clapboard-cell">SCENE<span>\({script.id}\){sb.frame}</span></div>
                                    <div class="v4-clapboard-cell">TAKE<span>01</span></div>
                                </div>
                                <div style="text-align:center; font-size:0.7rem; font-weight:bold; border-bottom:1px solid #fff; padding-bottom:2px; margin-bottom:4px;">
                                    DIR: K. SATHWIK PRINCE
                                
