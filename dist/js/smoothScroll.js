const links = document.querySelectorAll('.header__menu-link'),
      menu = document.querySelector('.header__menu'),
      hamburger = document.querySelector('.header__hamburger');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        menu.classList.remove('header__menu_active');

        const ID = e.target.getAttribute('href').substr(1);

        document.getElementById(ID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});