function stickyNav(){
    var navbar = document.querySelector("nav")
    var scrollValue = window.scrollY;
    if (scrollValue > 0) {
      navbar.classList.add("navbar-sticky")
    } else {
      navbar.classList.remove("navbar-sticky")
    }
  }
  window.addEventListener("scroll",stickyNav)