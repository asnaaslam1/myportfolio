// ===================================================
// PRELOADER
// ===================================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    const body = document.body;

    // Ensure minimum loading time for better UX (2 seconds)
    setTimeout(() => {
        preloader.classList.add('fade-out');
        body.style.overflow = 'visible';

        // Remove preloader from DOM after fade out
        setTimeout(() => {
            if (preloader && preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 800);
    }, 2000);
});

// Prevent scrolling during preloader
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflow = 'hidden';
});

// ===================================================
// THEME TOGGLE
// ===================================================
const themeBtn = document.getElementById('theme-btn');
const html = document.documentElement;

// Initialize theme on page load
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');

    html.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

// Update theme icon
function updateThemeIcon(theme) {
    const icon = themeBtn.querySelector('i');
    if (theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

// Toggle theme on button click
themeBtn.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Initialize theme
initTheme();

// ===================================================
// MOBILE MENU TOGGLE
// ===================================================
function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const icon = document.querySelector(".hamburger-menu i");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}

// ===================================================
// SKILLS ACCORDION
// ===================================================
function toggleSkills(element) {
    const parent = element.parentElement;

    // Close all other accordions
    document.querySelectorAll(".skills__content").forEach(item => {
        if (item !== parent) {
            item.classList.remove("skills__open");
            item.classList.add("skills__close");
        }
    });

    // Toggle current accordion
    parent.classList.toggle("skills__open");
    parent.classList.toggle("skills__close");
}

// ===================================================
// SMOOTH SCROLL FOR NAVIGATION
// ===================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ===================================================
// ACTIVE NAVIGATION HIGHLIGHT
// ===================================================
const sections = document.querySelectorAll('section[id], main[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================================
// SCROLL TO TOP BUTTON
// ===================================================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================================
// NAVBAR SHRINK ON SCROLL
// ===================================================
const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// ===================================================
// EXPERIENCE CARDS TOGGLE
// ===================================================
function toggleExperience(element) {
    const card = element.closest('.experience-card');
    const content = card.querySelector('.experience-content');
    const toggle = card.querySelector('.experience-toggle');

    // Toggle the expanded class
    card.classList.toggle('expanded');

    // Animate the content
    if (card.classList.contains('expanded')) {
        // Use auto height for all screen sizes to ensure full content visibility
        content.style.maxHeight = 'none';
        content.style.overflow = 'visible';

        // Add a small delay to ensure content is rendered before calculating height
        setTimeout(() => {
            if (window.innerWidth > 768) {
                // For desktop, we can still use calculated height for animation
                const scrollHeight = content.scrollHeight;
                content.style.maxHeight = scrollHeight + 50 + 'px'; // Add extra 50px for safety
            }
        }, 10);
    } else {
        content.style.maxHeight = '0px';
        content.style.overflow = 'hidden';
    }
}

// Handle window resize to adjust expanded cards
window.addEventListener('resize', () => {
    const expandedCards = document.querySelectorAll('.experience-card.expanded');
    expandedCards.forEach(card => {
        const content = card.querySelector('.experience-content');
        if (card.classList.contains('expanded')) {
            content.style.maxHeight = 'none';
            content.style.overflow = 'visible';

            if (window.innerWidth > 768) {
                setTimeout(() => {
                    const scrollHeight = content.scrollHeight;
                    content.style.maxHeight = scrollHeight + 50 + 'px';
                }, 10);
            }
        }
    });
});

// Initialize experience cards - all collapsed by default
document.addEventListener('DOMContentLoaded', () => {
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        const content = card.querySelector('.experience-content');
        content.style.maxHeight = '0px';
        content.style.overflow = 'hidden';
    });
});
// ===================================================
// CUSTOM CURSOR
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    const cursorInner = document.querySelector('.cursor-inner');

    // Check if device supports hover (not touch device)
    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {

        // Mouse move event - position cursor at exact mouse position with left offset
        document.addEventListener('mousemove', (e) => {
            // Offset cursor to the left side of the actual cursor position
            cursor.style.left = e.clientX - 25 + 'px'; // Move 25px to the left
            cursor.style.top = e.clientY - 18 + 'px';  // Center vertically
        });

        // Mouse down event
        document.addEventListener('mousedown', () => {
            cursor.classList.add('click');
        });

        // Mouse up event
        document.addEventListener('mouseup', () => {
            cursor.classList.remove('click');
        });

        // Hover effects for different elements
        const hoverElements = document.querySelectorAll('a, button, .btn, .nav-links a, .theme-toggle, .hamburger-menu');

        hoverElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');

                // Special states for different elements
                if (element.tagName === 'A' && !element.classList.contains('btn')) {
                    cursor.classList.add('link');
                } else if (element.classList.contains('btn') || element.tagName === 'BUTTON') {
                    cursor.classList.add('button');
                }
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover', 'link', 'button');
            });
        });

        // Text selection cursor for text elements
        const textElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span:not(.cursor-inner span)');

        textElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.classList.add('text');
            });

            element.addEventListener('mouseleave', () => {
                cursor.classList.remove('text');
            });
        });

        // Experience card hover effects
        const experienceCards = document.querySelectorAll('.experience-card');

        experienceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            card.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        // Project card hover effects
        const projectCards = document.querySelectorAll('.project-card');

        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            card.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        // Skills section hover effects
        const skillsHeaders = document.querySelectorAll('.skills__header');

        skillsHeaders.forEach(header => {
            header.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
            });

            header.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
            });
        });

        // Smooth cursor movement on window resize
        window.addEventListener('resize', () => {
            // Recalculate cursor offset for responsive adjustments
            const leftOffset = window.innerWidth <= 480 ? 20 : window.innerWidth <= 768 ? 22 : 25;
            const topOffset = window.innerWidth <= 480 ? 14 : window.innerWidth <= 768 ? 16 : 18;

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX - leftOffset + 'px';
                cursor.style.top = e.clientY - topOffset + 'px';
            });
        });

    } else {
        // Hide cursor on touch devices
        cursor.style.display = 'none';
    }
});