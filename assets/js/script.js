function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

function changeColorToogle() {
  const buttonIcon = document.querySelectorAll(".button-menu");
  buttonIcon.forEach((button) => button.classList.toggle("button-menu-blue"));
}

document
  .querySelector(".button-menu")
  .addEventListener("click", changeColorToogle);
