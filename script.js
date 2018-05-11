$(function(){});

var carouselList = $('#carousel ul');

function changeSlides() {
    carouselList.animate({'marginLeft':-400}, 1500, moveFirstSlide);
}

setInterval(changeSlides, 2000);

function moveFirstSlide(){  
   $('li:last').after($('li:first'));
   carouselList.css({marginLeft:0});
}




