// Variables
var navBtn = document.getElementById('nav_btn');
var navMenu = document.getElementById('nav_menu');

function navMenuOpen() {
    navBtn.setAttribute("onclick", "navMenuClose()");

    // remove the overflow of body
    document.getElementsByTagName('BODY')[0].style.overflow = 'hidden';

}

function navMenuClose() {
    navBtn.setAttribute('onclick', 'navMenuOpen()');

    // return the overflow of body
    document.getElementsByTagName('BODY')[0].style.overflow = 'visible';

}
