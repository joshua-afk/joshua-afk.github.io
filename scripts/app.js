// Variables
var navBtn = document.getElementById('nav_btn');
var navMenu = document.getElementById('nav_menu');

function navMenuOpen() {
    navBtn.setAttribute("onclick", "navMenuClose()");

    navMenu.style.opacity = 1;
    document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';
}

function navMenuClose() {
    navBtn.setAttribute('onclick', 'navMenuOpen()');

    navMenu.style.opacity = 0;
    document.getElementsByTagName('BODY')[0].style.overflow = 'visible';
}
