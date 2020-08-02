// Variables
var navBtn = document.getElementById('nav_btn');
var navMenu = document.getElementById('nav_menu');

function navMenuOpen() {
    navBtn.setAttribute("onclick", "navMenuClose()");

    navMenu.style.height = '100vh';
    document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';
}

function navMenuClose() {
    navBtn.setAttribute('onclick', 'navMenuOpen()');

    navMenu.style.height = 0;
    document.getElementsByTagName('BODY')[0].style.overflow = 'visible';
}
