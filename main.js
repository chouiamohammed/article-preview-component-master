const shareButton = document.querySelector(".share-button");
const shareOption = document.querySelector(".share-option");

// Toggle the share option when clicking the button
shareButton.addEventListener("click", function (event) {
  shareOption.classList.toggle("active");
  event.stopPropagation(); // Prevent click from propagating to the document
});

// Hide the share option when clicking outside
document.addEventListener("click", function () {
  if (!shareOption.classList.contains("active")) {
    shareOption.classList.add("active");
  }
});
