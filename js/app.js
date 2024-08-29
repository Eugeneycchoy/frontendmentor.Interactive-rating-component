// Retrieve elements with .rating-btn
let ratingBtnArr = document.querySelectorAll(".rating-btn");
// Selected rating
let selectedRating;

// Adding event listeners to rating buttons
for (let i = 0; i < ratingBtnArr.length; i++) {
  ratingBtnArr[i].addEventListener("click", () => {
    // Add .active class to clicked button
    ratingBtnArr[i].classList.add("rating-btn-selected");

    // Remove .active class from all other buttons
    for (let j = 0; j < ratingBtnArr.length; j++) {
      if (i !== j) {
        ratingBtnArr[j].classList.remove("rating-btn-selected");
      }
    }
    // Set selected rating
    selectedRating = i + 1;
    console.log(selectedRating);
  });
}
