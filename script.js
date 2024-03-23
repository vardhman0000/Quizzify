const loader = document.querySelector('.loader-body');
const wrapper = document.querySelector('.wrapper');

document.addEventListener('DOMContentLoaded', () => { 
  setTimeout(() => { 
    loader.style.display = 'none';
    wrapper.style.display = 'block';
    triggerAnimations();
  }, 1500);


  let dropdown = document.querySelector('#navbar .dropdown-list');
  let burger = document.querySelector('.menu-icon');
  let count = 0;

  burger.addEventListener("click", () => {
    if (window.innerWidth < 950) {
      if (count % 2 == 0) {
        dropdown.style.display = "block";
        count++;
      } else {
        dropdown.style.display = "none";
        count++;
      }
    } else {
      dropdown.style.display = "none";
    }
  });



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
        window.location.href = 'computer.html'; 
    });
});



window.addEventListener("resize", function() {
  if (window.innerWidth <= 720) {
    swiper.params.slidesPerView = 2;
    swiper.update();
  } else {
    swiper.params.slidesPerView = 3;
    swiper.update();
  }
});



const navbar = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 70 && window.scrollY < 750) {
    // navbar.style.backgroundColor = "black";
    navbar.style.backdropFilter = "blur(10px)";
    navbar.style.backgroundColor = "rgba(0, 0, 200, 0.5)";
    navbar.classList.add("borderBottomShadow");
    // navbar.style.boxShadow = '0px 1px 7px #eee' ;
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.classList.remove("borderBottomShadow");
  }
  if (window.scrollY > 750) {
    navbar.style.backgroundColor = "black";
  } else {
    navbar.style.backgroundColor = "transparent";
  }
});


function triggerAnimations()
{
  const secImg1 = document.querySelector(".sec1-img");
const secImg2 = document.querySelector(".sec2-img");
const secImg3 = document.querySelector(".sec3-img");
const secText1 = document.querySelector(".sec1-text");
const secText2 = document.querySelector(".sec2-text");
const secText3 = document.querySelector(".sec3-text");

gsap.registerPlugin(ScrollTrigger);

function calculateAnimationParams(screenWidth) {
  let animationParams = {
    x: 90,
    y: 0,
    scrub: 2,
  };

  if (screenWidth <= 450) {
    animationParams.x = 0; 
    animationParams.y = -90; 
    animationParams.scrub = 3;
  }
  else if (screenWidth <= 600) {
    animationParams.x = 0; 
    animationParams.y = -90;
    animationParams.scrub = 3;
  }
  else if (screenWidth <= 750) {
    animationParams.x = 0; 
    animationParams.y = -90;
    animationParams.scrub =3;
  }
  else if (screenWidth <= 950) {
    animationParams.x = 0; 
    animationParams.y = -90;
    animationParams.scrub = 3;
  }
  else if (screenWidth > 950) {
    triggerOriginalAnimation();
    return ;
  }

  return animationParams;
}

function triggerOriginalAnimation(){
  const secImg1 = document.querySelector(".sec1-img");
  const secImg2 = document.querySelector(".sec2-img");
  const secImg3 = document.querySelector(".sec3-img");

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(secImg1, {
    x: 90,
    duration: 2,
    scrollTrigger: {
      trigger: secImg1,
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
      toggleActions: "restart none none none",
      // markers: {
      //     startColor: 'white',
      //     endColor: 'white',
      //     fontSize: '1rem'
      // }
    },
  });

  gsap.to(secImg2, {
    x: -90,
    duration: 2,
    scrollTrigger: {
      trigger: secImg2,
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
      toggleActions: "restart none none none",
      // markers: {
      //     startColor: 'white',
      //     endColor: 'white',
      //     fontSize: '1rem'
      // }
    },
  });

  gsap.to(secImg3, {
    x: 90,
    duration: 2,
    scrollTrigger: {
      trigger: secImg3,
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
      toggleActions: "restart none none none",
      // markers: {
      //     startColor: 'white',
      //     endColor: 'white',
      //     fontSize: '1rem'
      // }
    },
  });

  const secText1 = document.querySelector(".sec1-text");
  const secText2 = document.querySelector(".sec2-text");
  const secText3 = document.querySelector(".sec3-text");

  gsap.to(secText1, {
    x: -90,
    duration: 2,
    scrollTrigger: {
      trigger: secText1,
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
      toggleActions: "restart none none none",
      // markers: {
      //   startColor: "white",
      //   endColor: "white",
      //   fontSize: "1rem",
      // },
    },
  });
  gsap.to(secText2, {
    x: 90,
    duration: 2,
    scrollTrigger: {
      trigger: secText2,
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
      toggleActions: "restart none none none",
      // markers: {
      //   startColor: "white",
      //   endColor: "white",
      //   fontSize: "1rem",
      // },
    },
  });
  gsap.to(secText3, {
    x: -90,
    duration: 2,
    scrollTrigger: {
      trigger: secText3,
      start: "top 60%",
      end: "top 20%",
      scrub: 2,
      toggleActions: "restart none none none",
      // markers: {
      //   startColor: "white",
      //   endColor: "white",
      //   fontSize: "1rem",
      // },
    },
  });
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

window.addEventListener("resize", () => {
  const animationParams = calculateAnimationParams(window.innerWidth);

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
        scrub: 3,
        toggleActions: "restart none none none",
      },
    });
  });


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
  document.querySelectorAll(".dropdown-list .text").forEach((btn, index) => {
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
  document.querySelector(".explore-more").addEventListener("click", () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: "#abt-quiz",
        offsetY: -70,
      },
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
        opacity: 0, 
        ease: "none",
      },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        time: 0.5,
      },
      {
        y: -20, 
        opacity: 1,
        ease: "none",
      },
    ],
    scrollTrigger: {
      trigger: forTrigger,
    },
  });
  
};
