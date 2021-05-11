

const btnMenu = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

function openCloseMenu () {
btnMenu.addEventListener("click", e => {
     if (menu.classList.contains("navbar")) {
        menu.classList.remove("navbar");
        menu.classList.add("navbar-on")
     }
     else if (menu.classList.contains("navbar-on")) {
        menu.classList.remove("navbar-on");
        menu.classList.add("navbar")
     }
 })
}

openCloseMenu();