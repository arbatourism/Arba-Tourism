// Header visibility on scroll
function updateHeaderVisibility() {
    const header = document.querySelector('header');

    if (header) {
        if (window.scrollY > 0) {
            header.classList.add('header-visible');
        } else {
            header.classList.remove('header-visible');
        }
    }
}

// Check on page load
window.addEventListener('load', updateHeaderVisibility);

// Check on DOMContentLoaded as backup
document.addEventListener('DOMContentLoaded', updateHeaderVisibility);

// Check on scroll
window.addEventListener('scroll', updateHeaderVisibility);
