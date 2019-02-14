let total = 10, slider;

setup = () => {
	createCanvas(600, 600);
  slider = createSlider(1, 100, 5);
}

draw = () => {
  background(100);
  fill(0);
  noStroke();
  rect(20, 20, 10, 560);
  rect(580, 20, 10, 560);
  total = slider.value();
  
  for(let i = 0; i <= total; i++) {
    fill(255);
    const r = 5;
    ellipse(25 + r/2, 20 + 560*i/total, r, r);
    ellipse(580 + r/2, 20 + 560*i/total, r, r);
    for(let j = 0; j <= total; j++) {
      stroke(255);
      line(
        25 + r/2,
        20 + 560*i/total,
        580 + r/2,
        20+560*j/total
      );
    }
  }
}