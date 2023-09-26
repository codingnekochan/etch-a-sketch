const sketchInterface = document.querySelector('.sketch_surface');
const gridSizeButton = document.querySelector('.ui_button--grid');
// creating the grid according to user input
gridSizeButton.addEventListener('click', ()=>{
       userGridSize = getSize();
       sketchInterface.innerHTML =''
       createGrid(userGridSize);
})
// 
const eraserButton = document.querySelector('.ui_button--ersr')
const penColorButton = document.querySelector('.ui_button--colr');
const colorPicker = document.querySelector('#color-picker');
const defaultColor = document.querySelector('.ui_button--dflt');
const gridLineButton = document.querySelector('.ui_button--lines');
const clearButton = document.querySelector('.ui_button--clr');
const rainbowColorButton = document.querySelector('.ui_button--rnbw')
function createGrid(userGridSize){
    for (let i = 1; i<= (userGridSize**2); i++){
        const gridSquares = document.createElement('div');
        sketchInterface.appendChild(gridSquares);
        gridSquares.style.minWidth = `${450/ userGridSize}px`
        gridSquares.style.minHeight= `${450/ userGridSize}px`
        gridSquares.classList.add('grid_squares');
        // button functions
        function useDefaultColor(){ 
            gridSquares.style.background='#000000'
        }
        function clearBoard(){
            gridSquares.style.background='#ffffff'
        } 
        function draw(){
            gridSquares.addEventListener('mouseover',()=>{
                useDefaultColor();
            })
        }
        function eraser(){
            gridSquares.addEventListener('mouseover',()=>{
                clearBoard();
            })
        }
        function changeColor(){
            gridSquares.addEventListener('mouseover',()=>{
                gridSquares.style.background = `${colorPicker.value}`
            })
        } 
        function addGridLines(){
            gridSquares.classList.toggle('gridlines')
        }
        function useRainbowColor(){
            gridSquares.addEventListener('mouseover',()=>{
                gridSquares.style.background = generateColor();
            })
        }
        // button events   
        sketchInterface.addEventListener('dblclick',draw);
        penColorButton.addEventListener('click', changeColor);
        defaultColor.addEventListener('click',draw)
        eraserButton.addEventListener('click', eraser);
        clearButton.addEventListener('click', clearBoard);
        gridLineButton.addEventListener('click', addGridLines);
        rainbowColorButton.addEventListener('click', useRainbowColor);
    }
}
// default grid dimension
createGrid(16)
// get user input
function getSize(){
    let input = prompt ("Enter grid Size", '');
    if (input < 16 || input > 100){
        alert ("please enter a number between 16 and 100");
        input = prompt("Enter grid Size", '');
        return input;
    }
    else if (input === ""){
        alert("please enter a number");
       input = prompt("Enter grid size", '');
       return input;
    }
    else{
        return input;
    }
}
// get random color
function generateColor(){
    let colorR = Math.floor(Math.random()* 256);
    let colorG = Math.floor(Math.random()* 256);
    let colorB = Math.floor(Math.random()* 256);
    let rainbowColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    return rainbowColor;
 
}