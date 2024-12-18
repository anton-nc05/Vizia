const searchInput = document.getElementById("search");
const buttons = document.querySelectorAll(".grid button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Append to search input
    searchInput.value += button.textContent.trim();
  });
});
