//Get reference to canvas
const canvas = document.getElementById("particles");

//Set canvas size
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
console.log(canvas);

//Get context from canvas
const context = canvas.getContext("2d");
console.log(context);

//set default background to gradient from black to gray
let canvasGradient = context.createLinearGradient(
  0,
  0,
  canvas.width,
  canvas.height
);
canvasGradient.addColorStop("0", "black");
canvasGradient.addColorStop("0.6", "#1a1a1a");
canvasGradient.addColorStop("0.8", "#262626");
canvasGradient.addColorStop("0.9", "#333333");
canvasGradient.addColorStop("1", "#404040");
context.fillStyle = canvasGradient;
context.fillRect(0, 0, canvas.width, canvas.height);

//make the cursor look like a paintbrush
let paintbrush = (document.getElementsByTagName("body")[0].style.cursor =
  "url('data:image/x-icon;base64,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AABjY2n+4ejt//z+/v//////+f7+/2Njaf4AAAA4AAAAJQAAABMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjY2n+2+Ln/vr7/P/7/v7/Y2Np/gAAABwAAAATAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjY2n+Y2Np/mNjaf5jY2n+AAAACAAAAAUAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////8B///8AP//+AB///wAf///AH///wB///+Af///gD///8Af///gH///8A////AP///4B///+Af///wD///+Af///gH///8A////AH///4B///+AP///gD///8Af///AH///4B////Af///4H////B////4f//////////8='), auto");

//Set thickness default
context.lineWidth = 4;

//get reference to slider (input range) element
var brushSlider = document.getElementById("myRange");

//function to handle change in slider element
function changeBrushSize() {
  context.lineWidth = brushSlider.value;
}
//add event listener to change according to the value of the slider element
brushSlider.addEventListener("change", changeBrushSize);

//Boolean variable for mouse state
let isMouseDown = false;

//Handle mouse down
function handleMouseDown(event) {
  console.log("Mouse down at x: " + event.clientX + ", y: " + event.clientY);
  isMouseDown = true;
  context.beginPath();
  //context.moveTo(event.clientX, event.clientY);

  context.drawImage(imageObj, event.clientX, event.clientY, 50, 50);
}

//Handle mouse up
function handleMouseUp(event) {
  console.log("Mouse up at x: " + event.clientX + ", y: " + event.clientY);
  isMouseDown = false;
  context.closePath();
}

//Handle mouse movement
function handleMouseMove(event) {
  if (isMouseDown === true) {
    context.lineTo(event.clientX, event.clientY);
    context.stroke();
  }
}

//Set mouse listeners
document.addEventListener("mousedown", handleMouseDown, false);
document.addEventListener("mouseup", handleMouseUp, false);
document.addEventListener("mousemove", handleMouseMove, false);

//function for selecting colors from select element options
function changeColorFunction() {
  let color = document.getElementById("selectColor").value;
  let gradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );

  switch (color) {
    case "gradient":
      gradient.addColorStop("0", " #7300e6"); //purple
      gradient.addColorStop(".2", "#a31aff"); //bright purple
      gradient.addColorStop(".4", "#0000ff"); //blue
      gradient.addColorStop(".5", "#33ccff"); //bright blue
      gradient.addColorStop(".6", "#00ffff"); //turquoise
      gradient.addColorStop(".7", "#cc00cc"); //magenta
      gradient.addColorStop(".9", "#ff4dc4"); //hot pink
      context.strokeStyle = gradient;
      break;
    case "blue":
      gradient.addColorStop(".4", "#66c2ff"); //blue
      context.strokeStyle = color;
      break;
    case "pink":
      gradient.addColorStop(".4", "#ff33bb"); //pink
      context.strokeStyle = color;
      break;
    case "purple":
      gradient.addColorStop(".4", "#cc00cc"); //purple
      context.strokeStyle = color;
      break;
  }
}

//reference to select element
let button = document.getElementById("selectColorBackground");

//function that will change the background color according to select element option
function changeBackground() {
  let backgroundColor = button.value;
  canvasGradient = context.createLinearGradient(
    0,
    0,
    canvas.width,
    canvas.height
  );

  if (backgroundColor === "gradient2") {
    canvasGradient.addColorStop("0", "black");
    canvasGradient.addColorStop("0.6", "#1a1a1a");
    canvasGradient.addColorStop("0.8", "#262626");
    canvasGradient.addColorStop("0.9", "#333333");
    canvasGradient.addColorStop("1", "#404040");
    context.fillStyle = canvasGradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  } else if (backgroundColor === "black") {
    canvasGradient.addColorStop(".4", "#000000"); //black
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  } else if (backgroundColor === "white") {
    canvasGradient.addColorStop(".4", "#ffffff"); //white
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
}
