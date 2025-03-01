console.log('message from the console');
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
    closeIcon.classList.toggle('active');
}

 // Show button when user scrolls down
 window.onscroll = function() {
    console.log('from window scroll');
    
    const backToTopButton = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from redirecting or reloading
    alert("Form submitted successfully!"); 
    window.location.href = "http://127.0.0.1:5500/home.html";
});
