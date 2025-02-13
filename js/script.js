console.log('message from the console');
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
}

