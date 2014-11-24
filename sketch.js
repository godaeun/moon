var y = 0;

function setup() {
  createCanvas(1998, 1621);
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

  var duration0 = 7000;
  var timing0 = (new Date()%duration0)/duration0;
  var duration1 = 6000;
  var timing1 = (new Date()%duration1)/duration1;
  var duration2 = 5000;
  var timing2 = (new Date()%duration2)/duration2;
  var duration3 = 4000;
  var timing3 = (new Date()%duration3)/duration3;
  var duration4 = 3000;
  var timing4 = (new Date()%duration4)/duration4;
  
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
   image(img5, 800 + Math.cos(timing*2*PI)*350,           
        50 + Math.sin(timing*2*PI)*200,       
        100,                                     
        100);
   //b
    image(img6,500 + Math.cos(timing1*2*PI)*300 + Math.cos(timing2*4*PI)*150-100,
    500 + Math.sin(timing1*2*PI)*300 + Math.sin(timing2*4*PI)*70-100,200,200);






fill(255);
noStroke()
rect(780,0,500,500);
}

