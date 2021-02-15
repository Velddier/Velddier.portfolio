

function scrollIndicatorFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("scrollIndicator").style.width = scrolled + "%";
}

window.onscroll = () => {
  scrollIndicatorFunction();
};

// Initial state
let scrollPos2 = 0;
// adding scroll event
window.addEventListener('scroll', function () {

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".scrolling_Navbar").style.top = "0";
  } else {
    document.querySelector(".scrolling_Navbar").style.top = "-16rem";
  }

  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > scrollPos2 || (document.body.getBoundingClientRect()).top === 0) {
    //=> Scrolling UP
    document.querySelector('.index').style.top = "8rem";
    document.querySelector('.scrolling_Navbar').style.marginTop = '0';
    ([...document.querySelectorAll('h2')]).forEach(f => {
      f.style.top = "16rem";
    })
    
    
  } else { //=> Scrolling DOWN
    document.querySelector('.index').style.top = "0";
    document.querySelector('.scrolling_Navbar').style.marginTop = '-10rem';
    ([...document.querySelectorAll('h2')]).forEach(f => {      
      f.style.top = "8rem";
    })
  }
  // saves the new position for iteration.
  scrollPos2 = (document.body.getBoundingClientRect()).top;
});

