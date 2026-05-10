document.addEventListener('DOMContentLoaded', () => {
    // DOM Element Declarations
    const themeToggleBtn = document.getElementById('theme-toggle');
    const scriptsGrid = document.getElementById('scripts-grid');
    const searchBar = document.getElementById('search-bar');
    const genreFilter = document.getElementById('genre-filter');
    const formatFilter = document.getElementById('format-filter');
    const contactForm = document.getElementById('portfolio-contact-form');
    const successMessage = document.getElementById('form-success-msg');

    // 1. Core Light / Dark Mode Toggle Logic
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', targetTheme);
    });

    // 2. Render Engine for Portfolio Data Cards
    function renderPortfolioCards(scriptsData) {
        scriptsGrid.innerHTML = ''; // Clear previous items

        if (scriptsData.length === 0) {
            scriptsGrid.innerHTML = `<p style="text-align:center; padding: 2rem; color: var(--text-secondary);">No matching scripts found matching your filter parameters.</p>`;
            return;
        }

        scriptsData.forEach(script => {
            const cardElement = document.createElement('div');
            cardElement.className = 'script-card';
            cardElement.id = `script-${script.id}`;

            cardElement.innerHTML = `
                <div class="script-summary">
                    <div class="script-title-block">
                        <h3>${script.title}</h3>
                        <div class="script-meta-tags">
                            <span class="badge genre-tag">${script.genre}</span>
                            <span class="badge">${script.format}</span>
                            <span class="badge">${script.pages} Pages</span>
                        </div>
                    </div>
                    <div class="accordion-arrow">▼</div>
                </div>
                <div class="script-details-pane">
                    <div class="details-content-inner">
                        <p><strong>Concept Hook:</strong> ${script.hook}</p>
                        <p><strong>Logline Synopsis:</strong> ${script.plot}</p>
                        <p style="margin-bottom: 0.5rem;"><strong>Screenplay Excerpt (Hollywood Standard Layout):</strong></p>
                        <div class="hollywood-script-viewport">${script.excerpt}</div>
                    </div>
                </div>
            `;

            // Accordion Interaction Configuration
            const summaryClickArea = cardElement.querySelector('.script-summary');
            summaryClickArea.addEventListener('click', () => {
                const isCurrentlyExpanded = cardElement.classList.contains('expanded');
                
                // Optional: Collapse all other opened cards prior to opening new one
                document.querySelectorAll('.script-card').forEach(c => c.classList.remove('expanded'));
                
                if (!isCurrentlyExpanded) {
                    cardElement.classList.add('expanded');
                }
            });

            scriptsGrid.appendChild(cardElement);
        });
    }

    // 3. Search and Multi-Parameter Filter Processor
    function processFilters() {
        const searchPhrase = searchBar.value.toLowerCase().trim();
        const activeGenre = genreFilter.value;
        const activeFormat = formatFilter.value;

        const filteredResults = SCREENPLAY_PORTFOLIO_DATA.filter(script => {
            const matchesSearch = script.title.toLowerCase().includes(searchPhrase) || 
                                  script.plot.toLowerCase().includes(searchPhrase) || 
                                  script.hook.toLowerCase().includes(searchPhrase);
            
            const matchesGenre = activeGenre === 'all' || script.genre === activeGenre;
            const matchesFormat = activeFormat === 'all' || script.format === activeFormat;

            return matchesSearch && matchesGenre && matchesFormat;
        });

        renderPortfolioCards(filteredResults);
    }

    // Interactive event triggers for filtering components
    searchBar.addEventListener('input', processFilters);
    genreFilter.addEventListener('change', processFilters);
    formatFilter.addEventListener('change', processFilters);

    // 4. Contact Form Processing Interceptor
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop standard browser submission loop

        // Client-side extraction mockup
        const submissionPayload = {
            senderName: document.getElementById('form-name').value,
            senderEmail: document.getElementById('form-email').value,
            senderMessage: document.getElementById('form-message').value
        };

        // Display Success Notification Feedback safely
        successMessage.classList.remove('hidden');
        contactForm.reset(); // Wipe standard input data fields cleanly

        // Auto collapse notification message safely after 5 seconds
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });

    // Run primary rendering loop using raw global variable module data at startup
    renderPortfolioCards(SCREENPLAY_PORTFOLIO_DATA);
});
