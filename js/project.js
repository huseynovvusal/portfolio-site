const home = document.querySelector("#home");
const about = document.querySelector("#about");
const portfolio = document.querySelector("#portfolio");

const links = document.querySelectorAll("nav ul li a");

const loader = document.querySelector(".loader-screen");

window.addEventListener("scroll", () => {
  Reveal.reveal();
  Navbar.navbarOnScroll();
  Navbar.navLinkSelectOnScroll(home, about, portfolio);
});

window.addEventListener("load", () => {
  window.scrollTo(0, 0);
  setTimeout(() => {
    loader.classList.add("loader-disable");
    document.body.classList.remove("hidden");
  }, 1000);
});

Webgl.init();

const hamburger = document.querySelector("nav .hamburger");

hamburger.addEventListener("click", (e) => Navbar.navbarToggle(hamburger));
