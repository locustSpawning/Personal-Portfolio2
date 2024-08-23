// Import Headers

$(function () {
    $('#desktop-header-div').append(
        jQuery.parseHTML(`
                <header id="portfolio-header" class="sticky">
            <a href="index.html#"
                ><img
                    id="cl-logo-image"
                    src="images/cl-logo.svg"
                    alt="CL-logo-home-link"
            /></a>
            <ul id="portfolio-header-list-links">
                <a href="index.html#"><li>Home</li></a>
                <a href="index.html#work-section"><li>Work</li></a>
                <a href="index.html#about-section"><li>About</li></a>
                <a href="index.html#connect-section"><li>Connect</li></a>
            </ul>
        </header>
                `)
    );
});

$(function () {
    $('#mobile-header-div').append(
        jQuery.parseHTML(`
                 <div id="Mobile-menu" class="sticky">
                <label class="hamburger-menu">
                    <input type="checkbox" />
                </label>
                <aside class="sidebar">
                    <nav id="portfolio-mobile-header-list-links">
                        <a href="index.html#"><li>• Home</li></a>
                        <a href="index.html#work-section"><li>• Work</li></a>
                        <a href="index.html#about-section"><li>• About</li></a>
                        <a href="index.html#connect-section"><li>• Connect</li></a>
                    </nav>
                </aside>
            </div>
                `)
    );
});

// Import Footers

$(function () {
    $('#portfolio-footer-div').append(
        jQuery.parseHTML(`
                  <footer id="portfolio-footer" >
            <button id="footer-button">• Return to top •</button>
            <img id="footer-ink-leaf" src="images/leaf-ink-footer.svg" alt="" />
            <p id="thanks">~ Thanks for visiting!</p>
        </footer>
                `)
    );

    // Return to top button

    const toTop = document.querySelector('#footer-button');

    if (toTop != null) {
        toTop.addEventListener('click', (e) => {
            window.location.href = '#';
        });
    }
});
