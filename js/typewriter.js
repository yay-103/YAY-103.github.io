(function () {
  var starsContainer = document.getElementById("stars");
  if (starsContainer) {
    var starCount = 60;
    var types = ["small", "small", "small", "medium", "medium", "large", "sparkle"];
    for (var i = 0; i < starCount; i++) {
      var star = document.createElement("div");
      var type = types[Math.floor(Math.random() * types.length)];
      star.className = "star " + type;
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDuration = (2 + Math.random() * 4) + "s";
      star.style.animationDelay = (Math.random() * 3) + "s";
      starsContainer.appendChild(star);
    }
    var colors = ["rgba(168,219,192,0.12)","rgba(126,200,227,0.10)","rgba(200,230,201,0.10)","rgba(178,235,242,0.08)"];
    for (var j = 0; j < 8; j++) {
      var b = document.createElement("div");
      b.className = "bokeh";
      var size = 60 + Math.random() * 140;
      b.style.width = size + "px";
      b.style.height = size + "px";
      b.style.left = Math.random() * 100 + "%";
      b.style.top = Math.random() * 100 + "%";
      b.style.background = colors[Math.floor(Math.random() * colors.length)];
      b.style.animationDuration = (6 + Math.random() * 8) + "s";
      b.style.animationDelay = (Math.random() * 4) + "s";
      starsContainer.appendChild(b);
    }
  }
  var el = document.getElementById("typewriter-text");
  var btn = document.getElementById("enter-btn");
  if (!el || !btn) return;
  var chars = "你好，我是杨瑷源，一个对世界充满好奇的探险家。".split("");
  var idx = 0;
  function typeChar() {
    if (idx < chars.length) {
      el.textContent = el.textContent + chars[idx];
      idx++;
      setTimeout(typeChar, 80);
    } else {
      setTimeout(function () {
        btn.style.opacity = "1";
        btn.style.transform = "translateY(0)";
        btn.style.pointerEvents = "auto";
      }, 800);
    }
  }
  setTimeout(typeChar, 600);
  btn.onclick = function (e) {
    e.preventDefault();
    document.body.style.transition = "opacity 0.6s ease";
    document.body.style.opacity = "0";
    setTimeout(function () { window.location.href = "main.html"; }, 600);
  };
})();
