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
    navMenu.style.zIndex = 10;
    navMenu.style.opacity = 1;

    // transition-effect of page links
    for(var i=0; i< navMenuPageLinks.length; i++){
        if (i % 2 == 0) {
            navMenuPageLinks[i].classList.add('slide-in-one');
        } else {
            navMenuPageLinks[i].classList.add('slide-in-two');
        }
    }

    // transition-effect of info
    for(var i=0; i< navMenuInfo.length; i++){
        if (i % 2 == 0) {
            navMenuInfo[i].classList.add('slide-in-one');
        } else {
            navMenuInfo[i].classList.add('slide-in-two');
        }
    }

    // transition-effect of social links
    for(var i=0; i< navMenuSocialLinks.length; i++){
        navMenuSocialLinks[i].classList.add('transition-in');
    }

    document.querySelector('.nav-menu-footer span').classList.add('transition-in');
}

function navMenuClose() {
    navBtn.setAttribute('onclick', 'navMenuOpen()');

    // return the overflow of body
    document.getElementsByTagName('BODY')[0].style.overflow = 'visible';

    // hide the nav-menu
    navMenu.style.zIndex = 0;
    navMenu.style.opacity = 0;

    // remove the transition class of nav-menu page links 
    for(var i=0; i< navMenuPageLinks.length; i++){
        if (i % 2 == 0) {
            navMenuPageLinks[i].classList.remove('slide-in-one');
        } else {
            navMenuPageLinks[i].classList.remove('slide-in-two');
        }
    }

    // remove the transition class of nav-menu info
    for(var i=0; i< navMenuInfo.length; i++){
        if (i % 2 == 0) {
            navMenuInfo[i].classList.remove('slide-in-one');
        } else {
            navMenuInfo[i].classList.remove('slide-in-two');
        }
    }

    // remove the transition class of nav-menu social links
    for(var i=0; i< navMenuSocialLinks.length; i++){
        navMenuSocialLinks[i].classList.remove('transition-in');
    }

    document.querySelector('.nav-menu-footer span').classList.remove('transition-in');
}
