// Add any interactive JavaScript functionality here
document.addEventListener('DOMContentLoaded', function() {
    // Example: Add sliding animation for the homepage
    const slideshow = document.querySelector('.slideshow');
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll('img');
    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? 'block' : 'none';
        });
        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    showSlides();
});
