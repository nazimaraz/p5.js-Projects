let n1, n2, n3, a = 1, b = 1, m, radius;
let mSlider, n1Slider, n2Slider, n3Slider, radiusSlider;

setup = () => {
	createCanvas(windowWidth, windowHeight);

	mSlider = createSlider(0, 50, 5, 1);
	mSlider.position(20, 20);

	n1Slider = createSlider(0, 2, 1, 0.1);
	n1Slider.position(20, 50);
	n2Slider = createSlider(0, 2, 1, 0.1);
	n2Slider.position(20, 80);
	n3Slider = createSlider(0, 2, 1, 0.1);
	n3Slider.position(20, 110);

	radiusSlider = createSlider(0, 500, height / 4, 1);
	radiusSlider.position(20, 140);
}

supershape = (teta) => {
	const part1 = pow( abs( (1 / a) * cos(teta * m / 4) ), n2);
	const part2 = pow( abs( (1 / b) * sin(teta * m / 4) ), n3);
	return ( 1 / pow( part1 + part2, 1 / n1) );
}

draw = () => {
	background(0);
	stroke(255);
	noFill();

	m = mSlider.value();
	text("m: " + m, mSlider.x * 2 + mSlider.width, mSlider.y + 15);

	n1 = n1Slider.value();
	text("n1: " + n1, n1Slider.x * 2 + n1Slider.width, n1Slider.y + 15);
	n2 = n2Slider.value();
	text("n2: " + n2, n2Slider.x * 2 + n2Slider.width, n2Slider.y + 15);
	n3 = n3Slider.value();
	text("n3: " + n3, n3Slider.x * 2 + n3Slider.width, n3Slider.y + 15);

	radius = radiusSlider.value();
	text("r: " + radius, radiusSlider.x * 2 + radiusSlider.width, radiusSlider.y + 15);
	
	translate(width / 2, height / 2);
	beginShape();
	for(let angle = 0; angle <= TWO_PI; angle += 0.01) {
		const r = supershape(angle);
		const x = radius * r * cos(angle);
		const y = radius * r * sin(angle);
		vertex(x, y);
	}
	endShape();
}

windowResized = () => {
	resizeCanvas(windowWidth, windowHeight);
	background(0);
}