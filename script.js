const sketchInterface = document.querySelector('.sketch_surface');
const gridSizeButton = document.querySelector('.ui_button--grid')
gridSizeButton.addEventListener('click', ()=>{
    sketchInterface.innerHTML =''
       userGridSize = getSize();
       createGrid(userGridSize);
})
function createGrid(userGridSize){
    for (let i = 1; i<= (userGridSize**2); i++){
        const gridSquares = document.createElement('div');
        sketchInterface.appendChild(gridSquares);
        gridSquares.style.minWidth = `${450/ userGridSize}px`
        gridSquares.style.minHeight= `${450/ userGridSize}px`
        gridSquares.classList.add('grid_squares');
    }
    
}

// default grid dimension
createGrid(11)

function getSize(){
    let input = prompt ("Enter grid Size", '');
    if (input < 0 || input > 100){
        alert ("please enter a number between 1 and 100")
    }
    else if (input === ""){
        alert("please enter a number")
    }
    else{
        return input;
    }
}

function setDefaultColor(){
    gridSquares.style.backgroundColor = '#000000'
}

