document.addEventListener("DOMContentLoaded", function () {
  // Get the buttons by their IDs
  const allProductsButton = document.getElementById("all-products");
  const availableNowButton = document.getElementById("available-now");

  // Ensure the buttons exist before proceeding
  if (allProductsButton && availableNowButton) {
    const coffeeItems = document.querySelectorAll(".coffee-item");

    // Function to show all products
    const showAllProducts = () => {
      coffeeItems.forEach((item) => {
        item.style.display = "block";
      });
    };

    // Function to show only available products (hide sold-out items)
    const showAvailableProducts = () => {
      coffeeItems.forEach((item) => {
        const soldOutSpan = item.querySelector(".sold-out");
        if (soldOutSpan) {
          item.style.display = "none"; // Hide sold out
        } else {
          item.style.display = "block"; // Show available
        }
      });
    };

    // Event listeners for the buttons
    allProductsButton.addEventListener("click", showAllProducts);
    availableNowButton.addEventListener("click", showAvailableProducts);
  } else {
    console.error("Buttons not found!");
  }
});
pkljni;
