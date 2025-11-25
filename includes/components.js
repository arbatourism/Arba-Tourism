// Header and Footer HTML Templates
const headerHTML = `<header>
    <nav class="navbar">
        <a href="index.html" class="logo">
            <img src="https://i.imgur.com/p4uERZs.png" alt="Logo">
        </a>
        <ul class="nav-menu">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li class="dropdown">
                <a href="top-dubai-tours.html" class="nav-link">Desert Adventures <span class="dropdown-arrow">▼</span></a>
                <div class="dropdown-content">
                    <div class="submenu">
                        <a href="top-abu-dhabi-tours.html" class="submenu-trigger">Abu Dhabi Desert <span class="arrow-right">›</span></a>
                        <div class="submenu-content">
                            <a href="sunrise-safari-abudhabi.html">Sunrise Safari Abu Dhabi</a>
                            <a href="abudhabi-morning-desert-safari-dune-ride.html">Morning Safari Abu Dhabi</a>
                            <a href="abudhabi-desert-safari-bbq-camel-ride.html">Evening Safari Abu Dhabi</a>
                            <a href="overnight-camp-abudhabi.html">Overnight Camp Abu Dhabi</a>
                        </div>
                    </div>
                    <div class="submenu">
                        <a href="top-dubai-tours.html" class="submenu-trigger">Dubai Desert <span class="arrow-right">›</span></a>
                        <div class="submenu-content">
                            <a href="sunrise-safari-dubai.html">Sunrise Safari Dubai</a>
                            <a href="morning-safari-dubai.html">Morning Safari Dubai</a>
                            <a href="dubai-red-dunes-quad-bike-safari.html">Evening Safari Dubai</a>
                            <a href="overnight-camp-dubai.html">Overnight Camp Dubai</a>
                        </div>
                    </div>
                    <div class="submenu">
                        <a href="dubai-adventure-dune-buggy-camel-bbq.html" class="submenu-trigger">Dune Drive <span class="arrow-right">›</span></a>
                        <div class="submenu-content">
                            <a href="dubai-adventure-dune-buggy-camel-bbq.html">Dune Buggy</a>
                            <a href="dubai-quad-bike-safari-camel-ride.html">Quad Bike</a>
                        </div>
                    </div>
                </div>
            </li>
            <li class="dropdown">
                <a href="top-dubai-tours.html" class="nav-link">City Attractions <span class="dropdown-arrow">▼</span></a>
                <div class="dropdown-content">
                    <div class="submenu">
                        <a href="abu-dhabi-city-tour.html" class="submenu-trigger">Abu Dhabi <span class="arrow-right">›</span></a>
                        <div class="submenu-content">
                            <a href="dubai-half-day-tour-blue-mosque-creek.html">Half Day City Tour Abu Dhabi</a>
                            <a href="abu-dhabi-city-tour.html">Full Day City Tour Abu Dhabi</a>
                            <a href="combo-dubai-city-tour-evening-safari.html">COMBO Abu Dhabi City Tour & Desert Safari</a>
                            <a href="top-abu-dhabi-tours.html">Top Abu Dhabi Tours</a>
                        </div>
                    </div>
                    <div class="submenu">
                        <a href="dubai-city-tour.html" class="submenu-trigger">Dubai <span class="arrow-right">›</span></a>
                        <div class="submenu-content">
                            <a href="dubai-half-day-tour-blue-mosque-creek.html">Half Day City Tour Dubai</a>
                            <a href="dubai-full-day-city-tour-burj-khalifa.html">Full Day City Tour Dubai</a>
                            <a href="combo-dubai-city-tour-evening-safari.html">COMBO Dubai City Tour & Desert Safari</a>
                            <a href="top-dubai-tours.html">Top Dubai Tours</a>
                        </div>
                    </div>
                    <a href="vip-events.html">VIP Events</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="dhow-cruise.html" class="nav-link">Cruise & Boat <span class="dropdown-arrow">▼</span></a>
                <div class="dropdown-content">
                    <a href="dubai-jetski-burj-al-arab-view.html">Yacht & Jet Ski</a>
                    <a href="dhow-cruise.html">Dhow Cruise</a>
                    <a href="dhow-cruise.html">Luxury Cruise</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="gallery.html" class="nav-link">Gallery <span class="dropdown-arrow">▼</span></a>
                <div class="dropdown-content">
                    <a href="gallery.html">Photo Gallery</a>
                    <a href="testimonials.html">Testimonials</a>
                    <a href="about-us.html">About Us</a>
                </div>
            </li>
            <li class="dropdown">
                <a href="about-us.html" class="nav-link">About Us <span class="dropdown-arrow">▼</span></a>
                <div class="dropdown-content">
                    <a href="about-us.html#who-we-are">Who We Are ?</a>
                    <a href="about-us.html#why-us">Why Us?</a>
                    <a href="about-us.html#mission">Mission Statement</a>
                    <a href="about-us.html#vision">Vision Statement</a>
                </div>
            </li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
        <button class="search-btn" onclick="window.location.href='top-dubai-tours.html'" title="Browse Tours">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
        </button>
    </nav>
</header>`;

