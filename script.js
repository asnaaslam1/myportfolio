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