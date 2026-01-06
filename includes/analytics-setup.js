// Event tracking helper
function trackEvent(eventName, eventParams = {}) {
    if (window.gtag) {
        window.gtag('event', eventName, eventParams);
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    // Event tracking initialization

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
