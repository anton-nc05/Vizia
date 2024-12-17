// Select the search input and all buttons in the grid
const searchInput = document.getElementById("search");
const buttons = document.querySelectorAll(".grid button");

// Add click event listeners to each button
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Append the button's text content to the search input
    searchInput.value += button.textContent.trim();
  });
});
