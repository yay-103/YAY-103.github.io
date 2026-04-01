// ===== Typewriter + Stars Generation =====
(function () {
  // --- Generate stars ---
  var starsContainer = document.getElementById("stars");
  var starCount = 60;
  var types = ["small", "small", "small", "medium", "medium", "large", "sparkle"];

  for (var i = 0; i < starCount; i++) {
    var star = document.createElement("div");
    var type = types[Math.floor(Math.random() * types.length)];
    star.className = "star " + type;
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.setProperty("--dur", (2 + Math.random() * 4) + "s");
    star.style.setProperty("--del", (Math.random() * 3) + "s");
    starsContainer.appendChild(star);
  }

  // --- Add soft bokeh circles ---
  var colors = [
    "rgba(168,219,192,0.12)",
    "rgba(126,200,227,0.10)",
    "rgba(200,230,201,0.10)",
    "rgba(178,235,242,0.08)"
  ];
  for (var j = 0; j < 8; j++) {
    var b = document.createElement("div");
    b.className = "bokeh";
    var size = 60 + Math.random() * 140;
    b.style.width = size + "px";
    b.style.height = size + "px";
    b.style.left = Math.random() * 100 + "%";
    b.style.top = Math.random() * 100 + "%";
    b.style.background = colors[Math.floor(Math.random() * colors.length)];
    b.style.setProperty("--dur", (6 + Math.random() * 8) + "s");
    b.style.setProperty("--del", (Math.random() * 4) + "s");
    b.style.setProperty("--dx", (Math.random() * 40 - 20) + "px");
    b.style.setProperty("--dy", (Math.random() * 40 - 20) + "px");
    starsContainer.appendChild(b);
  }

  // --- Typewriter ---
  var text = "\u4f60\u597d\uff0c\u6211\u662f\u6768\u7477\u6e90\uff0c\u4e00\u4e2a\u5bf9\u4e16\u754c\u5145\u6ee1\u597d\u5947\u7684\u63a2\u9669\u5bb6\u3002";
  var el = document.getElementById("typewriter-text");
  var btn = document.getElementById("enter-btn");
  var speed = 80;
  var idx = 0;

  function type() {
    if (idx < text.length) {
      el.textContent += text.charAt(idx);
      idx++;
      setTimeout(type, speed);
    } else {
      setTimeout(function () { btn.classList.add("visible"); }, 800);
    }
  }

  setTimeout(type, 600);

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(function () { window.location.href = btn.getAttribute("href"); }, 600);
  });
})();
