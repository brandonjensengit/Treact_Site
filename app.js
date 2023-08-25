// document.addEventListener("DOMContentLoaded", function () {
//     const reviews = document.querySelectorAll(".customer-review");
//     const arrows = document.querySelectorAll(".arrow");
//     let currentReviewIndex = 0;
  
//     arrows.forEach((arrow) => {
//       arrow.addEventListener("click", () => {
//         reviews[currentReviewIndex].style.display = "none";
  
//         if (arrow.classList.contains("left-arrow")) {
//           currentReviewIndex =
//             (currentReviewIndex - 1 + reviews.length) % reviews.length;
//         } else if (arrow.classList.contains("right-arrow")) {
//           currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
//         }
  
//         reviews[currentReviewIndex].style.display = "block";
//       });
//     });
  
//     // Show the first review initially
//     reviews[currentReviewIndex].style.display = "block";
//   });

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
  