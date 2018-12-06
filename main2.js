//Get reference to canvas
const canvas = document.getElementById("particles");

//Set canvas size
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

console.log(canvas);

//Get context from canvas
const context = canvas.getContext("2d");
console.log(context);

