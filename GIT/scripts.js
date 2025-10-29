(function () {
  const root = document.documentElement;
  const btn = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  // carregar preferência
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-bs-theme", saved);
  }

  updateIcon();

  btn.addEventListener("click", () => {
    const current = root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-bs-theme", current);
    localStorage.setItem("theme", current);
    updateIcon();
  });

  function updateIcon() {
    const mode = root.getAttribute("data-bs-theme");
    if (mode === "dark") {
      icon.className = "bi bi-moon-stars";
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-outline-light");
    } else {
      icon.className = "bi bi-brightness-high";
      btn.classList.remove("btn-outline-light");
      btn.classList.add("btn-outline-dark");
    }
  }
})();
