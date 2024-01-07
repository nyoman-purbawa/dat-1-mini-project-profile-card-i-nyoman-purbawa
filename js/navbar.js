document.querySelector(".hamburger-menu").addEventListener("click", (event) => {
  event.preventDefault();
  let menu = document.querySelector(".list-menu");
  menu.classList.toggle("navbar-item");
});
