document.addEventListener('DOMContentLoaded', () => {
    // ---- DOM PARAMETER DECLARATIONS ----
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
    let storyboardIntervalTimers = {}; // Track looping animation state vectors

    // ---- 1. CORE LIGHT / DARK MODE TOGGLE ----
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', targetTheme);
    });

    // ---- 2. BOOKMARK STATUS SUBSYSTEM ----
    function updateBookmarkCount() {
        if (savedCountBadge) savedCountBadge.textContent = savedScriptsList.length;
    }

    // ---- 3. GENERATE DYNAMIC THEME TAG CLOUD ----
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

    // ---- 4. MAIN CARD RENDER LOOP ENGINE (V4.1 INTEGRATED) ----
    function renderPortfolioCards(scriptsData) {
        // Clear past active animation loop intervals to stop memory leaks
        Object.values(storyboardIntervalTimers).forEach(clearInterval);
        storyboardIntervalTimers = {};
        scriptsGrid.innerHTML = '';

        if (scriptsData.length === 0) {
            scriptsGrid.innerHTML = `<p style="text-align:center; padding: 2rem; color: var(--text-secondary); width:100%;">No projects found matching your engineering filter matrix.</p>`;
            return;
        }

        scriptsData.forEach(script => {
            const cardElement = document.createElement('div');
            cardElement.className = 'script-card';
            cardElement.id = `script-${script.id}`;

            const isBookmarked = savedScriptsList.includes(script.id);
            const bookmarkIcon = isBookmarked ? '★ Bookmarked' : '☆ Bookmark';

            // Build out Character Slate rows
            let charactersHtml = '';
            script.characters.forEach(char => {
                charactersHtml += `<li><strong>${char.name}</strong> (${char.castAge} | ${char.archetype}) - ${char.desc}</li>`;
            });

            // Build out Version 4.0/4.1 Automated Loop Storyboard Frame Blocks
            let storyboardFramesHtml = '';
            script.storyboard.forEach((frame, idx) => {
                const isActiveClass = idx === 0 ? 'active-storyboard
