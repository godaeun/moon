var y = 0;
var bg;

function setup() {
  createCanvas(1998, 1621);
  img = loadImage("1.png");
  img2 = loadImage("2.png");
  img3 = loadImage("3.png");
  img4 = loadImage("4.png");
  img5 = loadImage("a.png");
  img6 = loadImage("b.png");
  img7 = loadImage("c.png");
  bg = loadImage("bg.png");

}

function draw() {
   background(0);
   background(bg);    


   noStroke()
   image(img, 0,500,270,270);

   //2p
   var duration = 3000;
   var timing = (new Date()%duration)/duration;

   noStroke()
   image(img2,10 + Math.cos(timing*2*PI)*200,          
       500 + Math.sin(timing*2*PI)*200,      
       100,                                     
       100);                                  

   //3p
   var duration = 4000;
   var timing = (new Date()%duration)/duration;

   noStroke()
   image(img3, 20 + Math.cos(timing*2*PI)*250,          
        600 + Math.sin(timing*2*PI)*200,       
        70,                                     
        70);                                    
   //4p
   var duration = 5000;
   var timing = (new Date()%duration)/duration;

   noStroke()
   image(img4, 30 + Math.cos(timing*2*PI)*200,           
        500 + Math.sin(timing*2*PI)*200,       
        40,                                     
        40);                                     
   //a
   var duration = 6000;
   var timing = (new Date()%duration)/duration;

   noStroke()
   image(img5,800 + Math.cos(timing*4*PI)*200-100,
   300 + Math.sin(timing*4*PI)*170-100,
   100,
   100);

    //b
   var duration = 7000;
   var timing = (new Date()%duration)/duration;

    noStroke()
    image(img6,750 + Math.cos(timing*4*PI)*150-100,
    300 +Math.sin(timing*4*PI)*70-100,
    50,
    50);

   //c
   var duration = 8000;
   var timing = (new Date()%duration)/duration;

    noStroke()   
    image(img7,750 +Math.cos(timing*4*PI)*100-100,
    300 + Math.sin(timing*4*PI)*100-100,
    100,
    100);      


fill(255);
noStroke()
rect(1163,0,500,1500);

}

