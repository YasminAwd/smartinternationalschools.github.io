const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu
menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after clicking a navigation link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Set the current year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Highlight the current section in the navbar
const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a:not(.nav-contact)");

window.addEventListener("scroll", () => {
  let currentSection = "home";
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 130) {
      currentSection = section.id;
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });
});


(base / "index.html").write_text(html, encoding="utf-8")
(base / "style.css").write_text(css, encoding="utf-8")
(base / "script.js").write_text(js, encoding="utf-8")


