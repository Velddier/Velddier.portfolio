// Insert Navbar
const navbar__content = `
<div class="navbar__siteHeader"> <a href="index.html" class="navbar__siteHeader-link">Frederik DeVilder</a></div>
<div class="navbar__menu">
  <a href="html/UX_Portfolio.html" class="navbar__menuItem">UX Design</a> 
  <a href="html/UI_Portfolio.html" class="navbar__menuItem">Web/UI</a>
  <a href="html/Coding_Portfolio.html" class="navbar__menuItem">Coding</a>
  <a href="html/Other_Portfolio.html" class="navbar__menuItem">Etc.</a>
  </div>
  <div class="navbar__menuExpand">more<span> &dtrif;</span></div>
  <div class="navbar__menuSecondary">
  <a href="mailto:velddier@gmail.com" target="_blank" class="navbar__menuItem navbar__menuSecondaryItem">📧 Email</a>
  <a href="html_components/external/Frederik_DeVilder_UX_Designer_CV_2020.pdf" target="_blank" class="navbar__menuItem navbar__menuSecondaryItem">📃 CV</a>
  <a href="html/recommended_Good reads.html" class="navbar__menuItem navbar__menuSecondaryItem">📖 Good reads</a>
  </div>
<div class="navbar__btn-respond btn"> <a href="mailto:velddier@gmail.com" class="mail">Send a
    message</a> </div>
</div>`

document.querySelector('nav').insertAdjacentHTML("afterbegin", `
<nav id="navbar">
<div class="navbar">
  ${navbar__content}
</div>
</nav>
  
<!-- SCROLLING NAVBAR -->
<div class="scrolling_Navbar" style="margin-top: -10rem;">
  ${navbar__content}
</div>

<!-- MOBILE NAVBAR -->
<div class="navMobile">
  <div class=" navMobile__siteHeader"> <a href="index.html" class="navMobile__siteHeader-link">Frederik
      DeVilder</a>
  </div>
  <div class="navMobile__expanded">
    <div class="navMobile__expanded">
      <div class="navMobile__menu">
        <a href="html/UX_Portfolio.html" class="navMobile__menuItem">UX</a>
        <a href="html/UI_Portfolio.html" class="navMobile__menuItem">UI</a>
        <a href="html/Coding_Portfolio.html" class="navMobile__menuItem">other</a>
      </div>
      <div class="navMobile__links">
        <div class="socialLink"> <a href="mailto:velddier@gmail.com"
            class="socialLink__icon socialLink__mail"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 40 40">
              <title>mail4</title>
              <path
                d="M20 0c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zM10 10h20c0.357 0 0.703 0.077 1.021 0.221l-11.021 12.858-11.021-12.858c0.318-0.144 0.664-0.221 1.021-0.221zM7.5 27.5v-15c0-0.052 0.002-0.104 0.005-0.156l7.331 8.552-7.25 7.25c-0.056-0.208-0.086-0.425-0.086-0.646zM30 30h-20c-0.221 0-0.438-0.030-0.646-0.086l7.114-7.114 3.532 4.121 3.532-4.121 7.114 7.114c-0.209 0.056-0.425 0.086-0.646 0.086zM32.5 27.5c0 0.221-0.030 0.438-0.086 0.646l-7.25-7.25 7.331-8.552c0.003 0.052 0.005 0.104 0.005 0.156v15z">
              </path>
            </svg></a> </div>
        <div class="socialLink"> <a href="https://www.linkedin.com/in/velddier/" target="_blank"
            class="socialLink__icon socialLink__linkedin"><svg version="1.1" xmlns="http://www.w3.org/2000/svg"
              width="20" height="20" viewBox="0 0 40 40">
              <title>linkedin-with-circle</title>
              <path
                d="M20 0.8c-10.604 0-19.2 8.596-19.2 19.2s8.596 19.2 19.2 19.2 19.2-8.596 19.2-19.2-8.596-19.2-19.2-19.2zM15.3 27.958h-3.888v-12.512h3.888v12.512zM13.332 13.91c-1.228 0-2.022-0.87-2.022-1.946 0-1.098 0.818-1.942 2.072-1.942s2.022 0.844 2.046 1.942c0 1.076-0.792 1.946-2.096 1.946zM29.5 27.958h-3.888v-6.934c0-1.614-0.564-2.71-1.97-2.71-1.074 0-1.712 0.742-1.994 1.456-0.104 0.254-0.13 0.614-0.13 0.972v7.214h-3.89v-8.52c0-1.562-0.050-2.868-0.102-3.992h3.378l0.178 1.738h0.078c0.512-0.816 1.766-2.020 3.864-2.020 2.558 0 4.476 1.714 4.476 5.398v7.398z">
              </path>
            </svg> </a> </div>
      </div>
    </div>
  </div>
</nav>`)


