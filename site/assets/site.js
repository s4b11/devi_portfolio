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

    document.querySelectorAll(".project-art").forEach((preview) => {
      const bars = preview.querySelectorAll("[data-preview-bar]");
      const steps = preview.querySelectorAll("[data-preview-step]");
      const animation = gsap.timeline({
        scrollTrigger: { trigger: preview, start: "top 85%", once: true }
      });
      animation.from(steps.length ? steps : bars, {
        ...(steps.length ? { opacity: 0, y: 8 } : { scaleY: 0 }),
        duration: 0.42,
        stagger: 0.09,
        ease: "power2.out",
        immediateRender: false
      });
    });
  });
}
