// Variables
var navBtn = document.getElementById('nav_btn');
var navMenu = document.getElementById('nav_menu');
var navMenuPageLinks = document.querySelectorAll('.nav-menu-page-link');
var navMenuInfo = document.querySelectorAll('.nav-menu-info a');
var navMenuSocialLinks = document.querySelectorAll('.nav-menu-social-links a svg');

function navMenuOpen() {
    navBtn.setAttribute("onclick", "navMenuClose()");

    // remove the overflow of body
    document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';

    // show the nav-menu
    navMenu.style.opacity = 1;
}

function navMenuClose() {
    navBtn.setAttribute('onclick', 'navMenuOpen()');

    // return the overflow of body
    document.getElementsByTagName('BODY')[0].style.overflow = 'visible';

    // hide the nav-menu
    navMenu.style.opacity = 0;
}
