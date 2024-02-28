var swiper = new Swiper(".mySwiper", {
  spaceBetween: 50,
  slidesPerView: 3,
  centeredSlides: true,
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

document.addEventListener("DOMContentLoaded", function () {
  const secImg1 = document.querySelector(".sec1-img");
  const secImg2 = document.querySelector(".sec2-img");
  const secImg3 = document.querySelector(".sec3-img");

  gsap.registerPlugin(ScrollTrigger);

  // Animation for image in section 1 (moving in the positive x-axis direction)
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

  // Animation for image in section 2 (moving in the negative x-axis direction)
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

  // Animation for image in section 3 (moving in the positive x-axis direction)
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
      scrub: 1,
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
      scrub: 1,
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
      scrub: 1,
      toggleActions: "restart none none none",
      // markers: {
      //   startColor: "white",
      //   endColor: "white",
      //   fontSize: "1rem",
      // },
    },
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

  document.querySelectorAll('.text').forEach((btn, index) => {
    btn.addEventListener("click", () => {
      gsap.to(window, {
        duration : 1.5,
        scrollTo : {
          y : "#section" + (index + 1),
          offsetY : 70
        }});
    });
  });





});
