// Mobile Menu Functionality for all pages
document.addEventListener('DOMContentLoaded', function () {
    // Create mobile menu overlay structure if it doesn't exist
    if (!document.getElementById('mobileMenuOverlay')) {
        const mobileMenuHTML = `
            <!-- Mobile Menu Backdrop -->
            <div class="mobile-menu-backdrop" id="mobileMenuBackdrop"></div>
            
            <!-- Mobile Menu Overlay -->
            <div class="mobile-menu-overlay" id="mobileMenuOverlay">
                <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">&times;</button>
                
                <ul class="mobile-nav-menu">
                    <li><a href="index.html" class="mobile-nav-link">Home</a></li>
                    
                    <li class="mobile-dropdown">
                        <button class="mobile-dropdown-toggle">
                            Desert Adventures <span class="mobile-dropdown-arrow">▼</span>
                        </button>
                        <div class="mobile-dropdown-content">
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle">
                                    Abu Dhabi Desert <span class="mobile-dropdown-arrow">▼</span>
                                </button>
                                <div class="mobile-submenu-content">
                                    <a href="sunrise-safari-abudhabi.html">Sunrise Safari Abu Dhabi</a>
                                    <a href="morning-safari-abudhabi.html">Morning Safari Abu Dhabi</a>
                                    <a href="evening-safari-abudhabi.html">Evening Safari Abu Dhabi</a>
                                    <a href="overnight-camp-abudhabi.html">Overnight Camp Abu Dhabi</a>
                                </div>
                            </div>
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle">
                                    Dubai Desert <span class="mobile-dropdown-arrow">▼</span>
                                </button>
                                <div class="mobile-submenu-content">
                                    <a href="sunrise-safari-dubai.html">Sunrise Safari Dubai</a>
                                    <a href="morning-safari-dubai.html">Morning Safari Dubai</a>
                                    <a href="evening-safari-dubai.html">Evening Safari Dubai</a>
                                    <a href="overnight-camp-dubai.html">Overnight Camp Dubai</a>
                                </div>
                            </div>
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle">
                                    Dune Drive <span class="mobile-dropdown-arrow">▼</span>
                                </button>
                                <div class="mobile-submenu-content">
                                    <a href="dune-buggy-quad-bike.html">Dune Buggy</a>
                                    <a href="dune-buggy-quad-bike.html#quad-bike">Quad Bike</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li class="mobile-dropdown">
                        <button class="mobile-dropdown-toggle">
                            City Attractions <span class="mobile-dropdown-arrow">▼</span>
                        </button>
                        <div class="mobile-dropdown-content">
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle">
                                    Abu Dhabi <span class="mobile-dropdown-arrow">▼</span>
                                </button>
                                <div class="mobile-submenu-content">
                                    <a href="abu-dhabi-city-tour.html#half-day">Half Day City Tour Abu Dhabi</a>
                                    <a href="abu-dhabi-city-tour.html#full-day">Full Day City Tour Abu Dhabi</a>
                                    <a href="combo-abu-dhabi-city-tour-desert-safari.html">COMBO Abu Dhabi City Tour & Desert Safari</a>
                                    <a href="abu-dhabi-city-tour.html#best-attractions">Top Abu Dhabi Tours</a>
                                </div>
                            </div>
                            <div class="mobile-submenu">
                                <button class="mobile-submenu-toggle">
                                    Dubai <span class="mobile-dropdown-arrow">▼</span>
                                </button>
                                <div class="mobile-submenu-content">
                                    <a href="dubai-city-tour.html#half-day">Half Day City Tour Dubai</a>
                                    <a href="dubai-city-tour.html#full-day">Full Day City Tour Dubai</a>
                                    <a href="combo-dubai-city-tour-desert-safari.html">COMBO Dubai City Tour & Desert Safari</a>
                                    <a href="dubai-city-tour.html#best-attractions">Top Dubai Tours</a>
                                </div>
                            </div>
                            <a href="vip-events.html">VIP Events</a>
                        </div>
                    </li>
                    
                    <li class="mobile-dropdown">
                        <button class="mobile-dropdown-toggle">
                            Cruise & Boat <span class="mobile-dropdown-arrow">▼</span>
                        </button>
                        <div class="mobile-dropdown-content">
                            <a href="yacht-sailing.html">Yacht Sailing</a>
                            <a href="dhow-cruise.html">Dhow Cruise</a>
                            <a href="yacht-sailing.html#luxury-cruise">Luxury Cruise</a>
                        </div>
                    </li>
                    
                    <li class="mobile-dropdown">
                        <button class="mobile-dropdown-toggle">
                            Gallery <span class="mobile-dropdown-arrow">▼</span>
                        </button>
                        <div class="mobile-dropdown-content">
                            <a href="gallery.html">Photo</a>
                            <a href="testimonials.html">Testimonials</a>
                            <a href="#blogs">Blogs</a>
                        </div>
                    </li>
                    
                    <li class="mobile-dropdown">
                        <button class="mobile-dropdown-toggle">
                            About Us <span class="mobile-dropdown-arrow">▼</span>
                        </button>
                        <div class="mobile-dropdown-content">
                            <a href="about-us.html#who-we-are">Who We Are ?</a>
                            <a href="about-us.html#why-us">Why Us?</a>
                            <a href="about-us.html#mission">Mission Statement</a>
                            <a href="about-us.html#vision">Vision Statement</a>
                        </div>
                    </li>
                    
                    <li><a href="contact.html" class="mobile-nav-link">Contact</a></li>
                </ul>
            </div>
        `;

        // Insert mobile menu at the beginning of body
        document.body.insertAdjacentHTML('afterbegin', mobileMenuHTML);
    }

    // Get elements
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const hamburgerInitial = document.getElementById('hamburger-initial');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const body = document.body;

    // Function to open mobile menu
    function openMobileMenu() {
        if (mobileMenuOverlay && mobileMenuBackdrop) {
            mobileMenuOverlay.classList.add('active');
            mobileMenuBackdrop.classList.add('active');
            body.classList.add('mobile-menu-open');
            if (hamburgerMenu) {
                hamburgerMenu.classList.add('active');
            }
            if (hamburgerInitial) {
                hamburgerInitial.classList.add('active');
            }
        }
    }

    // Function to close mobile menu
    function closeMobileMenu() {
        if (mobileMenuOverlay && mobileMenuBackdrop) {
            mobileMenuOverlay.classList.remove('active');
            mobileMenuBackdrop.classList.remove('active');
            body.classList.remove('mobile-menu-open');
            if (hamburgerMenu) {
                hamburgerMenu.classList.remove('active');
            }
            if (hamburgerInitial) {
                hamburgerInitial.classList.remove('active');
            }
        }
    }

    // Hamburger button click (regular header)
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', function () {
            if (mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Hamburger button click (initial header for homepage)
    if (hamburgerInitial) {
        hamburgerInitial.addEventListener('click', function () {
            if (mobileMenuOverlay.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Close button click
    if (mobileMenuClose) {
        mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    // Backdrop click
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
    }

    // Mobile dropdown toggles
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const parentDropdown = this.closest('.mobile-dropdown');
            const isActive = parentDropdown.classList.contains('active');

            // Close all other dropdowns at the same level
            const siblings = parentDropdown.parentElement.querySelectorAll(':scope > .mobile-dropdown');
            siblings.forEach(sibling => {
                if (sibling !== parentDropdown) {
                    sibling.classList.remove('active');
                }
            });

            // Toggle current dropdown
            parentDropdown.classList.toggle('active');
        });
    });

    // Mobile submenu toggles
    const mobileSubmenuToggles = document.querySelectorAll('.mobile-submenu-toggle');
    mobileSubmenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const parentSubmenu = this.closest('.mobile-submenu');
            const isActive = parentSubmenu.classList.contains('active');

            // Close all other submenus at the same level
            const siblings = parentSubmenu.parentElement.querySelectorAll(':scope > .mobile-submenu');
            siblings.forEach(sibling => {
                if (sibling !== parentSubmenu) {
                    sibling.classList.remove('active');
                }
            });

            // Toggle current submenu
            parentSubmenu.classList.toggle('active');
        });
    });

    // Close menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-content a, .mobile-submenu-content a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function () {
            closeMobileMenu();
        });
    });

    // Prevent body scroll when menu is open
    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('touchmove', function (e) {
            e.stopPropagation();
        }, { passive: false });
    }
});
