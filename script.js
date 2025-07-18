// gsap.from(".anim1", {
//   x: "34.4rem",
//   y: "19.4rem",
//   height: "2rem",
//   width: "2rem",
//   duration: 0.4,
//   delay: 1,
// });

// gsap.from(".anim2", {
//   x: "36rem",
//   y: "9.6rem",
//   height: "2rem",
//   width: "2rem",
//   duration: 0.4,
//   delay: 1.2,
// });

// gsap.from(".anim3", {
//   x: "35.65rem",
//   y: "-0.4rem",
//   height: "2rem",
//   width: "2rem",
//   duration: 0.4,
//   delay: 1.4,
// });

// gsap.from(".anim4", {
//   x: "32.4rem",
//   y: "-6.3rem",
//   height: "2rem",
//   width: "2rem",
//   duration: 0.5,
//   delay: 1.6,
// });

// gsap.from(".anim5", {
//   x: "24.1rem",
//   y: "0.65rem",
//   height: "2rem",
//   width: "2rem",
//   duration: 0.5,
//   delay: 1.8,
// });

// gsap.from(".anim6", {
//   x: "39.4rem",
//   y: "7rem",
//   height: "2rem",
//   width: "2rem",
//   duration: 0.5,
//   delay: 2,
// });

// optional

gsap.from(".anim1", {
  x: "26rem",
  y: "30rem",
  height: "2rem",
  width: "2rem",
  duration: 0.5,
  delay: 1,
});

gsap.from(".anim2", {
  x: "32.25rem",
  y: "25rem",
  height: "2rem",
  width: "2rem",
  duration: 0.5,
  delay: 1.2,
});

gsap.from(".anim3", {
  x: "36rem",
  y: "18.2rem",
  height: "2rem",
  width: "2rem",
  duration: 0.5,
  delay: 1.4,
});

gsap.from(".anim4", {
  x: "38rem",
  y: "11rem",
  height: "2rem",
  width: "2rem",
  duration: 0.5,
  delay: 1.6,
});

gsap.from(".anim5", {
  x: "38.2rem",
  y: "5.8rem",
  height: "2rem",
  width: "2rem",
  duration: 0.5,
  delay: 1.8,
});

gsap.from(".anim6", {
  x: "37.1rem",
  y: "0.5rem",
  height: "2rem",
  width: "2rem",
  duration: 0.5,
  delay: 2,
});

const el = document.querySelectorAll(".photo div");

el.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    gsap.to(e, {
      scale: 1.2,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  });

  e.addEventListener("mouseleave", () => {
    gsap.to(e, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
    });
  });
});
