// var crsr = document.querySelector("#cursor");

// document.addEventListener("mousemove", (dets) => {
//   gsap.to("#cursor", {
//     top: dets.y - crsr.clientHeight / 2 + "px",
//     left: dets.x - crsr.clientWidth / 2 + "px",
//     delay: 0.08,
//   });
//   //   crsr.style.left = dets.x - crsr.clientWidth / 2 + "px";
//   //   crsr.style.top = dets.y - crsr.clientHeight / 2 + "px";
//   crsrblr.style.left = dets.x - crsrblr.clientWidth / 2 + "px";
//   crsrblr.style.top = dets.y - crsrblr.clientHeight / 2 + "px";
// });

const crsr = document.querySelector("#cursor");
const crsrblr = document.querySelector("#cursor-blur");
let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
let pos = { x: mouse.x, y: mouse.y };
let blrpos = { x: mouse.x, y: mouse.y };

// track real mouse
document.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// on every GSAP tick, interpolate toward the mouse
gsap.ticker.add(() => {
  pos.x += (mouse.x - pos.x) * 0.15;
  pos.y += (mouse.y - pos.y) * 0.15;
  blrpos.x += (mouse.x - blrpos.x) * 0.03;
  blrpos.y += (mouse.y - blrpos.y) * 0.03;
  gsap.set(crsr, {
    x: pos.x - crsr.clientWidth / 2,
    y: pos.y - crsr.clientHeight / 2,
  });
  gsap.set(crsrblr, {
    x: blrpos.x - crsrblr.clientWidth / 2,
    y: blrpos.y - crsrblr.clientHeight / 2,
  });
});

function hasPointerCursor(el) {
  while (el && el !== document.body) {
    if (getComputedStyle(el).cursor === "pointer") return true;
    el = el.parentElement;
  }
  return false;
}

window.addEventListener("mouseover", (e) => {
  if (hasPointerCursor(e.target)) {
    console.log(e.target);
    gsap.to(crsr, {
      duration: 0.5,
      width: 70,
      height: 70,
      backgroundColor: "transparent",
      border: "1px solid white",
      ease: "power3.out",
    });
  } else {
    gsap.to(crsr, {
      duration: 0.5,
      width: 20,
      height: 20,
      backgroundColor: "rgb(149, 193, 30)",
      border: "none",
      ease: "power3.out",
    });
  }
});

// window.addEventListener("mouseout", (e) => {
//   gsap.to(crsr, {
//     duration: 0.3,
//     width: 60,
//     height: 60,
//     backgroundColor: "transparent",
//     border: "2px solid white",
//     ease: "power3.out",
//   });
// });
gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "100px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1,
    onEnter: () => {
      document.querySelector("#nav").classList.add("scrolled");
    },
    onLeaveBack: () => {
      document.querySelector("#nav").classList.remove("scrolled");
    },
  },
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -25%",
    end: "top -70%",
    scrub: 2,
  },
});

gsap.from("#about-us img, #about-us-in", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#about-us",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub: 3,
  },
});

gsap.from("#card-container", {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  // stagger: 0.1,
  scrollTrigger: {
    trigger: "#card-container",
    scroller: "body",
    start: "top 100%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 45%",
    scrub: 2,
  },
});

gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 55%",
    scrub: 2,
  },
});

let elem = document.querySelectorAll(".elem");
let lasttext = document.querySelector("#lasttext");

elem.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    lasttext.style.webkitTextStroke = "1px #aadd22";
  });

  elem.addEventListener("mouseleave", () => {
    lasttext.style.webkitTextStroke = "1px #fff";
  });
});

gsap.from("#page4 h1", {
  y: 50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 90%",
    scrub: 3,
  },
});
