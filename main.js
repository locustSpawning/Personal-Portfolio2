// Auto-type animation

const textAnimationGoesHere = document.getElementById('auto-type');

var typed = new Typed(textAnimationGoesHere, {
    strings: [
        'design.',
        'typography.',
        'writing.',
        'illustration.',
        'books.',
        'plants.',
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

// Copy gmail to clipboard

let successDiv = document.getElementById('success-div');
let failDiv = document.getElementById('failed-div');

let currentDiv;

var delayInMilliseconds = 1000; //1 second

function fadeOut(currentDiv) {
    currentDiv.style.opacity = '0';
    currentDiv.style.transition = 'opacity 500ms';
}

let copyEmailButton = document.getElementById('copy-gmail-btn');
copyEmailButton.addEventListener('click', () => {
    navigator.clipboard.writeText('chelsleonhardt@gmail.com').then(
        () => {
            currentDiv = successDiv;
            successDiv.style.opacity = '1';
            successDiv.style.transition = 'opacity 300ms';
            setTimeout(fadeOut, delayInMilliseconds, currentDiv);
        },
        () => {
            currentDiv = failDiv;
            failDiv.style.opacity = '1';
            failDiv.style.transition = 'opacity 300ms';
        }
    );
});

// Import Headers

$(function () {
    $('#desktop-header-div').append(
        jQuery.parseHTML(`
                <header id="portfolio-header" class="sticky">
            <a href="#"
                ><img
                    id="cl-logo-image"
                    src="images/cl-logo.svg"
                    alt="CL-logo-home-link"
            /></a>
            <ul id="portfolio-header-list-links">
                <a href="#"><li>Home</li></a>
                <a href="#work-section"><li>Work</li></a>
                <a href="#about-section"><li>About</li></a>
                <a href="#connect-section"><li>Connect</li></a>
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
                        <a href="#"><li>• Home</li></a>
                        <a href="#work-section"><li>• Work</li></a>
                        <a href="#about-section"><li>• About</li></a>
                        <a href="#connect-section"><li>• Connect</li></a>
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
