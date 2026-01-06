/**
 * Google Analytics 4 (GA4) Setup
 * Replace 'G-7QYVKQXQZF' with your actual Measurement ID
 */

const GA_MEASUREMENT_ID = 'G-7QYVKQXQZF'; // TODO: Replace with actual ID

// Function to load Google Analytics Script
function loadGoogleAnalytics() {
    // specific check to avoid double loading
    if (document.getElementById('ga-script')) return;

    const script = document.createElement('script');
    script.id = 'ga-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
        'page_path': window.location.pathname,
        'send_page_view': true
    });
}

// Track custom events helper
function trackEvent(eventName, eventParams = {}) {
    if (window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    loadGoogleAnalytics();

    // Track clicks on important elements
    document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button');
        if (target) {
            const isButton = target.tagName === 'BUTTON' || target.classList.contains('btn') || target.classList.contains('contact-us-btn');
            const isNav = target.closest('.nav-menu') || target.closest('.footer-links');
            
            let eventCategory = 'interaction';
            if (isButton) eventCategory = 'button_click';
            if (isNav) eventCategory = 'navigation_click';

            const label = target.textContent.trim() || target.getAttribute('aria-label') || 'unlabeled';
            
            // Only track if it looks significant
            if (isButton || isNav || target.href) {
                trackEvent('click', {
                    'event_category': eventCategory,
                    'event_label': label,
                    'link_url': target.href || ''
                });
            }
        }
    });

    // Track form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', () => {
            trackEvent('form_submission', {
                'form_id': form.id || 'unknown_form',
                'form_target': form.action
            });
        });
    });
});
