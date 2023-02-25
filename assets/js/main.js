window.onscroll = function() {scrollEvent()};
var navbarTopOffset = document.getElementById("jumbotron").offsetTop + document.getElementById("jumbotron").offsetHeight;
var aboutMe = document.getElementById("about-me");
var portofolio = document.getElementById("portofolio")
var contactMe = document.getElementById("contact-me")
var navbarLinks = document.getElementById("navbar").querySelectorAll("a");
var currentSection = -1 

function changeSection(selectedSection){
if(currentSection != -1) {
  navbarLinks[currentSection].classList.remove("chosen-nav");
}
if(selectedSection != -1){
  navbarLinks[selectedSection].classList.add("chosen-nav");
}
currentSection = selectedSection;
}

function scrollEvent() {
  if (window.pageYOffset >= navbarTopOffset) {
    navbar.classList.add("sticky")
    if(window.pageYOffset >= aboutMe.offsetTop-200 && window.pageYOffset <= (aboutMe.offsetHeight + aboutMe.offsetTop-200)){ 
      changeSection(0);
    }else if(window.pageYOffset >= portofolio.offsetTop-200 && window.pageYOffset <= (portofolio.offsetHeight + portofolio.offsetTop-200)){
      changeSection(1);
    }else if(window.pageYOffset >= contactMe.offsetTop-200 && window.pageYOffset <= (contactMe.offsetHeight + contactMe.offsetTop-200)){
      changeSection(2);
    }
  } 
  else {
    navbar.classList.remove("sticky");
    changeSection(-1);
  }
}