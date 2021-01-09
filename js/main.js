

window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".scrolling_Navbar").style.top = "0";
  } else {
    document.querySelector(".scrolling_Navbar").style.top = "-13rem";
  }
}


// Initial state
var scrollPos = 0;
// adding scroll event
window.addEventListener('scroll', function () {
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos || (document.body.getBoundingClientRect()).top === 0) {
    document.querySelector('.navMobile').style.bottom = "0";
    document.querySelector('.navMobile__siteHeader').style.top = "0";
    document.querySelector('.pageContainer').style.margin = "6rem 0 0 0";
    document.querySelector('.pageContainer').style.transition = "all .2s";

  } else {
    document.querySelector('.navMobile').style.bottom = "-20rem";
    document.querySelector('.navMobile__siteHeader').style.top = "-20rem";
    document.querySelector('.pageContainer').style.margin = "0";
    document.querySelector('.pageContainer').style.transition = "all .2s";
  }
  // saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top;
});