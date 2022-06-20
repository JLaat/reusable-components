// Method for toggling dropdown menu
const setupDropdown = (buttonClass, divClass) => {
    let dropdownButton = document.querySelector(`.${buttonClass}`);
    let dropdown = document.querySelector(`.${divClass}`);
  
    dropdownButton.addEventListener("click", () => {
      if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
      } else {
        dropdown.style.display = "none";
      }
    });
  };
  
  setupDropdown("btnDashboard", "dropdownMenu");
  setupDropdown("btnReports", "dropdownReports");