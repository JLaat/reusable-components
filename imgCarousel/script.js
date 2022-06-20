let imgContainer = document.querySelector(".imgContainer");

const slideLeft = () => {
    let value = getTranslateX() - 20;
    imgContainer.style.transform = `translateX(${value}%)`;
    console.log(`translateX(${value})`);
}
const slideRight = () => {
    let value = getTranslateX() + 20;
    imgContainer.style.transform = `translateX(${value}%)`;
    console.log(`translateX(${value})`);
}
// Returns translateX() value as percentage
const getTranslateX = ()  => {
    const style = window.getComputedStyle(imgContainer);
    const width = window.getComputedStyle(imgContainer).width;
    const matrix = new WebKitCSSMatrix(style.transform);
    return (matrix.m41/parseInt(width)*100);
  }