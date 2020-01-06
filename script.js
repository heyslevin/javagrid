let texttest = "one ";
let string = "two ";
let newstring = 1;
let painter = paintBlack;
squares = 256;

const container = document.querySelector(".gridContainer");
let squarepicker;

//Grid calculator

//Create Grid
	
function sizemaker() {

	input = prompt("How many per row?");
	gridsize = input * input;
	newsize =  (512 / input);

	gridCreator();

	squarepicker = document.querySelectorAll(".square");


	for (let i=0;i < gridsize; i++) {
		squarepicker[i].style.height = newsize +"px";
		squarepicker[i].style.width = newsize +"px";
	}


	//Event Listener for Black

	for (let i = 0; i < gridsize; i++) {
	squarepicker[i].addEventListener("mouseenter",painter);
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
	
let num;

function paintGrayscale(item) {
	item.target.style.opacity = `${Number(item.target.style.opacity) + 0.1}`;
	item.target.style.background = "black";
}

//Clear Button

let buttonClear = document.querySelector('button[id="clear"]');
let buttonRandom = document.querySelector('button[id="random"]');
let buttonGray = document.querySelector('button[id="grayscale"]');
let buttonBlack = document.querySelector('button[id="black"]');
let userinput;


function clearcells() {

	document.querySelectorAll(".square").forEach(e => e.remove());
	sizemaker();

}

function randomCells() {
	painter = paintRandom;
	clearcells();

}

function grayCells() {
	painter = paintGrayscale;
	clearcells();

}

function blackPaint() {
	painter = paintBlack;
	clearcells();
}

buttonClear.addEventListener("click",clearcells);
buttonRandom.addEventListener("click",randomCells);
buttonGray.addEventListener("click",grayCells);
buttonBlack.addEventListener("click",blackPaint);



