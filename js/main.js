// ===== Main JS =====
(function () {
  "use strict";

  // =========================================================
  // 1. Stars generation for hero background
  // =========================================================
  var starsBg = document.getElementById("stars-bg");

  if (starsBg) {
    var starTypes = ["small", "medium", "large", "sparkle"];
    var i, star, type, dur, delay, x, y;

    for (i = 0; i < 40; i++) {
      star = document.createElement("span");
      type = starTypes[Math.floor(Math.random() * starTypes.length)];
      star.className = "star " + type;
      x = Math.random() * 100;
      y = Math.random() * 100;
      dur = (Math.random() * 3 + 2).toFixed(2);
      delay = (Math.random() * 4).toFixed(2);
      star.style.left = x + "%";
      star.style.top = y + "%";
      star.style.animationDuration = dur + "s";
      star.style.animationDelay = delay + "s";
      starsBg.appendChild(star);
    }

    // Bokeh circles
    var bokeh, bSize, bX, bY, bDur, bDelay;
    for (i = 0; i < 6; i++) {
      bokeh = document.createElement("span");
      bokeh.className = "bokeh-circle";
      bSize = Math.random() * 120 + 40;
      bX = Math.random() * 100;
      bY = Math.random() * 100;
      bDur = (Math.random() * 6 + 4).toFixed(2);
      bDelay = (Math.random() * 5).toFixed(2);
      bokeh.style.width = bSize + "px";
      bokeh.style.height = bSize + "px";
      bokeh.style.left = bX + "%";
      bokeh.style.top = bY + "%";
      bokeh.style.animationDuration = bDur + "s";
      bokeh.style.animationDelay = bDelay + "s";
      starsBg.appendChild(bokeh);
    }
  }

  // =========================================================
  // 2. Navbar scroll effect
  // =========================================================
  var navbar = document.getElementById("navbar");
  var backToTop = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // 3. Back-to-top button visibility
    if (backToTop) {
      if (window.scrollY > 500) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    }

    // 5. Active nav link on scroll
    updateActiveNav();
  });

  // =========================================================
  // 3. Back-to-top button click
  // =========================================================
  if (backToTop) {
    backToTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // =========================================================
  // 4. Mobile nav toggle
  // =========================================================
  var navToggle = document.getElementById("nav-toggle");
  var navLinks = document.getElementById("nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }

  // Close menu when clicking any nav link
  var allNavLinks = document.querySelectorAll(".nav-link");
  allNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      if (navLinks) {
        navLinks.classList.remove("open");
      }
    });
  });

  // =========================================================
  // 5. Active nav link on scroll
  // =========================================================
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

  // =========================================================
  // 6. Scroll reveal (IntersectionObserver)
  // =========================================================
  var revealElements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
  );

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach(function (el) {
    revealObserver.observe(el);
  });

  // =========================================================
  // 7. Language toggle
  // =========================================================
  var currentLang = "zh";
  var langBtn = document.getElementById("lang-btn");

  function applyLanguage(lang) {
    currentLang = lang;
    var translatables = document.querySelectorAll("[data-zh][data-en]");
    translatables.forEach(function (el) {
      el.textContent = el.getAttribute("data-" + lang);
    });
    if (langBtn) {
      langBtn.textContent = lang === "zh" ? "English" : "\u4e2d\u6587";
    }
    localStorage.setItem("lang", lang);
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      var newLang = currentLang === "zh" ? "en" : "zh";
      applyLanguage(newLang);
    });
  }

  // On page load, check stored preference
  var storedLang = localStorage.getItem("lang");
  if (storedLang === "en") {
    applyLanguage("en");
  }

  // =========================================================
  // 8. Project detail modal
  // =========================================================
  var projectData = {
    byteintern: {
      title: {
        zh: "ByteIntern Hub - \u5b9e\u4e60\u5c97\u4f4d\u667a\u80fd\u805a\u5408\u7cfb\u7edf",
        en: "ByteIntern Hub - Smart Internship Aggregation"
      },
      icon: "\ud83e\udd16",
      details: {
        zh: [
          "\u6253\u901a\u98de\u4e66\u591a\u7ef4\u8868\u683cAPI\uff0c\u8dd1\u901a\u2018\u975e\u7ed3\u6784\u5316\u91c7\u96c6\u2192\u5927\u6a21\u578b\u62bd\u53d6\u2192\u7ed3\u6784\u5316\u5165\u5e93\u2019\u7aef\u5230\u7aef\u81ea\u52a8\u5316\u94fe\u8def",
          "\u8bbe\u8ba1\u2018\u5173\u952e\u8bcd\u6b63\u5219+Thread\u4e0a\u4e0b\u6587\u7a7f\u900f\u2019\u53cc\u91cd\u524d\u7f6e\u8fc7\u6ee4\u673a\u5236\uff0c\u7cbe\u51c6\u62e6\u622a\u5197\u4f59\u566a\u97f3",
          "Few-shot\u6837\u4f8b+JSON\u8f93\u51fa\u89c4\u7ea6\u591a\u8f6ePE\u8c03\u4f18\uff0c\u6709\u6548\u6291\u5236\u6a21\u578b\u5e7b\u89c9",
          "\u8de8\u7fa4\u4ea4\u53c9\u54c8\u5e0c\u67e5\u91cd+Upsert\u52a8\u6001\u66f4\u65b0\uff0c\u4fdd\u969c\u6570\u636e\u552f\u4e00\u6027\u4e0e\u51c6\u786e\u7387",
          "\u5efa\u7acb\u6bcf\u65e5\u81ea\u52a8\u5de1\u68c0+Badcase\u4eba\u5de5\u62bd\u68c0\u7684\u8bc4\u6d4bSOP"
        ],
        en: [
          "Built end-to-end pipeline: unstructured collection \u2192 LLM extraction \u2192 structured storage via Feishu API",
          "Designed dual-filter mechanism (keyword regex + thread context) for noise reduction",
          "Multi-round prompt engineering with few-shot examples and JSON output constraints",
          "Cross-group hash dedup + upsert strategy for data integrity",
          "Established daily automated inspection + manual bad-case review SOP"
        ]
      }
    },
    seeding: {
      title: {
        zh: "\u4e1c\u5357\u4e9a\u79cd\u8349\u5e7f\u544a\u8ffd\u8e2a\u4f53\u7cfb",
        en: "SEA Seeding Ad Tracking System"
      },
      icon: "\ud83d\udcca",
      details: {
        zh: [
          "\u642d\u5efa\u79cd\u8349\u5e7f\u544a\u6d88\u8017\u6838\u5fc3\u8ffd\u8e2a\u4f53\u7cfb\uff0c\u4f9d\u6258MMM\u770b\u677f\u7cbe\u7ec6\u5316\u76d1\u63a7",
          "\u901a\u8fc7\u5f02\u52a8\u5f52\u56e0\u7cbe\u51c6\u5b9a\u4f4d\u6d41\u91cf\u8f6c\u5316\u74f6\u9888",
          "\u6df1\u5ea6\u4e0b\u94bbTTMS\u8d26\u53f7\u5386\u53f2\u8868\u73b0\uff0c\u79d1\u5b66\u62c6\u89e3\u5b63\u5ea6\u76ee\u6807",
          "\u4e3a\u2018\u4ee3\u7406\u5546\u6807\u6746\u6fc0\u52b1\u8ba1\u5212\u2019\u63d0\u4f9b\u6570\u636e\u7b56\u7565\u5e95\u5ea7",
          "\u9a71\u52a8\u79cd\u8349\u5e7f\u544a\u6d88\u8017\u6708\u589e\u957f15%"
        ],
        en: [
          "Built core seeding ad tracking system with MMM dashboard monitoring",
          "Precise anomaly attribution to identify conversion bottlenecks",
          "Deep-dive TTMS account analysis for quarterly goal breakdown",
          "Provided data strategy foundation for agent incentive program",
          "Drove 15% monthly growth in seeding ad spend"
        ]
      }
    },
    riskmodel: {
      title: {
        zh: "\u8d37\u6b3e\u98ce\u63a7\u9884\u8b66\u6a21\u578b",
        en: "Loan Risk Warning Model"
      },
      icon: "\ud83d\udee1",
      details: {
        zh: [
          "\u9488\u5bf910\u79cd\u4f01\u4e1a\u655e\u53e3\u5b8c\u6210\u7cbe\u7ec6\u5316\u5206\u680f\u8bbe\u8ba1\uff0c\u8d2f\u7a7f\u8d37\u524d/\u8d37\u4e2d/\u8d37\u540e\u5168\u94fe\u8def",
          "\u72ec\u7acb\u8bbe\u5b9a\u591a\u7ef4\u5206\u7ea7\u9884\u8b66\u6307\u6807\u4e0e\u786c\u6027\u62e6\u622a\u9608\u503c",
          "\u64b0\u5199LGD\u8ba1\u91cf\u7cfb\u7edf\u6838\u5fc3\u7b56\u7565PRD\uff0c\u4fdd\u969c\u7cfb\u7edf\u6309\u65f6\u4ea4\u4ed8\u4e0a\u7ebf",
          "\u6784\u5efa80+\u5bf9\u516c\u53ca100+\u96f6\u552e\u753b\u50cf\u6307\u6807",
          "\u4e3a\u98ce\u9669\u8bc4\u4f30\u6a21\u578b\u63d0\u4f9b\u9ad8\u7cbe\u51c6\u5ea6\u7ed3\u6784\u5316\u6570\u636e\u7279\u5f81\u8f93\u5165\u96c6"
        ],
        en: [
          "Designed granular segmentation for 10 exposure types across full loan lifecycle",
          "Set multi-dimensional tiered warning indicators and hard rejection thresholds",
          "Authored core LGD system PRD ensuring on-time delivery",
          "Built 80+ corporate and 100+ retail profile indicators",
          "Provided high-precision structured feature input for risk assessment models"
        ]
      }
    }
  };

  var modalOverlay = document.getElementById("modal-overlay");
  var modalClose = document.getElementById("modal-close");
  var modalIcon = document.getElementById("modal-icon");
  var modalTitle = document.getElementById("modal-title");
  var modalBody = document.getElementById("modal-body");

  var detailBtns = document.querySelectorAll(".project-detail-btn");
  detailBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var card = btn.closest(".project-card");
      if (!card) return;
      var projectKey = card.getAttribute("data-project");
      var data = projectData[projectKey];
      if (!data) return;

      if (modalIcon) modalIcon.textContent = data.icon;
      if (modalTitle) modalTitle.textContent = data.title[currentLang];

      if (modalBody) {
        modalBody.innerHTML = "";
        var ul = document.createElement("ul");
        var details = data.details[currentLang];
        details.forEach(function (item) {
          var li = document.createElement("li");
          li.textContent = item;
          ul.appendChild(li);
        });
        modalBody.appendChild(ul);
      }

      if (modalOverlay) modalOverlay.classList.add("active");
    });
  });

  function closeModal() {
    if (modalOverlay) modalOverlay.classList.remove("active");
  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", function (e) {
      if (!e.target.closest(".modal-content")) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // =========================================================
  // 9. Music player
  // =========================================================
  var musicBtn = document.getElementById("music-btn");
  var bgm = document.getElementById("bgm");
  var musicPlayer = document.getElementById("music-player");
  var isPlaying = false;

  if (musicBtn && bgm) {
    musicBtn.addEventListener("click", function () {
      if (isPlaying) {
        bgm.pause();
        isPlaying = false;
        musicBtn.classList.remove("playing");
        var iconPause = musicBtn.querySelector("i");
        if (iconPause) {
          iconPause.className = "fas fa-music";
        }
      } else {
        var playPromise = bgm.play();
        if (playPromise !== undefined) {
          playPromise.then(function () {
            isPlaying = true;
            musicBtn.classList.add("playing");
            var iconPlay = musicBtn.querySelector("i");
            if (iconPlay) {
              iconPlay.className = "fas fa-pause";
            }
          }).catch(function () {
            // Audio file not found or playback not allowed; ignore gracefully
          });
        }
      }
    });

    bgm.addEventListener("error", function () {
      // Audio source error; ignore gracefully
    });
  }
})();
