const themeBtn = document.getElementById('theme-btn');
const icon = themeBtn.querySelector('i');
const body = document.body;

// Load saved theme preference on startup
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun');
}

themeBtn.addEventListener('click', () => {
    // Toggle the class on the body
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');
    
    // Change icon between Moon and Sun
    if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

function toggleMenu() {
    const menu = document.getElementById("nav-menu");
    const icon = document.querySelector(".hamburger-menu i");
    
    // Toggle the 'active' class to show/hide the menu
    menu.classList.toggle("active");
    
    // Change icon from Bars to "X" when open
    if (menu.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
}
