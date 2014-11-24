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
   image(img, 0,500,270,270);

   //2p
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   fill(50,50,50);
   noStroke()
   image(img2,10 + Math.cos(timing*2*PI)*200,           // x좌표
       500 + Math.sin(timing*2*PI)*200,       // y좌표
       100,                                     // width
       100);                                    // height

   //3p
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   fill(100,100,100);
   noStroke()
   image(img3, 20 + Math.cos(timing*2*PI)*250,           // x좌표
        600 + Math.sin(timing*2*PI)*200,       // y좌표
        70,                                     // width
        70);                                    // height
   //4p
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(200,200,200);
   noStroke()
  image(img4, 30 + Math.cos(timing*2*PI)*200,           // x좌표
        500 + Math.sin(timing*2*PI)*200,       // y좌표
        40,                                     // width
        40);                                    // height 
   //a
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(200,200,200);
   noStroke()
   image(img5, 800 + Math.cos(timing*2*PI)*350,           // x좌표
        50 + Math.sin(timing*2*PI)*200,       // y좌표
        100,                                     // width
        100);                                    // height
fill(0);
noStroke();
rect(1166,0,500,1166)
}

