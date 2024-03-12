const loader = document.querySelector('.loader-body');
const wrapper = document.querySelector('.wrapper');

document.addEventListener('DOMContentLoaded', () => { 
  setTimeout(() => { 
    loader.style.display = 'none';
    wrapper.style.display = 'block';
    triggerAnimations();
  }, 1500);


  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3, 
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
    breakpoints: {
      300: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 40, 
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 60,
      }
    }
  });
});


const categoryCards = document.querySelectorAll(".retro-card");


categoryCards.forEach(card => {
    card.addEventListener('click', function() {
        const category = card.dataset.category;
        localStorage.setItem('quizCategory', category);
        window.location.href = 'computer.html'; // Redirect to quiz page
    });
});

let menuCard = document.querySelector('.menu-card .nav-items');
let menu = document.querySelector('svg');
menu.addEventListener('click', (event) => { 
  event.stopPropagation();
  menuCard.classList.toggle('display--block');
 });



//***** To adjust Slides per view to 2 ***** */

// Add a listener for window resize
window.addEventListener("resize", function() {
  // Check if the window width is less than or equal to 700px
  if (window.innerWidth <= 720) {
    // Update swiper instance with slidesPerView set to 2
    swiper.params.slidesPerView = 2;
    swiper.update(); // Update swiper
  } else {
    // Update swiper instance with slidesPerView set back to 3
    swiper.params.slidesPerView = 3;
    swiper.update(); // Update swiper
  }
});



const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 70 && window.scrollY < 700) {
    // navbar.style.backgroundColor = "black";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.backgroundColor = "rgba(0, 0, 200, 0.5)";
    navbar.classList.add("borderBottomShadow");
    // navbar.style.boxShadow = '0px 1px 7px #eee' ;
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.classList.remove("borderBottomShadow");
  }
  if (window.scrollY > 700) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});

// ****************** GSAP ANIMATION ****************** //

// gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", function () 
function triggerAnimations()
{
  const secImg1 = document.querySelector(".sec1-img");
const secImg2 = document.querySelector(".sec2-img");
const secImg3 = document.querySelector(".sec3-img");
const secText1 = document.querySelector(".sec1-text");
const secText2 = document.querySelector(".sec2-text");
const secText3 = document.querySelector(".sec3-text");

gsap.registerPlugin(ScrollTrigger);

// Function to calculate animation parameters based on screen width
// function calculateAnimationParams(screenWidth) {
//   let animationParams = {
//     x: 90, // Default value
//     scrub: 2, // Default value
//   };

//   // Adjust parameters based on screen width
//   if (screenWidth <= 450) {
//     animationParams.x = 20;
//   } 
//   else if (screenWidth <= 600) {
//     animationParams.x = 40;
//     animationParams.scrub = 1.5;
//   } 
//   else if (screenWidth <= 750) {
//     animationParams.x = 60;
//     animationParams.scrub = 1;
//   }

//   return animationParams;
// }

// // Animation for image in section 1
// gsap.to(secImg1, {
//   duration: 2,
//   scrollTrigger: {
//     trigger: secImg1,
//     start: "top 60%",
//     end: "top 20%",
//     toggleActions: "restart none none none",
//   },
//   ...calculateAnimationParams(window.innerWidth),
// });

// // Animation for image in section 2
// gsap.to(secImg2, {
//   duration: 2,
//   scrollTrigger: {
//     trigger: secImg2,
//     start: "top 60%",
//     end: "top 20%",
//     toggleActions: "restart none none none",
//   },
//   ...calculateAnimationParams(window.innerWidth),
// });

// // Animation for image in section 3
// gsap.to(secImg3, {
//   duration: 2,
//   scrollTrigger: {
//     trigger: secImg3,
//     start: "top 60%",
//     end: "top 20%",
//     toggleActions: "restart none none none",
//   },
//   ...calculateAnimationParams(window.innerWidth),
// });

// // Animation for text in section 1
// gsap.to(secText1, {
//   duration: 2,
//   scrollTrigger: {
//     trigger: secText1,
//     start: "top 60%",
//     end: "top 20%",
//     toggleActions: "restart none none none",
//   },
//   ...calculateAnimationParams(window.innerWidth),
// });

// // Animation for text in section 2
// gsap.to(secText2, {
//   duration: 2,
//   scrollTrigger: {
//     trigger: secText2,
//     start: "top 60%",
//     end: "top 20%",
//     toggleActions: "restart none none none",
//   },
//   ...calculateAnimationParams(window.innerWidth),
// });

// // Animation for text in section 3
// gsap.to(secText3, {
//   duration: 2,
//   scrollTrigger: {
//     trigger: secText3,
//     start: "top 60%",
//     end: "top 20%",
//     toggleActions: "restart none none none",
//   },
//   ...calculateAnimationParams(window.innerWidth),
// });

// // Event listener to handle window resize
// window.addEventListener("resize", () => {
//   // Recalculate animation parameters on window resize
//   const animationParams = calculateAnimationParams(window.innerWidth);

//   // Update animations with new parameters
//   gsap.to(secImg1, animationParams);
//   gsap.to(secImg2, animationParams);
//   gsap.to(secImg3, animationParams);
//   gsap.to(secText1, animationParams);
//   gsap.to(secText2, animationParams);
//   gsap.to(secText3, animationParams);
// });

function calculateAnimationParams(screenWidth) {
  let animationParams = {
    x: 90, // Default value for x-axis movement
    y: 0, // Default value for y-axis movement
    scrub: 2, // Default value for scrubbing
  };

  if (screenWidth <= 450) {
    animationParams.x = 0; // Reset x-axis movement
    animationParams.y = -90; // Move image upwards
    animationParams.scrub = 1; // Faster scrubbing
  } else if (screenWidth <= 600) {
    animationParams.x = 40;
    animationParams.scrub = 1.5;
  } else if (screenWidth <= 750) {
    animationParams.x = 60;
    animationParams.scrub = 1;
  }

  return animationParams;
}

gsap.to(secImg1, {
  duration: 2,
  scrollTrigger: {
    trigger: secImg1,
    start: "top 60%",
    end: "top 20%",
    toggleActions: "restart none none none",
  },
  ...calculateAnimationParams(window.innerWidth),
});

// Animation for image in section 2
gsap.to(secImg2, {
  duration: 2,
  scrollTrigger: {
    trigger: secImg2,
    start: "top 60%",
    end: "top 20%",
    toggleActions: "restart none none none",
  },
  ...calculateAnimationParams(window.innerWidth),
});

// Animation for image in section 3
gsap.to(secImg3, {
  duration: 2,
  scrollTrigger: {
    trigger: secImg3,
    start: "top 60%",
    end: "top 20%",
    toggleActions: "restart none none none",
  },
  ...calculateAnimationParams(window.innerWidth),
});

// Animation for text in section 1
gsap.to(secText1, {
  duration: 2,
  scrollTrigger: {
    trigger: secText1,
    start: "top 60%",
    end: "top 20%",
    toggleActions: "restart none none none",
  },
  ...calculateAnimationParams(window.innerWidth),
});

// Animation for text in section 2
gsap.to(secText2, {
  duration: 2,
  scrollTrigger: {
    trigger: secText2,
    start: "top 60%",
    end: "top 20%",
    toggleActions: "restart none none none",
  },
  ...calculateAnimationParams(window.innerWidth),
});

// Animation for text in section 3
gsap.to(secText3, {
  duration: 2,
  scrollTrigger: {
    trigger: secText3,
    start: "top 60%",
    end: "top 20%",
    toggleActions: "restart none none none",
  },
  ...calculateAnimationParams(window.innerWidth),
});

// Event listener to handle window resize
window.addEventListener("resize", () => {
  // Recalculate animation parameters on window resize
  const animationParams = calculateAnimationParams(window.innerWidth);

  // Update animations with new parameters
  gsap.to(secImg1, animationParams);
  gsap.to(secImg2, animationParams);
  gsap.to(secImg3, animationParams);
  gsap.to(secText1, animationParams);
  gsap.to(secText2, animationParams);
  gsap.to(secText3, animationParams);
});





  const sections = document.querySelectorAll("section");
  gsap.set(sections, { opacity: 0 });
  sections.forEach((section) => {
    gsap.to(section, {
      opacity: 1,
      duration: 1,
      scrub: 4,
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "top 30%",
        scrub: 1,
        toggleActions: "restart none none none",
        // markers: true // For debugging
      },
    });
  });

  // Scroll To Animation

  gsap.registerPlugin(ScrollToPlugin);

  document.querySelectorAll(".text").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: {
          y: "#section" + (index + 1),
          offsetY: 70,
        },
      });
    });
  });

  const retroCard = document.querySelectorAll(".retro-card");
  gsap.set(retroCard, {
    opacity: 0,
    scale: 0,
  });
  let overlayCardCont = document.querySelector('.overlay-card-container');
  retroCard.forEach((card, index) => {
    gsap.to(card, {
      y: -40,
      duration: 1,
      opacity: 1,
      scale: 1,
      delay: index * 0.1,
      scrollTrigger: {
        trigger: overlayCardCont,
      },
    });
  });



  const testimonial = document.querySelector(".swiper");
  const forTrigger = document.querySelector(".forAnimTrigger");

  gsap.set(testimonial, {
    opacity: 0,
    y: -90,
  });

  gsap.to(testimonial, {
    duration: 1.7,
    opacity: 1,
    y: 0,
    delay : 0.01,
    keyframes: [
      {
        y: -90,
        opacity: 0, // Start position behind the screen
        ease: "none",
      },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        time: 0.5, // 50% of the animation duration
      },
      {
        y: -20, // Move testimonial back slightly
        opacity: 1,
        ease: "none",
      },
    ],
    scrollTrigger: {
      trigger: forTrigger,
    },
  });
  
};
