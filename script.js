// efek navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

// efek typing pada home
const typing = document.querySelector('.typing');
const ListArray = ['Information Enthusiast', 'Agent Moslem', 'Fullstack Developer'];
const time = 100;
let arrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < ListArray[arrayIndex].length) {
    typing.textContent += ListArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, time);
  } else {
    setTimeout(erase, time);
  }
}
function erase() {
  if (charIndex > 0) {
    typing.textContent += ListArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, time - 50);
  } else {
    arrayIndex++;
    if (arrayIndex >= ListArray.length) {
      arrayIndex = 0;
    }
    setTimeout(type, time);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  type(type, time + 2000);
  erase(erase, time);
});

// $(document).ready(function(){
//     $(window).scroll(function () {
//       if (this.scrollY > 20) {
//         $('.navbar').addClass('sticky');
//       } else {
//         $('.navbar').removeClass('sticky');
//       }

//       if (this.scroll > 500) {
//         $('.scroll-up-btn').addClass('show');
//       } else {
//         $('.scroll-up-btn').removeClass('show');
//       }
//     });

//     // slide-up script
//     $('.scroll-up-btn').click(function () {
//       $('html').animate({ scrollTop: 0 });
//     });

//     // toggle menu/navbar script
//     $('.menu-btn').click(function () {
//       $('.navbar .menu').toggleClass('active');
//       $('.menu-btn i').toggleClass('active');
//     });

//     // typing Animation script
//     var typed = new typed('.typing', {
//       String: ['Information enthusiast', 'Agent Moslem', 'Full Stack Developer'],
//       typeSpeed: 100,
//       backSpees: 60,
//       loop: true,
//     });

//     // owl carousel function
//     $('.carousel').owlCarousel({
//         margin: 20,
//         loop: true,
//         autoplayTimeOut: 2000,
//         autoplayHoverPause: true,
//         responsive: {
//             0:{
//                 items: 1,
//                 nav: false
//             },
//             600:{
//                 items: 2,
//                 nav: false
//             },
//             1000:{
//                 items: 3,
//                 nav: false
//             }
//         }
//     });
// });
