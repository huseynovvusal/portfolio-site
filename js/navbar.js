class Navbar {
  static navbarToggle(hamburger) {
    const navList = document.querySelector("nav .container ul");
    navList.classList.toggle("nav-list-active");
    hamburger.classList.toggle("hamburger-active");
    document.body.classList.toggle("hidden");
  }

  static navLinkSelected(element) {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach((link) => {
      link.classList.remove("link-active");
    });

    element.classList.add("link-active");
    const navList = document.querySelector("nav .container ul");
    navList.classList.remove("nav-list-active");
    hamburger.classList.remove("hamburger-active");
    document.body.classList.remove("hidden");
  }

  static navbarOnScroll() {
    const navbar = document.querySelector("nav");

    let scroll = window.pageYOffset;

    if (scroll > 0) {
      navbar.classList.add("nav-scrolled");
    } else {
      navbar.classList.remove("nav-scrolled");
    }
  }

  static navLinkSelectOnScroll(home, about, portfolio) {
    const links = document.querySelectorAll("nav ul li a");
    let homeTop = home.getBoundingClientRect().top;
    let aboutTop = about.getBoundingClientRect().top;
    let portfolioTop = portfolio.getBoundingClientRect().top;

    if (homeTop <= 0 && homeTop >= -window.innerHeight / 2) {
      this.navLinkSelected(links[0]);
    } else if (aboutTop >= 0 && homeTop <= window.innerHeight / 2) {
      this.navLinkSelected(links[1]);
    } else if (portfolioTop >= 0) {
      this.navLinkSelected(links[2]);
    }
  }
}
