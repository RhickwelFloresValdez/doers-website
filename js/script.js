function showMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.style.display = 'flex';
    mobileNav.classList.add('slide-in-top');
    document.body.classList.add('no-scroll');
}

function hideMobileNav() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.add('slide-out-top');

    mobileNav.addEventListener('animationend', function () {
        mobileNav.style.display = 'none';
        mobileNav.classList.remove('slide-out-top');
        document.body.classList.remove('no-scroll');
    }, { once: true });
}