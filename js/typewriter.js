// Typewriter effect
(function () {
  const text = "你好，我是杨瑷源，一个对世界充满好奇的探险家。";
  const el = document.getElementById("typewriter-text");
  const btn = document.getElementById("enter-btn");
  const speed = 80; // ms per char
  let i = 0;

  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      // Typing done — show enter button after a short pause
      setTimeout(function () {
        btn.classList.add("visible");
      }, 800);
    }
  }

  // Start after a brief delay
  setTimeout(type, 600);

  // Page transition on click
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(function () {
      window.location.href = btn.getAttribute("href");
    }, 600);
  });
})();
