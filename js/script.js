fetch('utils/navigation.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('navigation').innerHTML = data;
      })
      .catch(error => console.error('Error loading navbar:', error));

fetch('utils/main_footer.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('primary-footer').innerHTML = data;
      })
      .catch(error =>console.error('Error loading main footer:', error));


// for controlling the popping up of navigation bar upon pressing the
// hamburger menu in mobile screens

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

// handles video autoplay upon scroll

document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("autoPlayVideo");

    function handleScroll() {
        const rect = video.getBoundingClientRect();
        const inViewport = rect.top < window.innerHeight && rect.bottom > 0;

        if (inViewport && video.paused) {
            video.play();
        } else if (!inViewport && !video.paused) {
            video.pause();
        }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run once on page load
});

  