

function scrollIndicatorFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
}

window.onscroll = () => {
  scrollIndicatorFunction();
};

// Initial state
var scrollPos2 = 0;
// adding scroll event
window.addEventListener('scroll', function () {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".scrolling_Navbar").style.top = "0";
  } else {
    document.querySelector(".scrolling_Navbar").style.top = "-13rem";
  }

  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos2 || (document.body.getBoundingClientRect()).top === 0) {
    document.querySelector('.index').style.top = "6rem";
    document.querySelector('.index').style.transition = "all .2s 0s";
    document.querySelector('.scrolling_Navbar').style.marginTop = '1rem';
    
  } else {
    document.querySelector('.index').style.top = "0";
    document.querySelector('.index').style.transition = "all .2s 0s";
    document.querySelector('.scrolling_Navbar').style.marginTop = '-7rem';
  }
  // saves the new position for iteration.
  scrollPos2 = (document.body.getBoundingClientRect()).top;
});

