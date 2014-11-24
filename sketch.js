var bg;
var y = 0;

function setup() {
  bg = loadImage("back.png");
  img = loadImage("1.png");
  img2 = loadImage("2.png");
  img3 = loadImage("3.png");
  img4 = loadImage("4.png");
  img5 = loadImage("a.png");
  img6 = loadImage("b.png");
  img6 = loadImage("c.png");
  createCanvas(1166, 1621);
}

function draw() {
   background(bg);
  
   fill(255,64,64);
   noStroke()
   image(img, 140,140,270,270);
   //노란
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   

}

