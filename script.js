const themeBtn = document.getElementById('theme-btn');
const icon = themeBtn.querySelector('i');
const body = document.body;

// Check for saved user preference in local storage
if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}

themeBtn.addEventListener('click', () => {
    const isDark = body.classList.contains('dark-theme');
    
    if (isDark) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
});

function enableDarkMode() {
    body.classList.add('dark-theme');
    icon.classList.replace('fa-moon', 'fa-sun'); // Change icon to sun
    localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
    body.classList.remove('dark-theme');
    icon.classList.replace('fa-sun', 'fa-moon'); // Change icon to moon
    localStorage.setItem('theme', 'light');
}