const offScreenMenu = document.querySelector(".off-screen-menu");
const searchBarMenu = document.querySelector(".searchbar-menu");
const searchbtn = document.querySelector(".mobile-searchbtn");
const openbtn = document.querySelector(".openbtn");
const closebtns = document.querySelectorAll(".closebtn");

// Open menu
openbtn.addEventListener("click", () => {
  offScreenMenu.classList.add("active");
  openbtn.classList.add("active");
  closebtns.forEach((btn) => btn.classList.add("active"));
});

// Open search
searchbtn.addEventListener("click", () => {
  searchBarMenu.classList.add("active");
  offScreenMenu.classList.remove("active");
});

// Close menu/search
closebtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    offScreenMenu.classList.remove("active");
    searchBarMenu.classList.remove("active");
    openbtn.classList.remove("active");
    closebtns.forEach((btn) => btn.classList.remove("active"));
  });
});
