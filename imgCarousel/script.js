let imgContainer = document.querySelector(".imgContainer");
let images = document.querySelectorAll("img");
let currentImage = 3;

const slideRight = () => {
  if (currentImage < images.length - 2) {
    let value = getTranslateX() - 20;
    imgContainer.style.transform = `translateX(${value}%)`;
    currentImage++;
  } else {
    return;
  }
};
const slideLeft = () => {
  if (currentImage > 3) {
    let value = getTranslateX() + 20;
    imgContainer.style.transform = `translateX(${value}%)`;
    currentImage--;
  } else {
    return;
  }
};
// Returns translateX() value as percentage
const getTranslateX = () => {
  const style = window.getComputedStyle(imgContainer);
  const width = window.getComputedStyle(imgContainer).width;
  const matrix = new WebKitCSSMatrix(style.transform);
  return (matrix.m41 / parseInt(width)) * 100;
};

// For populating progression bar
const initializeProgressbar = () => {
  let progressBar = document.querySelector(".progressBar");
  let howManyDivs = images.length - 4;

  // Create divs for progressBar based on how many images exists
  for (let i = 0; i < howManyDivs; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "progressItem";
    newDiv.attributes.index = i;

    newDiv.addEventListener("click", (event) => {
      let element = event.target;
      onProgressbarClick(event);
    });
    progressBar.append(newDiv);
  }
};

// For navigating using progressbar
const onProgressbarClick = (element) => {
  currentImage = element.attributes.index;
  element.style.backgroundColor = "grey";
};
