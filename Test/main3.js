//setup canvas
const canvas = document.getElementById("graphics");
canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
const context = canvas.getContext("2d");

//get the picture
let pic = document.getElementById("picture1");
let pic2 = document.getElementById("picture2");
//create the pics coordinates
let picCor = { x: 0, y: 0 };
let pic2Cor = { x: 0, y: 0 };

/*pic.onmousedown = function(event) { // (1) start the process

  // (2) prepare to moving: make absolute and on top by z-index
  element.style.position = "absolute";
  element.style.zIndex = 1000;
  // move it out of any current parents directly into body
  // to make it positioned relative to the body
  document.body.append(pic);
  // ...and put that absolutely positioned ball under the cursor

  moveAt(event.pageX, event.pageY);

  // centers the ball at (pageX, pageY) coordinates

  function moveAt(pageX, pageY) {
    pic.style.left = pageX - pic.offsetWidth / 2 + "px";
    pic.style.top = pageY - pic.offsetHeight / 2 + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (3) move the ball on mousemove
  document.addEventListener("mousemove", onMouseMove);

  // (4) drop the ball, remove unneeded handlers
  pic.onmouseup = function() {
    document.removeEventListener("mousemove", onMouseMove);
    pic.onmouseup = null;
  };
};
pic2.onmousedown = function(event) {
    // (1) start the process
  
    // (2) prepare to moving: make absolute and on top by z-index
    pic2.style.position = "absolute";
    pic2.style.zIndex = 1000;
    // move it out of any current parents directly into body
    // to make it positioned relative to the body
    document.body.append(pic2);
    // ...and put that absolutely positioned ball under the cursor
  
    moveAt(event.pageX, event.pageY);
  
    // centers the ball at (pageX, pageY) coordinates
  
    function moveAt(pageX, pageY) {
      pic2.style.left = pageX - pic2.offsetWidth / 2 + "px";
      pic2.style.top = pageY - pic2.offsetHeight / 2 + "px";
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // (3) move the ball on mousemove
    document.addEventListener("mousemove", onMouseMove);
  
    // (4) drop the ball, remove unneeded handlers
    pic2.onmouseup = function() {
      document.removeEventListener("mousemove", onMouseMove);
      pic2.onmouseup = null;
    };
  
};*/

//Create mouse position variables
let mouseCor = {x:0, y:0}

//check direction of mouse (event)
let direction1 = "";
let direction2 = "";
function mouseMove (event){
    mouseCor.x = event.pageX;
    mouseCor.y = event.pageY;

    if(mouseCor.x > picCor.x ){
        direction1 = "right";
    } else if (mouseCor.x < picCor.x){
        direction1 = "left";
    }

    if(mouseCor.y < picCor.y){
        direction2 = "up";
    } else if(mouseCor.y> picCor.y){
        direction2 = "down"
    }

    picCor.x = mouseCor.x;
    picCor.y = mouseCor.y; 

    console.log(direction1 + " and " + direction2);
}
//add event listener
pic.addEventListener("mousemove", mouseMove, false);
pic2.addEventListener("mousemove", mouseMove, false);

/*function draw() {
    context.save()
    
}
if (direction1 === "right"){
    document.pic.setAttribute("display", "block");
    document.pic2.setAttribute("display", "none");
} else if (direction1 === "left"){
    document.pic2.setAttribute("display", "block");
    document.pic.setAttribute("display", "none");
}

function mouseDown(event){
}
*/