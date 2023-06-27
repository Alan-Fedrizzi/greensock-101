const tl = gsap.timeline({
  duration: 1,
  paused: true,
});

tl.from("body", {
  backgroundColor: "#fff",
  ease: "none",
})
  .fromTo(
    ["h1", ".intro"],
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power1.out",
      stagger: 0.2,
    }
  )
  .from(["img", "h2"], {
    opacity: 0,
    ease: "none",
  })
  .fromTo(
    "ul li",
    {
      y: -20,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power1.out",
      stagger: 0.2,
    }
  );

//
// controls
//
const playButton = document.getElementById("btnPlay");
const pauseButton = document.getElementById("btnPause");
const resumeButton = document.getElementById("btnResume");
const reverseButton = document.getElementById("btnReverse");
const speedUpButton = document.getElementById("btnSpeedUp");
const slowDownButton = document.getElementById("btnSlowDown");
const seekButton = document.getElementById("btnSeek");
const progressButton = document.getElementById("btnProgress");
const restartButton = document.getElementById("btnRestart");

playButton.addEventListener("click", () => {
  tl.play();
});

pauseButton.addEventListener("click", () => {
  tl.pause();
});

resumeButton.addEventListener("click", () => {
  tl.resume();
});

reverseButton.addEventListener("click", () => {
  tl.reverse();
});

speedUpButton.addEventListener("click", () => {
  tl.timeScale(2);
});

slowDownButton.addEventListener("click", () => {
  tl.timeScale(0.5);
});

console.log(tl.duration());

seekButton.addEventListener("click", () => {
  tl.seek(2);
});

progressButton.addEventListener("click", () => {
  tl.progress(0.5);
});

restartButton.addEventListener("click", () => {
  tl.restart();
});
