// Navbar active
var menuItems = document.querySelectorAll("nav ul li a");

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("active");
    });
    this.classList.add("active");
  });
});

// hamburger slide
const hamburgerToggle = document.querySelector(".hamburger-toggle input");
const Navbar = document.querySelector(".header-container .nav-list ul");

hamburgerToggle.addEventListener("click", function () {
  Navbar.classList.toggle("toggle");
});

// Smooth scroll
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");

  for (const link of navLinks) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});
