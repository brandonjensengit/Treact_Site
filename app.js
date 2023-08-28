document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".customer-review");
  const arrows = document.querySelectorAll(".arrow");
  let currentReviewIndex = 0;

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      reviews[currentReviewIndex].classList.remove("active");

      if (arrow.classList.contains("left-arrow")) {
        currentReviewIndex =
          (currentReviewIndex - 1 + reviews.length) % reviews.length;
      } else if (arrow.classList.contains("right-arrow")) {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
      }

      reviews[currentReviewIndex].classList.add("active");
    });
  });

  // Show the first review initially
  reviews[currentReviewIndex].classList.add("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".question");
    const answer = item.querySelector(".answer");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

// Scroll function

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const targetClassList = entry.target.classList;
      if (targetClassList.contains('slide-in-left') || targetClassList.contains('slide-in-right')) {
        entry.target.style.opacity = 1;  // Reset opacity
        entry.target.classList.add('animate');
      }
    }
  });
});

document.querySelectorAll('.animate-section').forEach((section) => {
  observer.observe(section);
});











