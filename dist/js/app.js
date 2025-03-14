document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        let isValid = true;
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        
        inputs.forEach(function(input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert('Please fill out all required fields.');
        }
    });

    // Smooth scroll functionality
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animations or effects
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(function(element) {
        observer.observe(element);
    });

    // Lightbox functionality    // Image slider functionality






















});    });        lightbox.classList.remove('active');    lightbox.addEventListener('click', () => {    });        });            lightbox.appendChild(img);            }                lightbox.removeChild(lightbox.firstChild);            while (lightbox.firstChild) {            img.src = image.src;            const img = document.createElement('img');            lightbox.classList.add('active');        image.addEventListener('click', () => {    images.forEach(image => {    const images = document.querySelectorAll('.lightbox-image');    document.body.appendChild(lightbox);    lightbox.id = 'lightbox';    const lightbox = document.createElement('div');    const slider = document.querySelector('.image-slider');
    if (slider) {
        const slides = slider.querySelectorAll('.slide');
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.display = i === index ? 'block' : 'none';
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        slider.querySelector('.next').addEventListener('click', nextSlide);
        slider.querySelector('.prev').addEventListener('click', prevSlide);

        showSlide(currentIndex);
    }
});
