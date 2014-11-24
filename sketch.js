var bg;
var y = 0;

function setup() {
  bg = loadImage("bg.png");
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

   fill(229,211,136);
   noStroke()
   image(img1,250 + Math.cos(timing*2*PI)*200,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        40,                                     // width
        40);                                    // height
   //타원궤도 행성
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   fill(87,96,255);
   noStroke()
   image(img2, 250 + Math.cos(timing*2*PI)*350,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        150,                                     // width
        150);                                    // height
   //속도 다른 행성
   var duration = 8000;
   var timing = (new Date()%duration)/duration;

   fill(126,22,12);
   noStroke()
   image(img3, 250 + Math.cos(timing*2*PI)*250,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        60,                                     // width
        60);                                    // height
   //태양를 도는 지구
   var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(81,158,81);
   noStroke()
  image(img4, 250 + Math.cos(timing*2*PI)*250,           // x좌표
        250 + Math.sin(timing*2*PI)*200,       // y좌표
        60,                                     // width
        60);                                    // height
   //지구를 도는 달
    var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(209,192,70);
   noStroke()
   image(img5,250 + Math.cos(timing*2*PI)*250+Math.cos(timing*4*PI)*80,          // x좌표
        250 + Math.sin(timing*2*PI)*200+Math.sin(timing*4*PI)*80,       // y좌표
        20,                                     // width
        20);                                    // height
      //지구를 도는 달
    var duration = 6000;
   var timing = (new Date()%duration)/duration;

   fill(209,192,70);
   noStroke()
   image(img6,250 + Math.cos(timing*2*PI)*250+Math.cos(timing*4*PI)*80,          // x좌표
        250 + Math.sin(timing*2*PI)*200+Math.sin(timing*4*PI)*80,       // y좌표
        20,                                     // width
        20);                                    // height
}

