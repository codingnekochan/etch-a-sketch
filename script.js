const sketchInterface = document.querySelector(".sketch_surface");
const gridSizeButton = document.querySelector(".ui_button--grid");
const eraserButton = document.querySelector(".ui_button--ersr");
const penColorButton = document.querySelector(".ui_button--colr");
const colorPicker = document.querySelector("#color-picker");
const defaultColor = document.querySelector(".ui_button--dflt");
const gridLineButton = document.querySelector(".ui_button--lines");
const clearButton = document.querySelector(".ui_button--clr");
const rainbowColorButton = document.querySelector(".ui_button--rnbw");

// Button Events Listener
gridSizeButton.addEventListener("click", handleButtonSize);
sketchInterface.addEventListener("dblclick", useDefaultColor);
penColorButton.addEventListener("click", changeColor);
defaultColor.addEventListener("click", useDefaultColor);
eraserButton.addEventListener("click", eraser);
clearButton.addEventListener("click", clearBoard);
gridLineButton.addEventListener("click", addGridLines);
rainbowColorButton.addEventListener("click", useRainbowColor);

function createGrid(userGridSize) {
  sketchInterface.innerHTML = " ";
  for (let i = 1; i < userGridSize ** 2; i++) {
    let gridSquares = document.createElement("div");
    gridSquares.classList.add("grid_squares");
    gridSquares.style.minWidth = `${450 / userGridSize}px`;
    gridSquares.style.minHeight = `${450 / userGridSize}px`;
    sketchInterface.appendChild(gridSquares);
  }
}
createGrid(16);

function handleButtonSize() {
  let userGridSize = getSize();
  createGrid(userGridSize);
  console.log("Grid size picked!");
}

function useDefaultColor() {
  let gridSquares = sketchInterface.querySelectorAll('.grid_squares')
  gridSquares.forEach((gridSquare)=>{
    gridSquare.addEventListener('mouseover',()=>{
      gridSquare.style.background = '#000000';
    })
  })
}
function clearBoard() {
  let gridSquares = sketchInterface.querySelectorAll('.grid_squares')
  gridSquares.forEach((gridSquare)=>{
      gridSquare.style.background = '#ffffff';
  })
}
function eraser() {
  let gridSquares = sketchInterface.querySelectorAll('.grid_squares')
  gridSquares.forEach((gridSquare)=>{
    gridSquare.addEventListener('mouseover',()=>{
      gridSquare.style.background = '#ffffff';
    })
  })
}
function changeColor() {
  let gridSquares = sketchInterface.querySelectorAll('.grid_squares')
  gridSquares.forEach((gridSquare)=>{
    gridSquare.addEventListener('mouseover',()=>{
      gridSquare.style.background = `${colorPicker.value}`
    })
  })
}
function addGridLines() {
  const gridSquares = sketchInterface.querySelectorAll(".grid_squares");
  gridSquares.forEach((box) => {
    box.classList.toggle("gridlines");
  });
  console.log("Grid line added!");
}
function useRainbowColor() {
  let gridSquares = sketchInterface.querySelectorAll('.grid_squares')
  gridSquares.forEach((gridSquare)=>{
    gridSquare.addEventListener('mouseover',()=>{
      gridSquare.style.background = generateColor();
    })
  })
}

function getSize() {
  let input = prompt("Enter grid Size", "");
  input = parseInt(input); // convert the inputed value to integer

  // Include a conditional incase a user inputs in a string
  if (isNaN(input) || input < 16 || input > 100) {
    alert("please enter a number between 16 and 100");
    return getSize(); // Automatically returns the function if this condition is not met
  }
  return input;
}
function generateColor() {
  let colorR, colorG, colorB;

  colorR = Math.floor(Math.random() * 256);
  colorG = Math.floor(Math.random() * 256);
  colorB = Math.floor(Math.random() * 256);
  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}
