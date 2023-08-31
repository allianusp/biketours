// Load the menu HTML using an XMLHttpRequest
var xhr = new XMLHttpRequest();
xhr.open("GET", "header-menu.html", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var menuContainer = document.querySelector("nav");
        menuContainer.innerHTML = xhr.responseText;
    }
};
xhr.send();
