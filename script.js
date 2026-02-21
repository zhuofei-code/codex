const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const pixelDog = document.getElementById('pixelDog');
const dogPlayground = document.querySelector('.dog-playground');

if (pixelDog && dogPlayground) {
  let x = 0;
  let direction = 1;
  let lastTime = 0;
  let gallopTimer = 0;

  const speed = 110; // px per second

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
    if (gallopTimer >= 0.16) {
      pixelDog.classList.toggle('is-gallop');
      gallopTimer = 0;
    }

    const facing = direction === 1 ? 1 : -1;
    pixelDog.style.transform = `translateX(${x}px) scaleX(${facing})`;

    requestAnimationFrame(animateDog);
  };

  requestAnimationFrame(animateDog);

  window.addEventListener('resize', () => {
    const dogWidth = pixelDog.getBoundingClientRect().width;
    const maxX = Math.max(0, dogPlayground.clientWidth - dogWidth);
    x = Math.min(x, maxX);
  });
}
