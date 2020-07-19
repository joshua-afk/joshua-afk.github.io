document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("nav_btn").addEventListener("click", function () {
        var menu = document.querySelector('.nav-btn');
        menu.classList.toggle('toggled');
    });
});

