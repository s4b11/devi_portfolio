if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);

  gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
    document.querySelectorAll("[data-reveal]").forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 20,
        duration: 0.48,
        ease: "power2.out",
        immediateRender: element.getBoundingClientRect().top >= window.innerHeight,
        scrollTrigger: {
          trigger: element,
          start: "top 94%",
          toggleActions: "play none none reverse"
        }
      });
    });
  });
}
