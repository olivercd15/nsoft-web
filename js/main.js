let menu = document.querySelector("#menu-btn")
let navbar = document.querySelector(".navbar")


menu.onclick = () =>{
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("active")
}


window.onscroll = () =>{
    menu.classList.remove("fa-times")
    navbar.classList.remove("active")
}

// año actual
document.addEventListener("DOMContentLoaded", function() {
    var currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
});


// Mostrar/Ocultar el botón de desplazamiento hacia arriba con transición
window.onscroll = function() {
    var scrollTopButton = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopButton.classList.add("show");
    } else {
        scrollTopButton.classList.remove("show");
    }
};

// Función para desplazarse hacia arriba
document.getElementById("scrollTopButton").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};