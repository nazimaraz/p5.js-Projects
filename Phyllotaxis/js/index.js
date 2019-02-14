let n = 0, c = 9;
const angle = 137.5; // degree
setup = () => {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSL);
  background(0);
}

draw = () => {
  translate(width / 2, height / 2);
	const fi = n * (angle * PI / 180);
	const r = c * sqrt(n);
	const x = r * cos(fi);
	const y = r * sin(fi);
	let red = sin(fi % (angle / 100));
	red =  map(red, 0, 1, 0, 360);
	fill(red, 100, 50);
	noStroke();
	ellipse(x, y, 12);
	n++;
}

windowResized = () => {
	resizeCanvas(windowWidth, windowHeight);
	background(0);
	n = 0;
}