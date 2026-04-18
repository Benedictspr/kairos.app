// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
let isOpen = false;

menuBtn.addEventListener('click', () => {
    isOpen = !isOpen;
    if (isOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.setAttribute('data-lucide', 'x');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        isOpen = false;
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Intersection Observer for Reveal animations
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Scroll listener for Navbar effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('translate-y-[-5px]');
        navbar.querySelector('.glass').classList.add('bg-black/80');
    } else {
        navbar.classList.remove('translate-y-[-5px]');
        navbar.querySelector('.glass').classList.remove('bg-black/80');
    }
});
