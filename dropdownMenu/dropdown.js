// Method for toggling dropdown menu
const setupDropdown = (buttonClass, divClass) => {
  let dropdownButton = document.querySelector(`.${buttonClass}`);
  let dropdown = document.querySelector(`.${divClass}`);

  dropdownButton.addEventListener("click", () => {
    console.log("tyoimii");
    if (dropdown.style.visibility === "hidden") {
      dropdown.style.visibility = "visible";
      dropdown.style.opacity = "1";
    } else {
      dropdown.style.visibility = "hidden";
      dropdown.style.opacity = "0";
    }
  });
};

setupDropdown("btnAbout", "dropdownItems");



