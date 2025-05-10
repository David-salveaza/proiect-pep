const toggleButton = document.getElementById('toggle-theme');
const body = document.body;
const mainLogo = document.getElementById('main-logo');
const tineretLogo = document.getElementById('tineret-logo');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Schimbare logo în funcție de mod
    if (body.classList.contains('dark-mode')) {
        mainLogo.src = 'PEP_dark-mode.png';
        tineretLogo.src = 'PEP_tineret_dark-mode.png';
        toggleButton.textContent = '☀️ Mod lumină';
    } else {
        mainLogo.src = 'PEP.png';
        tineretLogo.src = 'PEP_tineret.png';
        toggleButton.textContent = '🌙 Schimbă tema';
    }
});
