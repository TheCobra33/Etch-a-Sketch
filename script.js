//Sets important constants and variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");

// Creates a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

//Call a default grid then link is opened.
defaultGrid ();

///Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
// Creates rows
    for (let r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        console.log(`Row ${r + 1} created`); // Log for each row created
    }
}    
// Creates columns
function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[i].appendChild(newCell).className = "cell";
            console.log(`cell ${j +1} create in Row ${i + 1}`); // Log for each cell created
        }
    }

        //mouseover event (hover effect)
    let cell = document.querySelectorAll('.cell'); //selecting all cells
        cell.forEach(cell => {
            cell.addEventListener('mouseover',function(){
            cell.style.backgroundColor = 'red'; //mouseover event effect
        });
        }
    );
}

//reset buton event
const newGridButton = document.getElementById("newGrid");
newGridButton.addEventListener('click', () => {
    let isValid = false;
    let squaresPerSide;

    while (!isValid) {
        //providing a new grid
        let userInput = prompt 
        ("Enter the number for new grid Max 50x50):"
        ,);
        squaresPerSide = parseInt(userInput);

        //checking for the valid input (1-50) 
        if (!isNaN(squaresPerSide) && squaresPerSide > 0 && squaresPerSide <= 50) {
            isValid = true;
        } else {
            alert ("Provide only a number from 1 to 50 illiterate");
        }
    } 
    
    //call the creatGrid function
    createGrid(squaresPerSide);
});      
  
// creating new grid
function createGrid(gridSize){
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${gridSize},max-content)`;// Set equal columns
    container.style.gridTemplateRows = `repeat(${gridSize},max-content)`;// Set equal raws


    for (let i = 0; i < gridSize * gridSize; i++) {

    //creating new div for each cell
    let newCell = document.createElement('div');

    //add the class cell to the new div
    newCell.classList.add('cell');

    //append cell to the container
    container.appendChild(newCell);

    //add hover effect
    newCell.addEventListener('mouseover', function() {
        newCell.style.backgroundColor = 'blue';
    });
    }
}
