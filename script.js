let texttest = "one ";
let string = "two ";
let newstring = 1;
squares = 256;

const container = document.querySelector(".gridContainer");
let squarepicker;

//Grid calculator

//Create Grid
	
function sizemaker() {

	input = prompt("How many per row?");
	gridsize = input * input;
	newsize =  (512 / input) - 2;

	gridCreator();

	squarepicker = document.querySelectorAll(".square");


	for (let i=0;i < gridsize; i++) {
		squarepicker[i].style.height = newsize +"px";
		squarepicker[i].style.width = newsize +"px";
	}


	//Event Listener for Black

	for (let i = 0; i < gridsize; i++) {
	squarepicker[i].addEventListener("mouseenter",paintRandom);
	}

	return squarepicker;


}

sizemaker();



function gridCreator(){

for (let i=0; i < gridsize; i++){
	var squareCreate = document.createElement("div");
	squareCreate.classList.add("square", "flexItem");

	container.appendChild(squareCreate);
}

}


//Painter functions

function paintBlack(item) {
	item.target.classList.add("fillblack");

}

function paintRandom(item) {
	let colors = ['blue','red','purple','yellow','green'];
	item.target.style.background = colors[Math.floor(Math.random() * colors.length)];
}

function paintGrayscale(item) {
	item.target.classList.add("fillgrayscale");
	let num = num - .1;
}

//Clear Button

let button = document.querySelector("button");
let userinput;


function clearcells() {

	document.querySelectorAll(".square").forEach(e => e.remove());
	sizemaker();

}

button.addEventListener("click",clearcells);



