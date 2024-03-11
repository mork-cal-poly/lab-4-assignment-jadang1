let catX = 0;
let sealY = 0;
let clicked = false;

function setup() {
  let myCanvas = createCanvas(400,400);
  fill('#00BFFF');
  ellipseMode(CENTER);
  myCanvas.parent("canvas-parent");
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


//---------- Draw Background -------------------------
function drawBackground(x,y,colorOcean,colorSand){
  push();
//ocean
      translate(200, 400);
  fill(colorOcean)
   rect(-300,-850,1800,900)
//sand
  fill(colorSand);
 rect(-300,-160,900,700)
  pop();
}

//-----------Function for Cat--------------------------
function drawCat(x,y,colorFur,colorMouth,colorNose,colorEye){
  push();
    translate(x,y)
    scale(0.75);
      //left ear
    fill(colorFur);
    triangle(-50,-170,-90,-160,-100,-220)

      //left ear
    fill(colorFur)
    triangle(-40,-170,0,-170,-10,-230)

      //left leg
    fill(colorFur)
    rect(0,-100,40,80)

      //right leg
    fill(colorFur)
    rect(90,-100,40,80)

      //body
    fill(colorFur)
    rect(-25,-150,175,100)

      //head
    fill(colorFur)
    ellipse(-40,-150,100,100)

      //nose
    fill(colorMouth)
    ellipse(-40,-130,-40,-30)
    fill(colorNose);
    ellipse(-40, -130,-12,-7)

      //right eye
    fill(colorEye)
    ellipse(-10,-150,15,15)

      //left eye
    fill(colorEye)
    ellipse(-70,-150,15,15);
  pop()
}

//---------- Function for Seal--- -------------------------
  function drawSeal(x,y,colorFur,colorEye,colorNose){
 
  push();

   translate(x, y);
   scale(0.5)
   fill(colorFur);
  
//fins
arc(170,40,80,70,15,PI*1/3)
  
//right arm
  ellipse(245,-100,40,80)
  
//left arm
  ellipse(95,-100,40,80)
  
//body
   ellipse(170,-90,150,230)
  
//head
  ellipse(170,-200,110,110)
  
//nose
  fill('#FBFCF8')
  ellipse(170,-190,-40,-30)
  fill(colorNose);
  ellipse(170,-190,-12,-7)

//right eyebrow
  fill(colorNose)
  ellipse(185,-220,8,8)
  
//left eyebrow
  fill(colorNose)
  ellipse(155,-220,8,8)
  
//right eye
  fill(colorEye)
  ellipse(200,-200,15,15)
  
//left eye
  fill(colorEye)
  ellipse(140,-200,15,15)
    pop();
}

//---------- Function for SUNFLOWER--- (Han Nguyen's code)--------------
function drawFlower(x,y,rotateP){ //this for the flower around the sun
  push()
    translate(x,y)
    rotate(rotateP)
    scale(0.5)
    fill('#FF774C')
    noStroke()
    ellipse(0, 0, 50,200)
    fill(255)
    noStroke()
    ellipse(0,0, 50,150)
  pop()
}

function drawSun(){      // the sun
  push();
    fill('#faee02')
    noStroke()
    ellipse(300, 70, 40, 40);
  pop();
}  
//-----------------------------------------//
function mouseClicked() {
  clicked = !clicked;     
}