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
