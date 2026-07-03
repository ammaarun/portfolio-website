document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded!");
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Dark Mode";
  document.body.appendChild(toggle);
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
