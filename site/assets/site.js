const header = document.querySelector(".site-header");

function updateHeader() {
  const compact = header.classList.contains("is-compact");
  header.classList.toggle("is-compact", window.scrollY > (compact ? 32 : 96));
}

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("pageshow", updateHeader);
updateHeader();

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
