//constants to pay attention to page
const rows = document.getElementById("rows");
const columns = document.getElementById("columns");
const submitbutton = document.getElementById("submitbutton");
const colorchoice = document.getElementById("colorchoice");
const gridofboxes = document.getElementById("gridofboxes");

//event listener that listens to the sumbit button, and calls the makegrid
submitbutton.addEventListener("click", makeGrid);

//funtion to make the grid of boxes
function makeGrid() {
  gridofboxes.innerHTML = '';
//figure out number of rows
  const numRows = rows.value;
//figure out number of columns
  const numColumns = columns.value;
  console.log(numRows, numColumns);

//figure out what color to make them all
  const newColor = colorchoice.value;
//loop to make the grid
//create one box with correct box
for (let i=0; i<numRows; i++) {
  let newRow = document.createElement('div');
  newRow.classList.add('row');
  newRow.setAttribute('id', `row${i}`);
  gridofboxes.appendChild(newRow);

  for (let j=0; j < numColumns; j++) {
    let newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.setAttribute('id', `box${i}${j}`);
    newRow.appendChild(newBox);
    newBox.style.backgroundColor = newColor;
    newBox.addEventListener("click", changeColor);
    newBox.addEventListener ("mouseover", changeColor);
    }
}
  

  let newColumn = document.createElement('div');
  newColumn.classList.add('column');
  newColumn.setAttribute('id', 'column0');
  gridofboxes.appendChild(newColumn);

}

//funtion to change the color of a boz when clicked on it
function changeColor(event) {
  const newColor = colorchoice.value;
  if (event.type ==="click"|| (event.type === "mouseover" && event.buttons === 1)) {
    event.target.style.backgroundColor = newColor;
  }
}


//get boxes to regenerated when submit button is clicked
