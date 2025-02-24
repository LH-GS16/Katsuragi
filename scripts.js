document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var images = document.getElementsByClassName("project-img");
  var modalImg = document.getElementById("imgModal");

  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.style.backgroundImage.slice(5, -2);
      setTimeout(() => {
        modal.classList.add("show");
      }, 10);
    };
  }

  var closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  };

  modal.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
      setTimeout(() => {
        modal.style.display = "none";
      }, 500);
    }
  };

  function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }

  document.querySelectorAll(".nav-button").forEach(button => {
    button.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      smoothScroll(target);
    });
  });

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
  }

  function handleScroll() {
    var projects = document.getElementById("projects");
    if (isElementInViewport(projects)) {
      projects.classList.add("show");
      window.removeEventListener("scroll", handleScroll);
    }
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
