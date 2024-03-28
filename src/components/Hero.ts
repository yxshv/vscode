console.log("hes");

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.onload = () => {
  gsap.to("[data-heading]", {
    opacity: 1,
    duration: 1,
    delay: 0.1,
  });

  const heading = gsap.timeline();

  gsap.to("[data-desc]", {
    opacity: 1,
    duration: 1,
    delay: 0.2,
  });

  gsap.to("[data-btns]", {
    opacity: 1,
    duration: 1,
    delay: 0.3,
  });

  gsap.to("[data-img]", {
    opacity: 1,
    scale: 1,
    translateY: 0,
    duration: 1,
    delay: 0.4,
  });

  gsap.fromTo(
    "[data-heading]",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: -20,
      scrollTrigger: {
        trigger: "body",
        start: "top 0%",
        endTrigger: "body",
        end: "top -10%",
        scrub: true,
      },
    },
  );

  gsap.fromTo(
    "[data-desc]",
    {
      opacity: 1,
      y: 0,
    },
    {
      opacity: 0,
      y: -40,
      scrollTrigger: {
        trigger: "body",
        start: "top 0%",
        end: "top -20%",
        scrub: true,
      },
    },
  );

  gsap.fromTo(
    "[data-btns]",
    {
      opacity: 2,
      y: 0,
    },
    {
      opacity: 0,
      y: -60,
      scrollTrigger: {
        trigger: "body",
        start: "top 0%",
        // endTrigger: "[data-btns]",
        end: "top -30%",
        scrub: true,
      },
    },
  );
  gsap.fromTo(
    "[data-img]>img",
    {
      y: 0,
    },
    {
      y: -100,
      scale: 1.2,
      scrollTrigger: {
        trigger: "body",
        start: "top 0%",
        // endTrigger: "[data-btns]",
        end: "top -40%",
        scrub: true,
      },
    },
  );
};
