const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function scrollLocoTrig() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

scrollLocoTrig()

const crsr = document.querySelector(".cursor")
const video = document.querySelector("video")

document.addEventListener("mousemove", (dets)=>{
  crsr.style.display = "block"
  crsr.style.left = dets.x + 5 + "px"
  crsr.style.top = dets.y + 5 + "px"
})

document.addEventListener("mouseleave", (dets) => {
  crsr.style.display = "none"
});

video.addEventListener("mouseenter",()=>{
  crsr.style.width = 150 + "px"
  crsr.style.height = 150 + "px"
  crsr.style.backgroundColor = "#000"
  crsr.style.mixBlendMode = "normal"
  document.querySelector(".h4").style.opacity = 1;
  document.querySelector(".h4").style.fontSize = 50 + "px";
})

video.addEventListener("mouseleave", () => {
  crsr.style.width = 20 + "px";
  crsr.style.height = 20 + "px";
  crsr.style.backgroundColor = "#edbfff";
  crsr.style.mixBlendMode = "difference";
  document.querySelector(".h4").style.opacity = 0;
  document.querySelector(".h4").style.fontSize = 0;
  document.querySelector(".h4").style.fontSize = 0 + "px";
});

const works = document.querySelectorAll(".page3-left")

works.forEach((elem)=>{
  elem.addEventListener("mouseenter", () => {
    crsr.style.width = 150 + "px";
    crsr.style.height = 150 + "px";
    crsr.style.backgroundColor = "#000";
    crsr.style.mixBlendMode = "normal";
    document.querySelector(".h4").style.opacity = 1;
    document.querySelector(".h4").style.fontSize = 50 + "px";
  });

  elem.addEventListener("mouseleave", () => {
    crsr.style.width = 20 + "px";
    crsr.style.height = 20 + "px";
    crsr.style.backgroundColor = "#edbfff";
    crsr.style.mixBlendMode = "difference";
    document.querySelector(".h4").style.opacity = 0;
    document.querySelector(".h4").style.fontSize = 0 + "px";
  });
})

const works2 = document.querySelectorAll(".page3-right");

works2.forEach((elem) => {
  elem.addEventListener("mouseenter", () => {
    crsr.style.width = 150 + "px";
    crsr.style.height = 150 + "px";
    crsr.style.backgroundColor = "#000";
    crsr.style.mixBlendMode = "normal";
    document.querySelector(".h4").style.opacity = 1;
    document.querySelector(".h4").style.fontSize = 50 + "px";
  });

  elem.addEventListener("mouseleave", () => {
    crsr.style.width = 20 + "px";
    crsr.style.height = 20 + "px";
    crsr.style.backgroundColor = "#edbfff";
    crsr.style.mixBlendMode = "difference";
    document.querySelector(".h4").style.opacity = 0;
    document.querySelector(".h4").style.fontSize = 0 + "px";
  });
});

gsap.from("#page1 h1,#page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  delay: 0.3,
  duration: 0.7,
});

gsap.from("#page2 h1, .page2-left, .page2-right", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: "#page3",
    scroller: "#main",
    start: "top bottom",
    end: "bottom top"
  }
})

var tl = gsap.timeline({
    scrollTrigger: {
        //markers: true,
        trigger:"#page1 h1",
        scroller:"#main",
        start: "top 10%",
        end: "top -10%",
        scrub: 3,
    }
})


tl.to("#page1 h1",{
    x:-100
}, "anime")

tl.to("#page1 h2",{
    x: 100
}, "anime")

tl.to("#page1 video",{
    width: "90%"
}, "anime")

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top -90%",
    end: "top -80%",
    scrub: 3,
  },
});

tl2.to("#main",{
    backgroundColor: "#fff"
})

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top -550%",
    end: "top -570%",
    scrub: 3,
  },
});

tl3.to("#main", {
  backgroundColor: "#0f0d0d",
});

var elem = document.querySelectorAll(".box");

elem.forEach(function (val) {
  console.log(val.childNodes[3]);
  val.addEventListener("mouseenter", () => {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", () => {
    val.childNodes[3].style.opacity = 0;
  });
  val.addEventListener("mousemove", (axis) => {
    val.childNodes[3].style.left = axis.x + "px";
  });
});