document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const photos = document.querySelectorAll('.photo img');
    let currentIndex = 0;

    // Open lightbox on image click
    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            currentIndex = index;  // Use the loop index directly
            showLightbox(photo.src);
        });
    });

    function showLightbox(src) {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
    }

    // Hide lightbox on close button click
    document.querySelector('.close').addEventListener('click', hideLightbox);

    // Handle previous and next buttons
    window.changeImage = function (direction) {
        currentIndex += direction;

        if (currentIndex >= photos.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = photos.length - 1;

        lightboxImg.src = photos[currentIndex].src;
    }

    // Toggle Mobile Menu
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.style.display = 'flex';
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });

    // Optional: Close the mobile menu when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            mobileMenu.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const photos = document.querySelectorAll('.photo img');
    let currentIndex = 0;

    // Open lightbox on image click
    photos.forEach((photo, index) => {
        photo.addEventListener('click', () => {
            currentIndex = index;  // Use the loop index directly
            showLightbox(photo.src);
        });
    });

    function showLightbox(src) {
        lightbox.style.display = 'flex';
        lightboxImg.src = src;
    }

    function hideLightbox() {
        lightbox.style.display = 'none';
    }

    // Hide lightbox on close button click
    document.querySelector('.close').addEventListener('click', hideLightbox);

    // Handle previous and next buttons
    window.changeImage = function (direction) {
        currentIndex += direction;

        if (currentIndex >= photos.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = photos.length - 1;

        lightboxImg.src = photos[currentIndex].src;
    }

    // Toggle Mobile Menu
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.add('show');
        mobileMenuOverlay.style.display = 'block';
    });

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
        mobileMenuOverlay.style.display = 'none';
    });

    // Optional: Close the mobile menu when clicking outside of it
    window.addEventListener('click', (e) => {
        if (e.target === mobileMenuOverlay) {
            mobileMenu.classList.remove('show');
            mobileMenuOverlay.style.display = 'none';
        }
    });
});
