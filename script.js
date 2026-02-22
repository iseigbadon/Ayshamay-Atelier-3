/* ================================================
   AYSHAMAY ATELIER - JAVASCRIPT
   Smooth Interactions, Scroll Animations, Mobile Menu
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initScrollAnimations();
    initLazyLoading();
    initImagePreloader();
    initImageErrorHandling();
});

/* ================================================
   MOBILE MENU TOGGLE
   ================================================ */

function initMobileMenu() {
    const hamburger = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = event.target.closest('.navbar');
        if (!isClickInsideNav && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    function toggleMenu() {
        navMenu.classList.toggle('active');
    }

    function closeMenu() {
        navMenu.classList.remove('active');
    }
}

/* ================================================
   INTERSECTION OBSERVER FOR SCROLL ANIMATIONS
   ================================================ */

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.reveal-text, .reveal-fade, .fade-in-scroll, ' +
        '.slide-in-left, .slide-in-right, ' +
        '.story-section, .craft-card, .collection-item, .value'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation classes to elements for staggered effect
    const staggerElements = document.querySelectorAll('.craft-card, .collection-item');
    staggerElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
        el.classList.add('fade-in-scroll');
    });
}

/* ================================================
   LAZY LOADING IMAGES
   ================================================ */

function initLazyLoading() {
    // Native lazy loading is handled by HTML loading="lazy" attribute
    // No additional JavaScript needed
    // Browser automatically loads images when they enter the viewport
}

/* ================================================
   IMAGE PRELOADER FOR HERO
   ================================================ */

function initImagePreloader() {
    // Preload hero image for critical LCP (Largest Contentful Paint)
    const heroImage = document.querySelector('.hero-image-full');
    if (heroImage && heroImage.src) {
        const img = new Image();
        img.src = heroImage.src;
    }

    // Preload first gallery images
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach((img, index) => {
        if (index <= 2) {  // Preload first 3 visible gallery images
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    });

    // Preload collection images
    const collectionImages = document.querySelectorAll('.collection-image');
    collectionImages.forEach((img, index) => {
        if (index <= 3) {  // Preload first 4 collection items
            const preloadImg = new Image();
            preloadImg.src = img.src;
        }
    });
}

/* ================================================
   SMOOTH SCROLL BEHAVIOR
   ================================================ */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // navbar height
            const targetPosition = target.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

/* ================================================
   PARALLAX EFFECT ON IMAGES
   ================================================ */

window.addEventListener('scroll', function() {
    const heroImageContainer = document.querySelector('.hero-image-container');
    if (heroImageContainer) {
        const scrollPosition = window.pageYOffset;
        const container = heroImageContainer.getBoundingClientRect();
        
        if (container.top < window.innerHeight) {
            const parallaxOffset = (window.innerHeight - container.top) * 0.2;
            heroImageContainer.style.transform = `translateY(-${parallaxOffset}px)`;
        }
    }

    // Parallax for full-width images with img tags
    const fullWidthImages = document.querySelectorAll('.full-width-image, .hero-image-overlay');
    fullWidthImages.forEach(section => {
        const img = section.querySelector('img');
        if (img) {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const parallaxOffset = (window.innerHeight - rect.top) * 0.1;
                img.style.transform = `translateY(${parallaxOffset * 0.5}px)`;
            }
        }
    });
});

/* ================================================
   BUTTON INTERACTIONS
   ================================================ */

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        // Remove any existing ripple
        const existingRipple = this.querySelector('.ripple');
        if (existingRipple) existingRipple.remove();

        this.appendChild(ripple);

        // Navigate or handle action
        console.log('Button clicked:', this.textContent);
    });
});

/* ================================================
   SCROLL INDICATOR INTERACTION
   ================================================ */

const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    });

    // Hide scroll indicator when scrolling
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            scrollIndicator.style.opacity = '0';
            scrollIndicator.style.pointerEvents = 'none';
        } else {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.pointerEvents = 'auto';
        }
    });
}

/* ================================================
   NAVIGATION ACTIVE STATE
   ================================================ */

window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const fromTop = window.scrollY;

    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section) {
            if (section.offsetTop - 100 <= fromTop && 
                section.offsetTop + section.offsetHeight > fromTop) {
                navLinks.forEach(l => l.style.color = '');
                link.style.color = 'var(--accent-gold)';
            }
        }
    });
});

/* ================================================
   GALLERY HOVER EFFECTS
   ================================================ */

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        const allItems = document.querySelectorAll('.gallery-item');
        allItems.forEach(i => {
            if (i !== this) {
                i.style.opacity = '0.6';
            }
        });
    });

    item.addEventListener('mouseleave', function() {
        const allItems = document.querySelectorAll('.gallery-item');
        allItems.forEach(i => {
            i.style.opacity = '1';
        });
    });
});

/* ================================================
   COLLECTION CARD INTERACTIONS
   ================================================ */

document.querySelectorAll('.collection-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/* ================================================
   ANNOUNCE SIGNIFICANT MILESTONES
   ================================================ */

function announcePageLoad() {
    console.log('%c Ayshamay Atelier', 'font-size: 20px; font-weight: bold; color: #c9a961;');
    console.log('%c Nigerian Bespoke Couture | Crafted with Pride', 'font-size: 12px; color: #8a8a8a;');
    console.log('%c Where every stitch celebrates heritage.', 'font-style: italic; color: #666;');
}

/* ================================================
   IMAGE ERROR HANDLING & VALIDATION
   ================================================ */

function initImageErrorHandling() {
    const images = document.querySelectorAll('img[src]');
    
    images.forEach(img => {
        // Add loading class for skeleton effect
        img.classList.add('image-loading');
        
        // Handle successful load
        img.addEventListener('load', function() {
            this.classList.remove('image-loading');
            console.log('✓ Loaded:', this.src);
        });
        
        // Handle error with fallback
        img.addEventListener('error', function() {
            this.classList.remove('image-loading');
            console.error('✗ Failed to load:', this.src);
            this.style.backgroundColor = '#e8e8e8';
            this.style.minHeight = '250px';
            this.alt = 'Image unavailable - ' + this.src.split('/').pop();
        });
    });
}

announcePageLoad();

/* ================================================
   PERFORMANCE OPTIMIZATION
   ================================================ */

// Debounce scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        // Heavy operations can go here
    }, 100);
}, { passive: true });

// Preload fonts for faster rendering
const link = document.createElement('link');
link.rel = 'preload';
link.as = 'font';
link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap';
link.type = 'text/css';
document.head.appendChild(link);
