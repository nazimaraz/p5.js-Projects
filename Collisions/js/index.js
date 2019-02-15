let x1, x2, m1, m2, collisions;

m1 = 1;     // mass of the object on the left
m2 = 10000; // mass of the object on the right

x1 = 50
x2 = 250;

speed1 = 0;
speed2 = 0.999;

collisions = 0;

function setup() { 
  createCanvas(650, 650);
} 

function draw() {
  background(0);
  
  textSize(100);
  text(collisions, 300, 300);
  
  rect(0, 0, 10, 650);
  
  fill(150);
  if (x1 > 10) rect(x1, 500, 75, 75);
  else rect(10, 500, 75, 75);

  fill(100);
  if (x2 > 85) rect(x2, 500, 75, 75);
  else rect(85, 500, 75, 75);
  
  x1 -= speed1;
  x2 -= speed2;
  
  if (x2 < x1 + 75) {
    collisions += 1;
    tempSpeed1 = speed1;
    tempSpeed2 = speed2;
    speed1 = tempSpeed1*(m1-m2)/(m1+m2) + tempSpeed2*(2*m2)/(m1+m2);
    speed2 = tempSpeed1*(2*m1)/(m1+m2) + tempSpeed2*(m2-m1)/(m1+m2);
  }

  if (x1 < 10) {
    collisions += 1;
    speed1 *= -1;
  }
}