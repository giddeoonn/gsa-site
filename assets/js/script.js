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

// SLIDER FUNCTIONALITY
document.querySelectorAll(".slider").forEach((slider) => {
  const cards = slider.querySelectorAll(".card");
  const left = slider.querySelector(".cat-btn.left");
  const right = slider.querySelector(".cat-btn.right");

  const gap = parseInt(getComputedStyle(cards[0]).marginRight) || 8;
  const scrollAmount = cards[0].offsetWidth + gap;

  // BUTTON VISIBILITIES
  const updateButtons = () => {
    if (slider.scrollLeft <= 0) {
      left.style.display = "none";
    } else {
      left.style.display = "block";
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
      right.style.display = "none";
    } else {
      right.style.display = "block";
    }
  };

  updateButtons();

  slider.addEventListener("scroll", updateButtons); //For SCROLL EVENTS

  // BUTTONS CLICK EVENTS FUNCTIONALITY
  right.addEventListener("click", () => {
    slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  left.addEventListener("click", () => {
    slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // RECALCULATE WINDOWS SIZE
  window.addEventListener("resize", updateButtons);
});
