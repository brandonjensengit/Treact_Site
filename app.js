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
