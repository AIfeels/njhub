// Common Header and Footer Loader
function loadCommonComponents() {
    // Load header
    $("#header-placeholder").load("common-header.html", function(response, status, xhr) {
        if (status == "success") {
            console.log("Header loaded successfully");
            // Execute any scripts in the loaded header
            $("#header-placeholder script").each(function() {
                try {
                    eval($(this).text());
                } catch (e) {
                    console.error("Error executing header script:", e);
                }
            });
            
            // Initialize header functionality after loading
            initializeHeader();
        } else {
            console.error("Failed to load header:", status, xhr.statusText);
        }
    });
    
    // Load footer
    $("#footer-placeholder").load("common-footer.html", function(response, status, xhr) {
        if (status == "success") {
            console.log("Footer loaded successfully");
            // Execute any scripts in the loaded footer
            $("#footer-placeholder script").each(function() {
                try {
                    eval($(this).text());
                } catch (e) {
                    console.error("Error executing footer script:", e);
                }
            });
            
            // Initialize footer functionality after loading
            initializeFooter();
        } else {
            console.error("Failed to load footer:", status, xhr.statusText);
        }
    });
}

// Initialize header functionality
function initializeHeader() {
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
    });
}

// Initialize footer functionality
function initializeFooter() {
    // Back to Top functionality
    window.addEventListener('scroll', function() {
        const backToTop = document.getElementById('backToTop');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        }
    });

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

// Global functions that need to be available
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
        
        // Safe City Hindi Demo Video (replace with actual video when ready)
        video.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&cc_load_policy=1&hl=hi&cc_lang_pref=hi';
        
        bootstrapModal.show();
        
        // Clear video when modal closes
        modal.addEventListener('hidden.bs.modal', function() {
            video.src = '';
        });
    }
};

window.playDemo = function() {
    requestDemo();
};

// Initialize when document is ready
$(document).ready(function() {
    loadCommonComponents();
});