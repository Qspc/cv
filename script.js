// efek navbar scroll + button auto scroll atas
const header = document.querySelector('.navbar');
const naik = document.querySelector('.kotak');

window.onscroll = function () {
  var top = window.scrollY;
  // console.log(top);
  if (top >= 100) {
    header.classList.add('sticky');
    naik.classList.add('scroll');
  } else {
    header.classList.remove('sticky');
    naik.classList.remove('scroll');
  }
};

// efek typing pada home
const typing = document.querySelector('.typing');
const ListArray = ['Information Enthusiast', 'Frontend Developer'];
const time = 100;
let arrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < ListArray[arrayIndex].length) {
    typing.textContent += ListArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, time);
  } else {
    setTimeout(erase, time + 2000);
  }
}
function erase() {
  if (charIndex > 0) {
    typing.textContent = ListArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, time - 50);
  } else {
    arrayIndex++;
    if (arrayIndex >= ListArray.length) {
      arrayIndex = 0;
    }
    setTimeout(type, time + 1000);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  type(type, time + 2000);
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

// https://colorlib.com/preview/theme/seogo/

const buttonsWrapper = document.querySelector('.map');
const slides = document.querySelector('.inner');

buttonsWrapper.addEventListener('click', (e) => {
  if (e.target.nodeName === 'BUTTON') {
    Array.from(buttonsWrapper.children).forEach((item) => item.classList.remove('active'));
    if (e.target.classList.contains('first')) {
      slides.style.transform = 'translateX(-0%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('second')) {
      slides.style.transform = 'translateX(-25%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('third')) {
      slides.style.transform = 'translatex(-50%)';
      e.target.classList.add('active');
    } else if (e.target.classList.contains('fourth')) {
      slides.style.transform = 'translatex(-75%)';
      e.target.classList.add('active');
    }
  }
});
