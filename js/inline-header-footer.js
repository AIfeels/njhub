// Inline Header and Footer Content
const headerHTML = `
<!-- Enhanced Modern Header with Special Effects -->
<style>
    :root {
        --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        --success-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
        --dark-gradient: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
        --glass-bg: rgba(255, 255, 255, 0.1);
        --glass-border: rgba(255, 255, 255, 0.2);
        --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.1);
        --shadow-medium: 0 12px 40px rgba(0, 0, 0, 0.15);
        --shadow-strong: 0 20px 60px rgba(0, 0, 0, 0.2);
        --border-radius: 16px;
        --border-radius-lg: 24px;
        --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Enhanced Glass Morphism Header with Special Effects */
    .modern-header {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9999;
        transition: var(--transition);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    }

    .modern-header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: var(--shadow-soft);
        transform: translateY(0);
    }

    .modern-header.hide {
        transform: translateY(-100%);
    }

    /* Modern Navigation */
    .modern-nav {
        padding: 1rem 0;
        position: relative;
        z-index: 2;
    }

    .modern-logo {
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: var(--transition);
        position: relative;
    }

    .modern-logo:hover {
        transform: translateY(-2px);
    }

    .logo-icon {
        width: 48px;
        height: 48px;
        background: var(--primary-gradient);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        box-shadow: var(--shadow-soft);
        position: relative;
        overflow: hidden;
    }

    .logo-text h2 {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 700;
        font-size: 1.5rem;
        background: var(--primary-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        margin: 0;
        position: relative;
    }

    .logo-text small {
        font-size: 0.75rem;
        color: #64748b;
        font-weight: 500;
    }

    /* Enhanced Navigation Menu with Special Effects */
    .modern-nav-menu {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        gap: 1rem;
    }

    .modern-nav-item {
        position: relative;
    }

    .modern-nav-link {
        display: flex;
        align-items: center;
        padding: 0.75rem 1rem;
        text-decoration: none;
        color: #475569;
        font-weight: 500;
        font-size: 0.95rem;
        border-radius: 12px;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
    }

    .modern-nav-link::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary-gradient);
        opacity: 0;
        transition: var(--transition);
        border-radius: 12px;
        transform: scale(0.8);
    }

    .modern-nav-link:hover::before,
    .modern-nav-link.active::before {
        opacity: 0.1;
        transform: scale(1);
    }

    .modern-nav-link:hover,
    .modern-nav-link.active {
        color: #667eea;
        transform: translateY(-2px);
    }

    .modern-nav-link i {
        margin-right: 0.5rem;
        font-size: 0.9rem;
        transition: var(--transition);
    }

    .modern-nav-link:hover i {
        transform: scale(1.2);
    }

    /* Enhanced CTA Button with Glow Effect */
    .modern-cta {
        background: var(--primary-gradient);
        color: white;
        padding: 0.75rem 1.5rem;
        border-radius: 12px;
        text-decoration: none;
        font-weight: 600;
        font-size: 0.9rem;
        box-shadow: var(--shadow-soft);
        transition: var(--transition);
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .modern-cta:hover {
        transform: translateY(-2px);
        box-shadow: var(--shadow-medium);
        color: white;
    }

    /* Mobile Menu Toggle with Animation */
    .mobile-toggle {
        display: none;
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #475569;
        cursor: pointer;
        position: relative;
        width: 30px;
        height: 30px;
        transition: var(--transition);
    }

    .mobile-toggle span {
        display: block;
        width: 25px;
        height: 3px;
        background: #475569;
        margin: 5px 0;
        transition: 0.3s;
        border-radius: 2px;
    }

    .mobile-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }

    .mobile-toggle.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }

    /* Responsive Design - Enhanced Mobile Support */
    @media (max-width: 991.98px) {
        .modern-nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            gap: 1rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition);
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 9998;
            max-height: 80vh;
            overflow-y: auto;
        }

        .modern-nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }

        .mobile-toggle {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .logo-text h2 {
            font-size: 1.25rem;
        }

        .logo-icon {
            width: 40px;
            height: 40px;
        }

        .modern-nav-link {
            width: 100%;
            justify-content: flex-start;
            padding: 1rem;
            border-radius: 8px;
        }
    }

    @media (max-width: 768px) {
        .modern-nav {
            padding: 0.75rem 0;
        }

        .logo-text h2 {
            font-size: 1.1rem;
        }

        .logo-text small {
            font-size: 0.7rem;
        }

        .logo-icon {
            width: 36px;
            height: 36px;
        }

        .modern-nav-menu {
            padding: 1.5rem;
        }
    }

    @media (max-width: 576px) {
        .container {
            padding: 0 10px;
        }

        .modern-nav {
            padding: 0.5rem 0;
        }

        .logo-text h2 {
            font-size: 1rem;
        }

        .logo-icon {
            width: 32px;
            height: 32px;
            margin-right: 8px;
        }

        .modern-cta {
            padding: 0.5rem 1rem;
            font-size: 0.8rem;
        }
    }

    /* Tablet Specific Adjustments */
    @media (min-width: 768px) and (max-width: 991.98px) {
        .modern-nav-menu {
            gap: 0.5rem;
        }

        .modern-nav-link {
            padding: 0.5rem 0.75rem;
            font-size: 0.9rem;
        }

        .logo-text h2 {
            font-size: 1.3rem;
        }
    }

    /* Large Screen Optimizations */
    @media (min-width: 1400px) {
        .container {
            max-width: 1320px;
        }

        .modern-nav-menu {
            gap: 2.5rem;
        }

        .logo-text h2 {
            font-size: 1.6rem;
        }

        .modern-cta {
            padding: 0.875rem 1.75rem;
            font-size: 1rem;
        }
    }

    /* Scroll Progress Bar */
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: var(--primary-gradient);
        z-index: 10001;
        transition: width 0.1s ease;
    }
</style>

<!-- Scroll Progress Bar -->
<div class="scroll-progress" id="scrollProgress"></div>

<!-- Enhanced Modern Header -->
<header class="modern-header" id="modernHeader">
    <div class="container">
        <nav class="modern-nav">
            <div class="d-flex justify-content-between align-items-center">
                <!-- Modern Logo -->
                <a href="index.html" class="modern-logo">
                    <div class="logo-icon">
                        <i class="fas fa-shield-alt text-white" style="font-size: 1.5rem;"></i>
                    </div>
                    <div class="logo-text">
                        <h2>NJ Visiony Hub</h2>
                        <small>Smart Security Solutions</small>
                    </div>
                </a>

                <!-- Navigation Menu -->
                <ul class="modern-nav-menu" id="navMenu">
                    <li class="modern-nav-item">
                        <a href="index.html" class="modern-nav-link active">
                            <i class="fas fa-home"></i>Home
                        </a>
                    </li>
                    <li class="modern-nav-item">
                        <a href="about.html" class="modern-nav-link">
                            <i class="fas fa-info-circle"></i>About
                        </a>
                    </li>
                    <li class="modern-nav-item">
                        <a href="service.html" class="modern-nav-link">
                            <i class="fas fa-cogs"></i>Services
                        </a>
                    </li>
                    <li class="modern-nav-item">
                        <a href="safe-city.html" class="modern-nav-link">
                            <i class="fas fa-city"></i>Safe City
                        </a>
                    </li>
                    <li class="modern-nav-item">
                        <a href="project.html" class="modern-nav-link">
                            <i class="fas fa-project-diagram"></i>Projects
                        </a>
                    </li>
                    <li class="modern-nav-item">
                        <a href="contact.html" class="modern-nav-link">
                            <i class="fas fa-envelope"></i>Contact
                        </a>
                    </li>
                </ul>

                <!-- Desktop Actions -->
                <div class="d-none d-lg-flex align-items-center gap-3">
                    <!-- Demo Button -->
                    <button class="modern-cta" onclick="requestDemo()">
                        <i class="fas fa-play me-2"></i>Watch Demo
                    </button>
                </div>

                <!-- Enhanced Mobile Toggle -->
                <button class="mobile-toggle d-lg-none" onclick="toggleMobileMenu()" id="mobileToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    </div>
</header>

<!-- Demo Video Modal -->
<div class="modal fade demo-modal" id="demoModal" tabindex="-1">
    <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content bg-transparent border-0">
            <div class="modal-header border-0 pb-0">
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <div class="demo-video-container mx-auto" style="position: relative; width: 100%; max-width: 900px; aspect-ratio: 16/9; background: #000; border-radius: 16px; overflow: hidden;">
                    <iframe 
                        id="demoVideo"
                        width="100%" 
                        height="100%" 
                        src="" 
                        title="Safe City Software Demo - Hindi" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const footerHTML = `
