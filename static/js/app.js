const btn = document.getElementById('theme-switch');
const body = document.body;
const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.replace('light', theme);
}

window.onload = () => {
    body.classList.remove('preload');

    window.matchMedia("(prefers-color-scheme: dark)").addListener(e => {
        if (body.classList.contains('light')) {
            body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });
};

btn.onclick = () => {
    if (body.classList.contains('light')) {
        body.classList.replace('light', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.replace('dark', 'light');
        localStorage.setItem('theme', 'light');
    }
};