// Insert FOOTER
document.querySelector('footer').innerHTML = `
<!-- Footer Tiles -->
<div class="footerTiles">
        <!-- Tile 1 -->
        <div class="footerTiles__item footerTiles__item-1"> <a target="_blank" href="mailto:velddier@gmail.com"
            class="footerTiles__link"><img class="footerTiles__img" src="img/asset_Manchester_streets_1.jpg" alt="#" />
          </a>
          <div class="footerTiles__label"><a href="mailto:velddier@gmail.com">Email</a></div>
        </div>
        <!-- Tile 2 -->
        <div class="footerTiles__item footerTiles__item-2"> <a target="_blank"
            href="/html_components/external/Frederik_DeVilder_UX_Designer_CV_2020.pdf" class="footerTiles__link"><img
              class="footerTiles__img" src="img/asset_Manchester_streets_2.jpg" alt="Frederik DeVilder's CV" /> </a>
          <div class="footerTiles__label"><a
              href="/html_components/external/Frederik_DeVilder_UX_Designer_CV_2020.pdf">CV</a></div>
        </div>
        <!-- Tile 3 -->
        <div class="footerTiles__item footerTiles__item-3"> <a target="_blank"
            href="https://www.nngroup.com/articles/definition-user-experience/" class="footerTiles__link"><img
              class="footerTiles__img" src="img/asset_Manchester_streets_5.jpg" alt="#" /> </a>
          <div class="footerTiles__label"><a href="https://www.nngroup.com/articles/definition-user-experience/">What is
              UX</a></div>
        </div>
        <!-- Tile 4 -->
        <div class="footerTiles__item footerTiles__item-4"> <a target="_blank" href="#" class="footerTiles__link"><img
              class="footerTiles__img" src="img/portfolio_assets/LitterID_bannerLandscape.png" alt="#" />
          </a>
          <div class="footerTiles__label">&nbsp;</div>
        </div>
      </div>
      <!-- Footer NavMenu -->
      <div class="footerNav">
        <div class="footerNav__header">
          <div class="navbar__siteHeader"> <a href="/index.html" class="navbar__siteHeader-link"> ‹ Frederik
              DeVilder</a> </div>
          <div class="footerNav__social">
            <div> <span class="material-icons"> local_phone </span>
              <span>+44 (0)770 835 2438</span>
            </div> <a href="mailto:velddier@gmail.com"> <span class="material-icons">
                email </span> <span>velddier@gmail.com</span> </a>
          </div>
        </div>
        <div class="footerNav__menu"> 
          <a href="html/UX_Portfolio.html" class="navbar__menuItem">UX Design</a>
          <a href="html/UI_Portfolio.html" class="navbar__menuItem">Web/UI</a> 
          <a href="html/Coding_Portfolio.html" class="navbar__menuItem">Coding</a>
          <a href="html/Other_Portfolio.html" class="navbar__menuItem">Etc.</a>
        </div>
        <div class="footerNav__badges">
          <div class="footerNav__badgesItem-1"> <img src="img/UXDI_badge_textonly.png" alt="" /> </div>
          <div class="footerNav__badgesItem-2"> <img style="border-radius: 50%" src="img/UXDI_Certified_Badge_B&W.png"
              alt="" /> </div>
        </div>
        <div class="footerNav__smallPrint">&copy;2020 Frederik
          DeVilder</div>
      </div>
      `


// Insert CLOSING PARAGRAPH
document.querySelector('.closingParagraph').innerHTML = `
<div class="authorMessage">
  <figure class="authorMessage__profile">
    <a href="#" class="authorMessage__profile-link"><img src="img/Selfie_badge.png"
        alt="Profile picture of the author" class="authorMessage__profile-img" /></a>
  </figure>
  <div class="authorMessage__copy">
    <h4>About the designer</h4>
    <p>
      The content on this page is created by Frederik DeVilder, a
      professionally trained and certified, detail-focused designer who
      loves to come up with optimized experience flows and crystal clear
      visual designs to guide user to their goals and objectives.
      Besides designing, he often works on improving his understanding
      and skills of front-end development. When not working on building
      digital experiences, Frederik enjoys tech, music, playing the
      piano, and cooking.
    </p>
  </div>
</div>
<div class="contactForm"></div>
</section>
`



const navbarExpand = document.querySelectorAll('.navbar__menuExpand');
const menuSecondary = document.querySelectorAll('.navbar__menuSecondary');
const navbar = document.querySelector('.navbar');
var navbarExpanded = 0;
[...navbarExpand].forEach((c) => {
  c.addEventListener('click', (e) => {
    e.preventDefault();

    if (navbarExpanded === 0) {
      navbar.style.paddingTop = '1.55rem';
      [...navbarExpand].forEach(f => f.innerHTML = 'less <span> &utrif;');
      [...menuSecondary].forEach((d) => {
        d.style.display = 'inline';
        d.style.transform = 'scaleY(1)';
      })
      navbarExpanded = 1;
    } else if (navbarExpanded === 1) {
      [...navbarExpand].forEach(f => f.innerHTML = 'more <span> &dtrif;');
      navbar.style.paddingTop = '4rem';
      [...menuSecondary].forEach((d) => {
        d.style.display = 'none';
        d.style.transform = 'scaleY(0)';
      })
      navbarExpanded = 0;
    }
  })
});




window.onscroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".scrolling_Navbar").style.top = "0";
  } else {
    document.querySelector(".scrolling_Navbar").style.top = "-15rem";
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
    document.querySelector('.pageContainer').style.transition = "all .2s";
    document.querySelector('.scrolling_Navbar').style.marginTop = '0rem';

  } else {
    document.querySelector('.navMobile').style.bottom = "-20rem";
    document.querySelector('.navMobile__siteHeader').style.top = "-20rem";
    document.querySelector('.pageContainer').style.margin = "0";
    document.querySelector('.pageContainer').style.transition = "all .2s";
  }
  // saves the new position for iteration.
  scrollPos = (document.body.getBoundingClientRect()).top;
});
