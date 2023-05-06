let menuIcon = document.querySelector('#menu-icon');
let navigationbar = document.querySelector('.navigationbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navigationbar.classList.toggle('active');

};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navigationbar.classList.remove('active');


};

let pinkModeIcon = document.querySelector('#pinkMode-icon');

pinkModeIcon.onclick = () => {
    pinkModeIcon.classList.toggle('bxs-spa');
    document.body.classList.toggle('pink-mode');
}

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000, 
    delay: 150
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img img, .services-container, .about-content, .playlists-container, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-content h3, .about-img img', {origin: 'left'});
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content p', {origin: 'right'});