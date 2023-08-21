window.onload = function(){
    slideOne();
    slideTwo();
    slideOnes();
    slideTwos();
}

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let sliderOnes = document.getElementById("slider-11");
let sliderTwos = document.getElementById("slider-22");
let displayValOnes = document.getElementById("range11");
let displayValTwos = document.getElementById("range22");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderTracks = document.querySelector(".slider-tracks");
let sliderMaxValue = document.getElementById("slider-1").max;
let sliderMaxValues = document.getElementById("slider-11").max;



function slideOnes(){
    if(parseInt(sliderTwos.value) - parseInt(sliderOnes.value) <= minGap){
        sliderOnes.value = parseInt(sliderTwos.value) - minGap;
    }
    displayValOnes.textContent = sliderOnes.value;
    fillColor();
}


function slideTwos(){
    if(parseInt(sliderTwos.value) - parseInt(sliderOnes.value) <= minGap){
        sliderTwos.value = parseInt(sliderOnes.value) + minGap;
    }
    displayValTwos.textContent = sliderTwos.value;
    fillColor();
}



function fillColor(){
    percent1 = (sliderOnes.value / sliderMaxValue) * 100;
    percent2 = (sliderTwos.value / sliderMaxValue) * 100;
    sliderTracks.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #1b1b1b ${percent1}% , #1b1b1b ${percent2}%, #dadae5 ${percent2}%)`;
}




let slider = document.querySelector('#navbar_toggle');
let filter = document.querySelector('.filter-space');

slider.onclick = () => {
    slider.classList.toggle('bx-x');
    filter.classList.toggle ('open');
}


var btn1 = document.getElementById('btn1');

    function Toggle1(){
    if (btn1.style.color =="red") {
    btn1.style.color = "grey"
}
    else{
    btn.style.color = "red"
}
}




function showHideNavbar() {
    const navLinksDisplay = document.getElementById('header__nav-links');
    const iconMiddleLine = document.getElementById(
      'header__hamburger-middle-line'
    );
    const iconTopLine = document.getElementById(
      'header__hamburger-top-line'
    );
    const iconBottomLine = document.getElementById(
      'header__hamburger-bottom-line'
    );
    if (navLinksDisplay.style.display === 'flex') {
      navLinksDisplay.style.display = 'none';
      iconMiddleLine.style.display = 'inline-block';
      iconTopLine.classList.remove('header__icon-line-animate');
      iconBottomLine.classList.remove('header__icon-bottom-line-animate');
      navLinksDisplay.classList.remove('header__links--animate');
    } else {
      navLinksDisplay.style.display = 'flex';
      iconMiddleLine.style.display = 'none';
      iconTopLine.classList.add('header__icon-line-animate');
      iconBottomLine.classList.add('header__icon-bottom-line-animate');
      navLinksDisplay.classList.add('header__links--animate');
    }
  }


  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });
  


  