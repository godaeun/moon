var y = 0;

function setup() {
  createCanvas(1166, 1621);
  img = loadImage("1.png");
  img2 = loadImage("2.png");
  img3 = loadImage("3.png");
  img4 = loadImage("4.png");
  img5 = loadImage("a.png");
  img6 = loadImage("b.png");
  img6 = loadImage("c.png");
  img7 = loadImage("back.png");  

}

function draw() {
   background(img7);
  
   fill(255,64,64);
   noStroke()
   image(img, 40,1040,270,270);
   //노란
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   

}

