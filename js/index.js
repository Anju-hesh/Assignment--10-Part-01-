// document.addEventListener('DOMContentLoaded', function() {
//     const burgerMenu = document.querySelector('.burger-menu');
//     const nav = document.querySelector('nav ul');
    
//     burgerMenu.addEventListener('click', function() {
//         nav.classList.toggle('active');
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    burgerMenu.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.classList.contains('burger-menu')) {
            nav.classList.remove('active');
        }
    });
});