<!-- Enhanced Modern Footer Component -->
<style>
    /* Enhanced Modern Footer Styles */
    .modern-footer {
        background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
        color: #e2e8f0;
        position: relative;
        overflow: hidden;
        margin-top: auto;
    }

    .footer-content {
        position: relative;
        z-index: 1;
    }

    .footer-section h5 {
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 600;
        color: #f7fafc;
        margin-bottom: 1.5rem;
        position: relative;
    }

    .footer-section h5::after {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 40px;
        height: 3px;
        background: var(--primary-gradient);
        border-radius: 2px;
    }

    .footer-link {
        color: #cbd5e0;
        text-decoration: none;
        padding: 0.5rem 0;
        display: block;
        transition: var(--transition);
        font-weight: 400;
        position: relative;
    }

    .footer-link:hover {
        color: #667eea;
        transform: translateX(5px);
    }

    .footer-contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        color: #cbd5e0;
        transition: var(--transition);
    }

    .footer-contact-item:hover {
        color: #f7fafc;
        transform: translateX(5px);
    }

    .footer-contact-item i {
        width: 20px;
        margin-right: 12px;
        color: #667eea;
        transition: var(--transition);
    }

    .footer-social {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
    }

    .footer-social-link {
        width: 44px;
        height: 44px;
        background: rgba(102, 126, 234, 0.1);
        border: 1px solid rgba(102, 126, 234, 0.2);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #667eea;
        text-decoration: none;
        transition: var(--transition);
        position: relative;
        overflow: hidden;
    }

    .footer-social-link:hover {
        color: white;
        transform: translateY(-3px) scale(1.1);
        box-shadow: var(--shadow-medium);
        background: var(--primary-gradient);
    }

    .footer-bottom {
        background: rgba(0, 0, 0, 0.3);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 1.5rem 0;
        margin-top: 3rem;
    }

    .footer-bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .footer-copyright {
        color: #a0aec0;
        font-size: 0.9rem;
    }

    .footer-copyright a {
        color: #667eea;
        text-decoration: none;
        font-weight: 500;
        transition: var(--transition);
    }

    .footer-copyright a:hover {
        color: #764ba2;
    }

    /* Back to Top Button Enhancement */
    .back-to-top {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--primary-gradient);
        color: white;
        border-radius: 50%;
        display: none;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        font-size: 1.2rem;
        box-shadow: var(--shadow-medium);
        transition: var(--transition);
        z-index: 9999;
    }

    .back-to-top:hover {
        transform: translateY(-3px) scale(1.1);
        box-shadow: var(--shadow-strong);
        color: white;
    }

    .back-to-top.show {
        display: flex;
    }

    /* Enhanced Responsive Design */
    @media (max-width: 768px) {
        .footer-section {
            margin-bottom: 2rem;
            text-align: center;
        }

        .footer-social {
            justify-content: center;
        }

        .footer-bottom-content {
            text-align: center;
            flex-direction: column;
        }

        .footer-contact-item {
            justify-content: center;
            text-align: center;
        }

        .footer-section h5 {
            text-align: center;
        }

        .footer-section h5::after {
            left: 50%;
            transform: translateX(-50%);
        }
    }

    @media (max-width: 576px) {
        .modern-footer {
            padding: 2rem 0 0;
        }

        .footer-content {
            padding: 2rem 0 !important;
        }

        .footer-section {
            margin-bottom: 1.5rem;
        }

        .footer-section h5 {
            font-size: 1.1rem;
            margin-bottom: 1rem;
        }

        .footer-contact-item {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
        }

        .footer-social-link {
            width: 40px;
            height: 40px;
        }

        .footer-bottom {
            padding: 1rem 0;
        }

        .footer-copyright {
            font-size: 0.8rem;
        }
    }

    /* Tablet Specific */
    @media (min-width: 768px) and (max-width: 991.98px) {
        .footer-section {
            margin-bottom: 1.5rem;
        }
    }

    /* Large Screen */
    @media (min-width: 1400px) {
        .footer-content {
            padding: 5rem 0 !important;
        }

        .footer-section h5 {
            font-size: 1.3rem;
        }
    }
