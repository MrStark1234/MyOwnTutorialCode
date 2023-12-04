var tl = gsap.timeline();

tl.from("#nav img, #nav-2 h3, #nav-3 h3,button ", {
  y: -6,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});
tl.from("#main h1", {
  y: 100,
  duration: 2,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#img-1, #img-4", {
  x: -400,
  duration: 2,
  opacity: 0,
  stagger: 0.2,
});
tl.from("span", {
  duration: 2,
  opacity: 0,
});

gsap.from("#img-2, #img-3", {
  x: 400,
  duration: 2,
  delay: 5,
  opacity: 0,
  stagger: 0.2,
});
