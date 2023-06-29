// Navbar
var menuItems = document.querySelectorAll("nav ul li a");

menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("active");
    });
    this.classList.add("active");
  });
});
