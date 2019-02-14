let n, d, sliderN, sliderD, k, radius, sliderR;
setup = () => {
	createCanvas(windowWidth, windowHeight);
	sliderN = createSlider(1, 10, 5);
	sliderN.position(20, 20);

	sliderD = createSlider(1, 10, 4);
	sliderD.position(20, 50);

	sliderR = createSlider(10, 1000, 100, 1);
	sliderR.position(20, 80);	
}

draw = () => {
	background(0);
	n = sliderN.value();
	d = sliderD.value();
	radius = sliderR.value();
	k = n / d;

	translate(width / 2, height / 2);
	noFill();
	stroke(255);

	beginShape();
	for(let i = 0; i < TWO_PI * d; i += 0.01) {
		const r = radius * cos(k * i);
		const x = r * cos(i);
		const y = r * sin(i)
		vertex(x, y);
	}
	endShape(CLOSE);
}

windowResized = () => {
	resizeCanvas(windowWidth, windowHeight);
}