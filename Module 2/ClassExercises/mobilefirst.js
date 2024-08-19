const navbarToggle = document.getElementById("navbarToggle");
const navbarMenu = document.getElementById("navbarMenu");

navToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle("active");
});