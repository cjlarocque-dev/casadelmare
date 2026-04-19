// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-container')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Image Lightbox Functionality
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalClose = document.querySelector('.modal-close');
const galleryItems = document.querySelectorAll('.gallery-item');

// Open modal when gallery item is clicked
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        modalImage.src = img.src;
        imageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Track gallery view with Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'ViewContent', {
                content_type: 'product',
                content_name: 'Property Gallery',
                value: 0,
                currency: 'USD'
            });
        }
    });
});

// Close modal when close button is clicked
modalClose.addEventListener('click', () => {
    imageModal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the image
imageModal.addEventListener('click', (event) => {
    if (event.target === imageModal) {
        imageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal when escape key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && imageModal.classList.contains('active')) {
        imageModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Track Booking Link Clicks (Book Now CTA)
const bookingLinks = document.querySelectorAll('a[href="https://www.vacasa.com/unit/129066"]');
bookingLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Track booking initiation with Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'InitiateCheckout', {
                content_type: 'product',
                content_name: 'Casa Del Mare Booking',
                value: 0,
                currency: 'USD'
            });
        }
    });
});

// Track Guest Wall Form Submission
const guestWallForm = document.querySelector('.guest-wall-form');
if (guestWallForm) {
    guestWallForm.addEventListener('submit', () => {
        // Track form submission as a lead with Facebook Pixel
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'Guest Wall Submission',
                value: 0,
                currency: 'USD'
            });
        }
    });
}
