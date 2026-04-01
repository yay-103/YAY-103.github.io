// ===== Main JS =====
(function () {
  // --- Navbar scroll effect ---
  var navbar = document.getElementById("navbar");
  var backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    // Back-to-top button
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // --- Mobile nav toggle ---
  var toggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", function () {
    navLinks.classList.toggle("open");
  });

  // Close menu on link click (mobile)
  var links = document.querySelectorAll(".nav-link");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
    });
  });

  // --- Active nav link on scroll ---
  var sections = document.querySelectorAll("section[id]");

  function updateActiveNav() {
    var scrollPos = window.scrollY + 120;
    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute("id");
      var navItem = document.querySelector('.nav-link[href="#' + id + '"]');
      if (navItem) {
        if (scrollPos >= top && scrollPos < top + height) {
          navItem.classList.add("active");
        } else {
          navItem.classList.remove("active");
        }
      }
    });
  }

  window.addEventListener("scroll", updateActiveNav);

  // --- Scroll reveal ---
  var revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach(function (el) {
    observer.observe(el);
  });
})();
