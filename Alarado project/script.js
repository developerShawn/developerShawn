// JavaScript for Theme Toggle
document.querySelector(".theme").addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  // Optional: Add a small delay to allow the transition to be smoother
  setTimeout(() => {
    // This can handle any additional animations or effects
  }, 100);
});

document.querySelector(".btn-nav").addEventListener("click", function () {
  document.body.classList.toggle("nav-open");

  // Optional: Add a small delay to allow the transition to be smoother
  setTimeout(() => {
    // This can handle any additional animations or effects
  }, 100);
});
