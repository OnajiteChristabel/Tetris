document.addEventListener("DOMContentLoaded", function() {
    // Find the "Start Game" button
    const startButton = document.getElementById("start-button");
  
    // Add a click event listener to the button
    startButton.addEventListener("click", function() {
      // Navigate to the game page when the button is clicked
      window.location.href = "game.html";
    });
  });
  