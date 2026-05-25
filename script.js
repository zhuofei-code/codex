/* ── Year ───────────────────────────────────────────────────── */

const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ── Fade-in on Scroll (Intersection Observer) ─────────────── */

const fadeElements = document.querySelectorAll(".fade-in");

if (fadeElements.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
  );

  fadeElements.forEach((el, i) => {
    /* stagger the animation slightly for successive elements */
    el.style.transitionDelay = `${i * 80}ms`;
    observer.observe(el);
  });
} else {
  /* fallback: show everything immediately */
  fadeElements.forEach((el) => el.classList.add("is-visible"));
}

/* ── Pixel Dog Animation ───────────────────────────────────── */

const pixelDog = document.getElementById("pixelDog");
const dogPlayground = document.querySelector(".dog-playground");

if (pixelDog && dogPlayground) {
  let x = 0;
  let direction = 1;
  let lastTime = 0;
  let gallopTimer = 0;

  const speed = 100; /* px per second */

  const animateDog = (time) => {
    if (!lastTime) {
      lastTime = time;
    }

    const dt = (time - lastTime) / 1000;
    lastTime = time;

    const dogWidth = pixelDog.getBoundingClientRect().width;
    const maxX = Math.max(0, dogPlayground.clientWidth - dogWidth);

    x += direction * speed * dt;

    if (x <= 0) {
      x = 0;
      direction = 1;
    } else if (x >= maxX) {
      x = maxX;
      direction = -1;
    }

    gallopTimer += dt;
    if (gallopTimer >= 0.18) {
      pixelDog.classList.toggle("is-gallop");
      gallopTimer = 0;
    }

    const facing = direction === 1 ? 1 : -1;
    pixelDog.style.transform = `translateX(${x}px) scaleX(${facing})`;

    requestAnimationFrame(animateDog);
  };

  requestAnimationFrame(animateDog);

  /* pause when tab is not visible to save resources */
  let paused = false;
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      paused = true;
    } else if (paused) {
      paused = false;
      lastTime = 0; /* reset so dt doesn't jump */
      requestAnimationFrame(animateDog);
    }
  });

  window.addEventListener("resize", () => {
    const dogWidth = pixelDog.getBoundingClientRect().width;
    const maxX = Math.max(0, dogPlayground.clientWidth - dogWidth);
    x = Math.min(x, maxX);
  });
}
