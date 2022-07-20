let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// for navbar in small screen
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});
