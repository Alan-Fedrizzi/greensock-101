gsap.registerPlugin(ScrollTrigger);

function init() {
  gsap.set("#project02", {
    scrollTrigger: {
      trigger: "#project02",
      start: "top bottom-=10%",
      end: "bottom center-=150",
      toggleClass: "active",
    },
  });

  const parallaxTl = gsap.timeline({
    ease: "none",
    scrollTrigger: {
      trigger: ".bcg-parallax",
      start: "top bottom",
      scrub: true,
    },
  });

  parallaxTl
    .from(
      ".content-wrapper",
      {
        duration: 0.4,
        autoAlpha: 0,
      },
      0.4
    )
    .from(
      ".bcg",
      {
        duration: 2,
        yPercent: -30,
      },
      0
    );

  gsap.to(["#intro h1", "#intro p"], {
    autoAlpha: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#intro .content",
      start: "top top+=5%",
      pin: true,
      scrub: true,
    },
  });

  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    gsap.from(project, {
      opacity: 0,
      yPercent: 5,
      scrollTrigger: {
        trigger: project.querySelector("img"),
        start: "top bottom-=300",
        end: "top center",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });
  });
}

window.addEventListener("load", function () {
  init();
});

const progress = document.querySelector(".scroll-progress__fill");

gsap.to(progress, {
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    onUpdate: (info) => {
      progress.style.setProperty("--progress", info.progress * 100);
    },
  },
});
