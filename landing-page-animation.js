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