const footerHTML = `<footer class="footer">
    <div class="footer-container">
        <div class="footer-column">
            <h3 class="footer-title">Get In Touch</h3>
            <div class="footer-contact">
                <p><i class="icon-phone"></i> +971 52 521 4149</p>
                <p><i class="icon-email"></i> info@arbatourism.com</p>
            </div>
        </div>

        <div class="footer-column">
            <h3 class="footer-title">Quick Links</h3>
            <ul class="footer-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="contact.html">Contact Us</a></li>
                <li><a href="contact.html">Book Now</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="testimonials.html">Reviews</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h3 class="footer-title">Popular Tours</h3>
            <ul class="footer-links">
                <li><a href="abu-dhabi-city-tour.html">Abu Dhabi City Tours</a></li>
                <li><a href="dubai-city-tour.html">Dubai City Tours</a></li>
                <li><a href="sunrise-safari-dubai.html">Sunrise Desert Safari</a></li>
                <li><a href="morning-safari-dubai.html">Morning Desert Safari</a></li>
                <li><a href="overnight-camp-dubai.html">Overnight Desert Camp</a></li>
                <li><a href="ferrari-world.html">Ferrari World</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h3 class="footer-title" style="color: #d4a574; font-size: 18px; margin-bottom: 15px;">Send Us a Message</h3>
            <form id="footerContactForm" action="https://formsubmit.co/info@arbatourism.com" method="POST" style="display: flex; flex-direction: column; gap: 12px;">
                <input type="text" name="name" placeholder="Your Name" required style="padding: 12px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); color: white; border-radius: 8px; font-size: 14px; font-weight: 500; transition: all 0.3s;" onfocus="this.style.borderColor='#d4a574'; this.style.background='rgba(255,255,255,0.2)'" onblur="this.style.borderColor='rgba(255,255,255,0.3)'; this.style.background='rgba(255,255,255,0.15)'">
                <input type="tel" name="phone" placeholder="Phone Number" required style="padding: 12px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); color: white; border-radius: 8px; font-size: 14px; font-weight: 500; transition: all 0.3s;" onfocus="this.style.borderColor='#d4a574'; this.style.background='rgba(255,255,255,0.2)'" onblur="this.style.borderColor='rgba(255,255,255,0.3)'; this.style.background='rgba(255,255,255,0.15)'">
                <input type="email" name="email" placeholder="Your Email" required style="padding: 12px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); color: white; border-radius: 8px; font-size: 14px; font-weight: 500; transition: all 0.3s;" onfocus="this.style.borderColor='#d4a574'; this.style.background='rgba(255,255,255,0.2)'" onblur="this.style.borderColor='rgba(255,255,255,0.3)'; this.style.background='rgba(255,255,255,0.15)'">
                <textarea name="message" placeholder="Your Message" rows="3" required style="padding: 12px; border: 2px solid rgba(255,255,255,0.3); background: rgba(255,255,255,0.15); color: white; border-radius: 8px; font-size: 14px; font-weight: 500; resize: none; transition: all 0.3s;" onfocus="this.style.borderColor='#d4a574'; this.style.background='rgba(255,255,255,0.2)'" onblur="this.style.borderColor='rgba(255,255,255,0.3)'; this.style.background='rgba(255,255,255,0.15)'"></textarea>
                <input type="hidden" name="_subject" value="New Footer Contact Form - Arba Tourism">
                <input type="hidden" name="_template" value="table">
                <input type="hidden" name="_captcha" value="false">
                <input type="text" name="_honey" style="display:none">
                <button type="submit" style="padding: 14px; background: linear-gradient(135deg, #c67b3e 0%, #d4a574 100%); color: white; border: none; border-radius: 8px; font-weight: 800; cursor: pointer; font-size: 15px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(198, 123, 62, 0.4);" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 6px 20px rgba(198, 123, 62, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(198, 123, 62, 0.4)'">SEND MESSAGE</button>
            </form>
        </div>
    </div>

    <div class="footer-bottom">
        <div class="footer-bottom-content">
            <div class="footer-social">
                <a href="https://www.facebook.com/share/19mqXYMotN/" target="_blank" rel="noopener noreferrer" class="social-btn" data-platform="Facebook" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span class="social-label">Facebook</span>
                </a>
                <a href="https://www.instagram.com/arba4tourism.llc?igsh=cWs2NHJkNXdsOG9r" target="_blank" rel="noopener noreferrer" class="social-btn" data-platform="Instagram" aria-label="Instagram">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                    <span class="social-label">Instagram</span>
                </a>
                <a href="https://www.youtube.com/@chikkuamalc4/videos" target="_blank" rel="noopener noreferrer" class="social-btn" data-platform="YouTube" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span class="social-label">YouTube</span>
                </a>
            </div>
        </div>
    </div>
</footer>

<!-- WhatsApp Floating Button -->
<a href="https://wa.me/971525214149" target="_blank" rel="noopener noreferrer" class="whatsapp-float" aria-label="Chat on WhatsApp" style="position: fixed; bottom: 30px; right: 30px; width: 65px; height: 65px; background: linear-gradient(135deg, #25D366 0%, #128C7E 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4); z-index: 9999; transition: all 0.3s; text-decoration: none; animation: whatsappPulse 2s infinite;" onmouseover="this.style.transform='scale(1.15)'; this.style.boxShadow='0 12px 35px rgba(37, 211, 102, 0.6)'" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 8px 25px rgba(37, 211, 102, 0.4)'">
    <svg width="38" height="38" viewBox="0 0 24 24" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
</a>

<style>
@keyframes whatsappPulse {
    0%, 100% {
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.7);
    }
    50% {
        box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4), 0 0 0 15px rgba(37, 211, 102, 0);
    }
}
</style>
`;

