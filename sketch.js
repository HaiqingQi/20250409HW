let circleSize,posX,posY,offSet,numShapes,space;
let myColor=['#ffac00','#fcff00','#8fff00','#008f00',"#fc8800",'#ffac00','#fcff00','#8fff00','#008f00',"#fc8800"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  numShapes=10;
  circleSize=width-50;
  space=circleSize/numShapes;
  offSet=10;
  
  posX=width/2;
  posY=height/2;
  
}

function draw() {
  background(220);
  
  for(i=0; i<numShapes; i++)
    {
    fill(myColor[i]);
      strokeWeight(4);
      stroke('brown');
      circle(posX+offSet*i,posY,circleSize-space*i);
      
    }
  mysignature();
}

function mysignature()
{
  
  textSize(20);
  strokeWeight(4);
  stroke('black');
  fill('orange');
  text('Haiqing Qi', width-130, height-30);
}