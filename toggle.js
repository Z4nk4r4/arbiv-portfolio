const toggle = document.getElementById("themeToggle");
const body = document.body;

toggle.addEventListener("click", () => {
  const current = body.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  body.setAttribute("data-theme", next);
  toggle.textContent = next === "light" ? "🌙" : "☀️";
});
