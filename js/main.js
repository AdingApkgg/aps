document.addEventListener("DOMContentLoaded", () => {
  quicklink.listen({ priority: true });
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#nav-menu");
  menuToggle.addEventListener("click", () =>
    navMenu.classList.toggle("active")
  );
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(anchor.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  const backToTop = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backToTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );
});
