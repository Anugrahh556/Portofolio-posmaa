// SCROLL REVEAL
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveal.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;

    if (top < height - 100) {
      el.classList.add("active");
    }
  });
});

// NAVBAR EFFECT SAAT SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(0,0,0,0.4)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "rgba(255,255,255,0.05)";
  }
});
