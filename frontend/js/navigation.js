export function initNavigation() {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  menuButton?.addEventListener("click", () => nav?.classList.toggle("open"));

  const current = window.location.pathname.replace(/\/$/, "") || "/index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = new URL(link.href).pathname.replace(/\/$/, "") || "/index.html";
    if (href === current) link.classList.add("active");
  });

  document.querySelector(".theme-toggle")?.addEventListener("click", () => {
    document.documentElement.classList.toggle("light-theme");
  });
}