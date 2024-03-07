let catX = 0; 
let sealX = 0;
let clicked = false;

function setup() {
  createCanvas(400,400);
  fill('#00BFFF')
  ellipseMode(CENTER)

}

function draw() {
  //background
    drawBackground(0,0,color('#00BFFF'),color('#FFFACD'))

    //animation for cat
   if(clicked){ 
    sealY = sealY - 1; 
  }

}
