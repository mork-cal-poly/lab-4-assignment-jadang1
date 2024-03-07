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

  //animation for seal to go up
  if (sealY <= -400) {
    catX = catX + 1
  }

  //seal
  drawSeal(200,450+sealY,color('#FFFAF0'),color('#728FCE'),color('#696969'))
  
  //cat
  drawCat(100+catX,300,color('#C5C6D0'),color('#FBFCF8'),color('#F88379'),color('#728FCE')) 

}
