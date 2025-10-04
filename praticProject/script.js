const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  // Toggle the dark-mode class on body
  body.classList.toggle("dark-mode");

  // Change button text dynamically
  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️ Enable Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Enable Dark Mode";
  }
});
