// JavaScript Document
//
// uses button to toggle between videos
$(document).ready(function () {
    $(".switchButton").on("click", function () {
    $(".filmOne").toggle()
});
});

// play button to take user down to video
	$(".playButton").click(function() {
    $('html, body').animate({ scrollTop: $(".filmContainer").offset().top }, 1000);
});
//
//plays both videos when visitor clicks Play button
$('.playButton').click(function () {
   if ($("#filmOne").get(0).paused) {
       $("#filmOne").get(0).play(); 
	   ($("#filmTwo").get(0).paused) 
       $("#filmTwo").get(0).play();   
   } else {
       $("#filmOne").get(0).pause();
  }
});
//
// mutes hidden video when switched
$(".switchButton").click( function (){
    $("#filmOne").prop('muted', !$("#filmOne").prop('muted'));
});
//
$(".switchButton").click( function (){
    $("#filmTwo").prop('muted', !$("#filmTwo").prop('muted'));
});

