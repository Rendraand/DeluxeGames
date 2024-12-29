window.addEventListener("scroll", () => {
    const navbar = document.querySelector('.main-nav');
    const bars = document.querySelector('.offcanvas-toggler');
    if (window.scrollY > 100) { // Jarak scroll yang diinginkan untuk mengubah warna
        navbar.classList.add('solid');
        bars.classList.add('solid');
    } else {
        navbar.classList.remove('solid');
        bars.classList.remove('solid');
    }
});

function offcanvasShow () {
    document.querySelector(".backdrop-offcanvas").style.opacity = 1;
    document.querySelector(".backdrop-offcanvas").style.visibility = 'visible';
    document.querySelector(".offcanvas-navbar").style.transform = 'translateX(0)';
}

function offcanvasHide () {
    document.querySelector(".backdrop-offcanvas").style.opacity = 0;
    document.querySelector(".backdrop-offcanvas").style.visibility = 'hidden';
    document.querySelector(".offcanvas-navbar").style.transform = 'translateX(100%)';
}

const backdropOffcanvas = document.querySelector(".backdrop-offcanvas");
backdropOffcanvas.addEventListener("click", () => {
    offcanvasHide();
});

let isSvgRotate = 'rotate(0)';

function aboutUsToggle () {
    const aboutUs = document.querySelector('.offcanvas-about-us');
    const currDisp = window.getComputedStyle(aboutUs).display;
    const svg = document.querySelector('#aboutUsToggler > svg');

    if (currDisp === 'none') {
        aboutUs.style.display = 'block';
    } else {
        aboutUs.style.display = 'none';
    }
    
    if (isSvgRotate === 'rotate(0)') {
        svg.style.transform = 'rotate(180deg)';
        isSvgRotate = 'rotate(180)';
    } else {
        svg.style.transform = 'rotate(0deg)';
        isSvgRotate = 'rotate(0)';
    }
}

let doesSvgRotate = 'rotate(0)';

function workWithUsToggle () {
    const workWithUs = document.querySelector('.offcanvas-work-with-us');
    const currDisp = window.getComputedStyle(workWithUs).display;
    const svg = document.querySelector('#workWithUsToggler > svg');

    if (currDisp === 'none') {
        workWithUs.style.display = 'block';
    } else {
        workWithUs.style.display = 'none';
    }
    
    if (doesSvgRotate === 'rotate(0)') {
        svg.style.transform = 'rotate(180deg)';
        doesSvgRotate = 'rotate(180)';
    } else {
        svg.style.transform = 'rotate(0deg)';
        doesSvgRotate = 'rotate(0)';
    }
}