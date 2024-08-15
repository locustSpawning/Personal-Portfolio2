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

// Return to top button

const toTop = document.querySelector('#footer-button');

if (toTop != null) {
    toTop.addEventListener('click', (e) => {
        window.location.href = '#';
    });
}

// Make arrow move on hover

// let linkArrow = document.getElementById('view-work-link');

// linkArrow.addEventListener('mouseenter', (event) => {
//     setTimeout(function () {
//         linkArrow.innerHTML = '&nbsp;View work&nbsp; ➤';
//     }, 250);
// });

// linkArrow.addEventListener('mouseleave', (event) => {
//     setTimeout(function () {
//         linkArrow.innerHTML = 'View work ➤';
//     }, 250);
// });

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
