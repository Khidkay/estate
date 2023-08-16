window.onload = function(){
    slideOnes();
    slideTwos();
}

let sliderOnes = document.getElementById("slider-11");
let sliderTwos = document.getElementById("slider-22");
let displayValOnes = document.getElementById("range11");
let displayValTwos = document.getElementById("range22");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
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
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #1b1b1b ${percent1}% , #1b1b1b ${percent2}%, #dadae5 ${percent2}%)`;
}





let slider = document.querySelector('#btn');
let filter = document.querySelector('.filter-spaces');

slider.onclick = () => {
    slider.classList.toggle('bx-x');
    filter.classList.toggle ('opens');
}

