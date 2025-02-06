

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        // Não bloquear a navegação do link
        const href = link.getAttribute('href');
        if (href && href.startsWith("#")) {
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
}); //nao pode apagar

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse'); // nao pode apagar

  
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarToggler.click();  
            }
        });
    });
}); // nao pode apagar

document.getElementById('download-button').addEventListener('change', function() {
    if (this.checked) {
        setTimeout(function() {
            window.open('download/curriculoAdenilson.pdf', '_blank'); 
        }, 1000); 
    }
});