let increasing = true, n = 5, radius;

setup = () => {
	createCanvas(windowWidth, windowHeight);
  if(width < height) radius = width / 2 - 20;
  else radius = height / 2 - 20;
}

draw = () => {
  frameRate(25);
  background(100);
  translate(width/2, height/2);
  
  if(increasing == true) n += 1;
  if(increasing == false) n -= 1;
  if(n === 50) increasing = false; // maximum circle
  if(n === 5) increasing = true; // minimum circle

  const circles = [];
  const angle = TWO_PI/n;
  
  fill(255);
  noStroke();
  for(let i = 0; i < n; i++) {
    const x = radius*cos(angle*i);
    const y = radius*sin(angle*i);
    circles.push({ x: x, y: y});
    ellipse(x, y, 10);
  }
  
  stroke(0);
  
  for(let i = 0; i < n; i++) {
    for(let j = i; j < n; j++) {
      if(i !== j)
        line(circles[i].x, circles[i].y, circles[j].x, circles[j].y);
    }
  }
}