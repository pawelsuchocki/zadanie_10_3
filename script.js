$(function(){});

var carouselList = $('#carousel ul'),
    firstItem = carouselList.find('li:first'),
    lastItem = carouselList.find('li:last');

function changeSlides() {
    carouselList.animate({'marginLeft':-400}, 1500, moveFirstSlide);
}

setInterval(changeSlides, 2000);

function moveFirstSlide(){  
    lastItem.after(firstItem);
    carouselList.css({marginLeft:0});
}




