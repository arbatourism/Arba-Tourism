// Load Header and Footer dynamically
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', 'includes/header.html', setActiveNav);
    loadComponent('footer-placeholder', 'includes/footer.html');
});

// Function to load components using XMLHttpRequest (works with file:// protocol)
function loadComponent(placeholderId, filePath, callback) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder) return;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', filePath, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) { // status 0 for file:// protocol
                placeholder.innerHTML = xhr.responseText;
                if (callback) callback();
            } else {
                console.error('Error loading ' + filePath + ':', xhr.status);
            }
        }
    };

    xhr.send();
}

// Function to set active navigation based on current page
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');

        // Check if link matches current page
        if (href === currentPage) {
            link.classList.add('active');
        }
        // Special case for about-us pages
        else if (currentPage.includes('about-us') && href === 'about-us.html') {
            link.classList.add('active');
        }
        // Special case for contact page
        else if (currentPage === 'contact.html' && href === 'contact.html') {
            link.classList.add('active');
        }
    });
}