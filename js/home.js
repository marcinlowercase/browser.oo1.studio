/* frame animation loop */
document.addEventListener("DOMContentLoaded", () => {
  const frames = document.querySelectorAll("#logo img");

  if (frames.length > 0) {
    let current = 0;
    const total = frames.length;
    const rate = 100;

    setInterval(() => {
      frames[current].style.opacity = "0";
      current = (current + 1) % total;
      frames[current].style.opacity = "1";
    }, rate);
  }
});
