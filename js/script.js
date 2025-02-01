// Toggle class active
const navbarMenu = document.querySelector(".navbar-menu");

// Ketika hamburger menu diclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarMenu.classList.toggle("active");
};

// Ketika diluar sidebar untuk menghilangkan sidebar menu
const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarMenu.contains(e.target)) {
    navbarMenu.classList.remove("active");
  }
});
