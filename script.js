const darkModeToggle = document.getElementById('darkModeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark');
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }

    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        sunIcon.classList.toggle('hidden');
        moonIcon.classList.toggle('hidden');
           
        // Save preference
        localStorage.setItem('darkMode', document.documentElement.classList.contains('dark'));
    });

    // Block image
    const imagem = document.querySelector('.imagem');
    imagem.addEventListener('dragstart', (event) => {
        event.preventDefault();
    });