let texttest = "one ";
let string = "two ";
let newstring = 1;
squares = 20;

const container = document.querySelector(".gridContainer");
const squareSelect = document.querySelector(".square");

for (let i=0; i < squares; i++){
	var squareCreate = document.createElement("div");
	squareCreate.classList.add("square", "flexItem");

	container.appendChild(squareCreate);
}

retest