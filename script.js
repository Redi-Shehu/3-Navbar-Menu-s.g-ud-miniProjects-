const navbar = document.querySelector(".fa-bars");
const menuList = document.querySelector(".menu-list");

navbar.addEventListener("click", (e) => {
  menuList.classList.toggle("clicked");
});