</style>

<!-- Enhanced Modern Footer -->
<footer class="modern-footer">
    <div class="container">
        <div class="footer-content py-5">
            <div class="row g-4">
                <!-- Company Info -->
                <div class="col-lg-4 col-md-6">
                    <div class="footer-section">
                        <h5>NJ Visiony Hub</h5>
                        <p class="mb-4" style="color: #cbd5e0; line-height: 1.7;">
                            Revolutionizing security with AI-powered Safe City software. Transform your CCTV infrastructure into intelligent security networks with real-time threat detection and instant alerts.
                        </p>
                        
                        <div class="footer-contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>C-113 Tigri Extension, New Delhi 110062</span>
                        </div>
                        
                        <div class="footer-contact-item">
                            <i class="fas fa-phone-alt"></i>
                            <span>+91 639 616 8575</span>
                        </div>
                        
                        <div class="footer-contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>mdjishan736@gmail.com</span>
                        </div>

                        <div class="footer-social">
                            <a href="#" class="footer-social-link" title="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="footer-social-link" title="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" class="footer-social-link" title="Instagram">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="footer-social-link" title="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div class="col-lg-2 col-md-6">
                    <div class="footer-section">
                        <h5>Services</h5>
                        <a href="service.html" class="footer-link">Smart Analytics</a>
                        <a href="safe-city.html" class="footer-link">Safe City Software</a>
                        <a href="service.html" class="footer-link">Fire Detection</a>
                        <a href="service.html" class="footer-link">Object Recognition</a>
                        <a href="service.html" class="footer-link">System Integration</a>
                        <a href="service.html" class="footer-link">Compliance Monitoring</a>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="col-lg-2 col-md-6">
                    <div class="footer-section">
                        <h5>Quick Links</h5>
                        <a href="about.html" class="footer-link">About Us</a>
                        <a href="contact.html" class="footer-link">Contact Us</a>
                        <a href="project.html" class="footer-link">Our Projects</a>
                        <a href="quote.html" class="footer-link">Get Quote</a>
                        <a href="#" class="footer-link">Privacy Policy</a>
                        <a href="#" class="footer-link">Terms & Conditions</a>
                    </div>
                </div>

                <!-- Newsletter -->
                <div class="col-lg-4 col-md-6">
                    <div class="footer-section">
                        <h5>Stay Updated</h5>
                        <p style="color: #cbd5e0; margin-bottom: 1rem;">
                            Get the latest updates on AI security innovations and Safe City features directly in your inbox.
                        </p>
                        
                        <div style="margin-top: 1rem;">
                            <input 
                                type="email" 
                                class="form-control mb-2" 
                                placeholder="Enter your email address"
                                style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: #f7fafc;"
                            >
                            <button class="btn btn-primary">Subscribe</button>
                        </div>

                        <div class="mt-3" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.8rem; font-weight: 600; display: inline-block;">
                            <i class="fas fa-shield-alt me-2"></i>
                            24/7 Security Monitoring
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
            <div class="footer-bottom-content">
                <div class="footer-copyright">
                    &copy; 2024 <a href="index.html">NJ Visiony Hub</a>. All rights reserved.
                </div>
                <div class="footer-copyright">
                    Designed by <a href="https://vigilanceops.com" target="_blank">VigilanceOps Infotech</a>
                </div>
            </div>
        </div>
    </div>
