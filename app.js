const btn = document.querySelector(".msg-btn");

  btn.addEventListener("click", function() {
    document.getElementById("contact-me").scrollIntoView({ behavior: "smooth" });
  });