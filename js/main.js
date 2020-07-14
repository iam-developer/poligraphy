
//  function for burger menu:
$(document).ready(function(){
    $(".burger__menu").click(function() {
        $(".burger__links").slideToggle(500);
    });

// Scrolling menu:
    $('.call__back').on("click", function(e){
        e.preventDefault();
            var top = $(".form__reg").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('.btn').on("click", function(e){
        e.preventDefault();
            var top = $(".form__reg").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
// Menu
 $('#service_menu').on("click", function(e){
        e.preventDefault();
            var top = $("#services").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#advantage_menu').on("click", function(e){
        e.preventDefault();
            var top = $("#advantages").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#portfolio_menu').on("click", function(e){
        e.preventDefault();
            var top = $("#portfolio").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#otzyvy_menu').on("click", function(e){
        e.preventDefault();
            var top = $("#otzyvy").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#contact_menu').on("click", function(e){
        e.preventDefault();
            var top = $("#contacts").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    // Burger menu scrolling:
    $('#service_menu1').on("click", function(e){
        e.preventDefault();
            var top = $("#services").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#advantage_menu1').on("click", function(e){
        e.preventDefault();
            var top = $("#advantages").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#portfolio_menu1').on("click", function(e){
        e.preventDefault();
            var top = $("#portfolio").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#otzyvy_menu1').on("click", function(e){
        e.preventDefault();
            var top = $("#otzyvy").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
    $('#contact_menu1').on("click", function(e){
        e.preventDefault();
            var top = $("#contacts").offset().top;
        $('html,body').animate({
        scrollTop: top
        }, 900);
    });
});

// ================ Functions for sliders ==================

let next = document.getElementById('next');
let prev = document.getElementById('prev');
let slide = document.getElementsByClassName('slide');

for(let i=0; i<slide.length; i++) {
    slide[i].style.zIndex = slide.length - i;
}
next.onclick = function() {
    let activeEl = document.querySelector('.active');
     if(activeEl.nextElementSibling) {
         activeEl.style.left = '-100%';
         activeEl.classList.remove('active');
         activeEl.nextElementSibling.classList.add('active');
         this.classList.remove('noActive');
         prev.classList.remove('noActive');
         if(!activeEl.nextElementSibling.nextElementSibling) {
            this.classList.add('noActive');
         }
     }
}
prev.onclick = function() {
    let activeEl = document.querySelector('.active');
     if(activeEl.previousElementSibling) {
         activeEl.previousElementSibling.style.left = '0%';
         activeEl.classList.remove('active');
         activeEl.previousElementSibling.classList.add('active');
         this.classList.remove('noActive');
         next.classList.remove('noActive');
         if(!activeEl.previousElementSibling.previousElementSibling) {
            this.classList.add('noActive');
         }
     }
}
// Slider 2:

let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
let slide2 = document.getElementsByClassName('slide2');

for(let i=0; i<slide2.length; i++) {
    slide2[i].style.zIndex = slide2.length - i;
}
next2.onclick = function() {
    let active2 = document.querySelector('.active2');
     if(active2.nextElementSibling) {
         active2.style.left = '-100%';
         active2.classList.remove('active2');
         active2.nextElementSibling.classList.add('active2');
         this.classList.remove('noActive2');
         prev2.classList.remove('noActive2');
         if(!active2.nextElementSibling.nextElementSibling) {
            this.classList.add('noActive2');
         }
     }
}
prev2.onclick = function() {
    let active2 = document.querySelector('.active2');
     if(active2.previousElementSibling) {
         active2.previousElementSibling.style.left = '0%';
         active2.classList.remove('active2');
         active2.previousElementSibling.classList.add('active2');
         this.classList.remove('noActive2');
         next2.classList.remove('noActive2');
         if(!active2.previousElementSibling.previousElementSibling) {
            this.classList.add('noActive2');
         }
     }
}
// Slider 3:

let next3 = document.getElementById('next3');
let prev3 = document.getElementById('prev3');
let slide3 = document.getElementsByClassName('slide3');

for(let i=0; i<slide3.length; i++) {
    slide3[i].style.zIndex = slide3.length - i;
}
next3.onclick = function() {
    let active3 = document.querySelector('.active3');
     if(active3.nextElementSibling) {
         active3.style.left = '-100%';
         active3.classList.remove('active3');
         active3.nextElementSibling.classList.add('active3');
         this.classList.remove('noActive3');
         prev3.classList.remove('noActive3');
         if(!active3.nextElementSibling.nextElementSibling) {
            this.classList.add('noActive3');
         }
     }
}
prev3.onclick = function() {
    let active3 = document.querySelector('.active3');
     if(active3.previousElementSibling) {
         active3.previousElementSibling.style.left = '0%';
         active3.classList.remove('active3');
         active3.previousElementSibling.classList.add('active3');
         this.classList.remove('noActive3');
         next3.classList.remove('noActive3');
         if(!active3.previousElementSibling.previousElementSibling) {
            this.classList.add('noActive3');
         }
     }
}

// Slider 4:
let next4 = document.getElementById('next4');
let prev4 = document.getElementById('prev4');
let slide4 = document.getElementsByClassName('slide4');

for(let i=0; i<slide4.length; i++) {
    slide4[i].style.zIndex = slide4.length - i;
}
next4.onclick = function() {
    let activeEl4 = document.querySelector('.active4');
     if(activeEl4.nextElementSibling) {
         activeEl4.style.left = '-100%';
         activeEl4.classList.remove('active4');
         activeEl4.nextElementSibling.classList.add('active4');
         this.classList.remove('noActive4');
         prev4.classList.remove('noActive4');
         if(!activeEl4.nextElementSibling.nextElementSibling) {
            this.classList.add('noActive4');
         }
     }
}
prev4.onclick = function() {
    let activeEl4 = document.querySelector('.active4');
     if(activeEl4.previousElementSibling) {
         activeEl4.previousElementSibling.style.left = '0%';
         activeEl4.classList.remove('active4');
         activeEl4.previousElementSibling.classList.add('active4');
         this.classList.remove('noActive4');
         next4.classList.remove('noActive4');
         if(!activeEl4.previousElementSibling.previousElementSibling) {
            this.classList.add('noActive4');
         }
     }
}