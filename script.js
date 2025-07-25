document.getElementById("toggleSidebar").addEventListener("click", function () {
    if (window.innerWidth <= 600) {
        document.getElementById("sidebar").classList.toggle("show");
    }
});

let track = document.getElementById("heroTrack");
const dots = document.querySelectorAll(".dot-hero");

let currentIndex = 0;
let isAnimating = false;
let intervalTime = 2500;

// ⬇️ Get width dynamically
function getSlideWidth() {
  const firstImage = track.querySelector("img");
  return firstImage ? firstImage.clientWidth + 12 : 961; // 12px gap
}

function updateDots(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

setInterval(() => {
  if (isAnimating) return;
  isAnimating = true;

  const slideWidth = getSlideWidth();

  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${slideWidth}px)`;

  setTimeout(() => {
    track.appendChild(track.children[0]);
    track.style.transition = "none";
    track.style.transform = "translateX(0)";
    currentIndex = (currentIndex + 1) % dots.length;
    updateDots(currentIndex);
    isAnimating = false;
  }, 600);
}, intervalTime);
