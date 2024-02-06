var tl = gsap.timeline();

tl.from("#nav img, #nav-2 h3, #nav-3 h3,button ", {
  y: -16,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#page-1 h1", {
  y: 100,
  duration: 2,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#img-1, #img-4, #img-3, #img-2", {
  scale: 0,
  duration: 2,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#page-1 span", {
  duration: 2,
  opacity: 0,
});

tl.from("h5", {
  opacity: 0,
  scale: 0,
});
tl.to("h5", {
  y: 20,
  repeat: -1,
  yoyo: true,
});

// gsap.from(".page-2 p", {
//   opacity: 0,
//   scale: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".page-2 p",
//     scroller: "body",
//     markers: true,
//     start: "bottom 90%",
//     end: "top 20%",
//     scrub: true,
//   },
// });
// gsap.from(".page-3 p", {
//   opacity: 0,
//   scale: 0,
//   duration: 2,
//   scrollTrigger: {
//     trigger: ".page-3 p",
//     scroller: "body",
//     markers: true,
//     // start: "bottom 90%",
//     // end: "top 20%",
//     scrub: true,
//   },
// });