// Load Header and Footer on page load
document.addEventListener('DOMContentLoaded', function() {
    // Insert Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        setActiveNav();
    }

    // Insert Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;

        // Handle footer contact form submission
        const footerForm = document.getElementById('footerContactForm');
        if (footerForm) {
            footerForm.addEventListener('submit', async function(e) {
                e.preventDefault();

                const submitBtn = footerForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'SENDING...';
                submitBtn.disabled = true;

                const formData = new FormData(footerForm);

                try {
                    const response = await fetch(footerForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });

                    if (response.ok) {
                        // Show success popup
                        showFooterSuccessPopup();
                        footerForm.reset();
                    } else {
                        alert('Something went wrong. Please try again or contact us directly.');
                    }
                } catch (error) {
                    alert('Something went wrong. Please try again or contact us directly.');
                } finally {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            });
        }
    }
});

// Footer Success Popup Functions
function showFooterSuccessPopup() {
    // Create popup if it doesn't exist
    let popup = document.getElementById('footerSuccessPopup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'footerSuccessPopup';
        popup.innerHTML = `
            <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 99999; opacity: 0; transition: opacity 0.3s;">
                <div style="background: linear-gradient(135deg, #2d1f15 0%, #1a1410 100%); padding: 40px; border-radius: 20px; text-align: center; max-width: 500px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.5); border: 2px solid #d4a574; position: relative; transform: scale(0.8); transition: transform 0.3s;">
                    <button onclick="closeFooterSuccessPopup()" style="position: absolute; top: 15px; right: 15px; background: rgba(255,255,255,0.1); border: none; width: 35px; height: 35px; border-radius: 50%; cursor: pointer; font-size: 20px; color: white; font-weight: bold; transition: all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.2)'; this.style.transform='rotate(90deg)'" onmouseout="this.style.background='rgba(255,255,255,0.1)'; this.style.transform='rotate(0)'">✕</button>

                    <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #c67b3e 0%, #d4a574 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; box-shadow: 0 10px 30px rgba(198, 123, 62, 0.4);">
                        <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>

                    <h2 style="color: #d4a574; font-size: 32px; margin-bottom: 15px; font-weight: 900;">Thank You!</h2>
                    <p style="color: rgba(255,255,255,0.9); font-size: 16px; line-height: 1.6; margin-bottom: 30px;">Your message has been received successfully. We'll get back to you as soon as possible!</p>

                    <button onclick="closeFooterSuccessPopup()" style="padding: 14px 40px; background: linear-gradient(135deg, #c67b3e 0%, #d4a574 100%); color: white; border: none; border-radius: 50px; font-weight: 800; cursor: pointer; font-size: 15px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(198, 123, 62, 0.4);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(198, 123, 62, 0.6)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(198, 123, 62, 0.4)'">Close</button>
                </div>
            </div>
        `;
        document.body.appendChild(popup);

        // Close on clicking outside
        popup.addEventListener('click', function(e) {
            if (e.target === popup.querySelector('div')) {
                closeFooterSuccessPopup();
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeFooterSuccessPopup();
            }
        });
    }

    // Show popup with animation
    const overlay = popup.querySelector('div');
    const modal = overlay.querySelector('div');
    popup.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
        modal.style.transform = 'scale(1)';
    }, 10);

    // Auto close after 5 seconds
    setTimeout(closeFooterSuccessPopup, 5000);
}

function closeFooterSuccessPopup() {
    const popup = document.getElementById('footerSuccessPopup');
    if (popup) {
        const overlay = popup.querySelector('div');
        const modal = overlay.querySelector('div');
        overlay.style.opacity = '0';
        modal.style.transform = 'scale(0.8)';
        setTimeout(() => {
            popup.style.display = 'none';
        }, 300);
    }
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