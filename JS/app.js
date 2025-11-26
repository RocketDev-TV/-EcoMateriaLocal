document.addEventListener('DOMContentLoaded', () => {

    // --- Lógica del Menú Hamburguesa ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navLinksList = document.querySelectorAll('.nav-links a');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });


    // --- Lógica del Modo Nocturno (Dark Mode) ---
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('i');

    // Función para aplicar el tema
    function applyTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    }

    // Revisa el tema guardado en localStorage al cargar la página
    const currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    // Event listener para el botón de tema
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('dark-mode')) {
                applyTheme('light');
            } else {
                applyTheme('dark');
            }
        });
    }


    // --- Lógica de Smooth Scrolling (la que ya tenías) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Lógica del Formulario de Contacto (la que ya tenías) ---
    const contactForm = document.getElementById('contact-form');
    const formMessages = document.getElementById('form-messages');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); 
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                // Simulación de envío exitoso
                formMessages.classList.remove('error');
                formMessages.classList.add('success');
                formMessages.textContent = '¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.';
                contactForm.reset(); 
            } else {
                // Mensaje de error si faltan campos
                formMessages.classList.remove('success');
                formMessages.classList.add('error');
                formMessages.textContent = 'Por favor, completa todos los campos del formulario.';
            }

            // Ocultar el mensaje después de 5 segundos
            setTimeout(() => {
                formMessages.textContent = '';
                formMessages.classList.remove('success', 'error');
            }, 5000);
        });
    }

});