</footer>

<!-- Enhanced Back to Top Button -->
<a href="#" class="back-to-top" id="backToTop">
    <i class="fas fa-arrow-up"></i>
</a>
`;

// Load components function
function loadInlineComponents() {
    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
        console.log("Header loaded successfully (inline)");
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;
        console.log("Footer loaded successfully (inline)");
    }
    
    // Initialize functionality
    initializeComponents();
}

// Initialize all functionality
function initializeComponents() {
    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.modern-nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
    
    // Header scroll effects
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const header = document.getElementById('modernHeader');
        const scrollProgress = document.getElementById('scrollProgress');
        const backToTop = document.getElementById('backToTop');
        
        if (header && scrollProgress) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Scroll progress bar
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            scrollProgress.style.width = scrolled + "%";
            
            // Header background change
            if (scrollTop > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Hide/show header on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                header.classList.add('hide');
            } else {
                header.classList.remove('hide');
            }
            lastScrollTop = scrollTop;
        }
        
        // Back to Top functionality
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }
    });

    // Back to Top click handler
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Global functions
window.toggleMobileMenu = function() {
    const navMenu = document.getElementById('navMenu');
    const toggle = document.getElementById('mobileToggle');
    
    if (navMenu && toggle) {
        navMenu.classList.toggle('active');
        toggle.classList.toggle('active');
    }
};

window.requestDemo = function() {
    const modal = document.getElementById('demoModal');
    const video = document.getElementById('demoVideo');
    
    if (modal && video) {
        const bootstrapModal = new bootstrap.Modal(modal);
        
        // Safe City Hindi Demo Video - Professional AI Security Demo
        // Replace with actual Safe City demo when ready
        video.src = 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&rel=0&cc_load_policy=1&hl=hi&cc_lang_pref=hi&modestbranding=1&showinfo=0';
        
        bootstrapModal.show();
        
        // Clear video when modal closes
        modal.addEventListener('hidden.bs.modal', function() {
            video.src = '';
        });
    } else {
        // Fallback: Open demo page in new tab
        window.open('demo-video-placeholder.html', '_blank');
    }
};

window.playDemo = function() {
    requestDemo();
};

// Initialize when document is ready
$(document).ready(function() {
    loadInlineComponents();
});