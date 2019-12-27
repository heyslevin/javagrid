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

//Clear Button

let button = document.querySelector("button");
function clearcells() {
	for (let i = 0; i < squares; i++) {
		squarepicker[i].classList.remove("fillblack");
	}	
}
button.addEventListener("click",clearcells);


function clear(e){
	e.target.classList.remove("paintBlack");
}

button.addEventListener("click",clearcells);
//Event Listener for squares

let squarepicker = document.querySelectorAll(".square");


for (let i = 0; i < squares; i++) {
	squarepicker[i].addEventListener("mouseenter",paintBlack);
}