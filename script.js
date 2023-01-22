const toggleButton = document.getElementById('hamburger-menu');
const links = document.getElementById('nav-bar-links');

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active');
});

const socialsButton = document.getElementById('link-two');
const social = document.getElementsByClassName('icons')[0];

socialsButton.addEventListener('click', () => {
    social.classList.toggle('active');
})
