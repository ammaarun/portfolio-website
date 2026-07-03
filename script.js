document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded!");
  const toggle = document.createElement("button");
  toggle.textContent = "Toggle Dark Mode";
  document.body.appendChild(toggle);
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    const email = form.querySelector("input[type='email']").value;
    if (!email.includes("@")) {
      e.preventDefault();
      alert("Please enter a valid email address.");
    }
  });
});