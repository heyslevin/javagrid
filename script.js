let texttest = "one ";
let string = "two ";
let newstring = 1;
squares = 256;

const container = document.querySelector(".gridContainer");

//Create Grid

function gridCreator(){

for (let i=0; i < squares; i++){
	var squareCreate = document.createElement("div");
	squareCreate.classList.add("square", "flexItem");

	container.appendChild(squareCreate);
}

}

gridCreator();

//Painter functions

function paintBlack(item) {
	item.target.classList.add("fillblack");

}

//Clear Button

let button = document.querySelector("button");
let userinput;
function clearcells() {
	for (let i = 0; i < squares; i++) {
		squarepicker[i].classList.remove("fillblack");
	}	

	squares = prompt("How many cells?");
	document.querySelectorAll(".square").forEach(e => e.remove());

	gridCreator();

}

button.addEventListener("click",clearcells);

//Event Listener for squares

let squarepicker = document.querySelectorAll(".square");


for (let i = 0; i < squares; i++) {
	squarepicker[i].addEventListener("mouseenter",paintBlack);
}