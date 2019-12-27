let texttest = "one ";
let string = "two ";
let newstring = 1;
squares = 256;

const container = document.querySelector(".gridContainer");

for (let i=0; i < squares; i++){
	var squareCreate = document.createElement("div");
	squareCreate.classList.add("square", "flexItem");

	container.appendChild(squareCreate);
}

function paintBlack(item) {
	//item.classList.add("fillblack");//
	item.classList.add("fillblack");

}

let squarepicker = document.querySelectorAll(".square");
let squaretest = document.querySelector(".square");

squaretest.addEventListener("mouseenter",paintBlack);

// squaretest.classList.add("fillblack");



for (let i=0;i < squares; i++) {
	squarepicker[i].addEventListener("mouseenter", function(){
		squarepicker[i].classList.add("fillblack");
	});
}