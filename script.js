let texttest = "one ";
let string = "two ";
let newstring = 1;
squares = 256;

const container = document.querySelector(".gridContainer");

//Create Grid

for (let i=0; i < squares; i++){
	var squareCreate = document.createElement("div");
	squareCreate.classList.add("square", "flexItem");

	container.appendChild(squareCreate);
}

//Painter functions

function paintBlack(item) {
	item.target.classList.add("fillblack");

}

//Event Listener for squares

let squarepicker = document.querySelectorAll(".square");


for (let i = 0; i < squares; i++) {
	squarepicker[i].addEventListener("mouseenter",paintBlack);
}