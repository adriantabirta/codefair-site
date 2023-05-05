document.addEventListener('DOMContentLoaded', () => {
    navbarManipulation();
    onScrollBodyByLink();
    toggleNavbarMenu();
    initCopyright();
})

function navbarManipulation() {
    const navbar = document.querySelector('.nav');

    let startPosition;
    
    window.addEventListener('resize', () => {
        onScrollBody(startPosition);
    })

    function onScrollBody(pos) {
        if (window.outerWidth > 1024) {
            pos = 200;
        } else if (window.outerWidth > 475) {
            pos = 25;
        } else {
            pos = 1;
        }
        window.addEventListener('scroll', () => {
            if (window.scrollY >= pos) {
                navbar.classList.add('fixed');
            } else {
                navbar.classList.remove('fixed')
            }
        })
    }

    return onScrollBody(startPosition)
}

function onScrollBodyByLink() {
    const links = document.querySelectorAll('.nav .anchor-link');
    
    for (const link of links) {
        link.addEventListener("click", clickHandler);
      }
      
      function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        scroll({
          top: offsetTop,
          behavior: "smooth"
        });
      }
}

function toggleNavbarMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav .menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navMenu.classList.toggle('open');
    })
}

function initCopyright() {
    const copyrightWrapper = document.querySelector('.copyright');
    const date = new Date().getFullYear();
    copyrightWrapper.innerText = `Copyright ${date}. All rights reserved.`
}