let impossible, xSlider, ySlider, widthSlider, heightSlider, thicknessSlider;
function setup() {
  createCanvas(800, 800);
  impossible = new impossibleShapes;
  
  xSlider = createSlider(-100, 800, 300);
  xSlider.position(20, 20);
  
  ySlider = createSlider(0, 800, 300);
  ySlider.position(20, 50);
  
  widthSlider = createSlider(0, 800, 255);
  widthSlider.position(230, 20);
  
  heightSlider = createSlider(0, 800, 255);
  heightSlider.position(230, 50);
  
  thicknessSlider = createSlider(0, 255, 20);
  thicknessSlider.position(230, 80);
}

function draw() {
  background(100);
  noFill();
  stroke(0);
  impossible.rectangle(
    xSlider.value(),
    ySlider.value(),
    widthSlider.value(),
    heightSlider.value(),
    thicknessSlider.value()
  );
  
  text("x:", 5, 35);
  text("y:", 5, 65);
  text("width:", 165, 35);
  text("height:", 165, 65);
  text("thickness:", 165, 95);
}

class impossibleShapes {
	rectangle(x, y, w, h, t) {
		this.x = x;
		this.y = y;
		this.sw = w; // shape width;
		this.sh = h; // shape height;
		this.w = w - 2 * t;
		this.h = h - 2 * t;
		this.t = t;
		for(let k = 0; k < 4; k++)
			this._lShapeRectangle(x, y, this.w, this.h, t, k);
	}

	_lShapeRectangle(x, y, w, h, t, k) {
		let i, j;
		if(k === 0) {
			i = [t, t, w, w, 0, 0];
			j = [0, h, h, h + t, h + t, t];
		} else if(k === 1) {
			i = [t, t + w, 2 * t + w, 2 * t, 2 * t, t ];
			j = [0, 0, t, t, h, h];
		} else if(k === 2) {
			i = [2 * t, 2 * t + w, 2 * t + w, t + w, t + w, 2  * t ];
			j =  [t, t, t + h, 2 * t + h, 2 * t, 2 * t];
		} else if(k === 3) {
			i = [w, w + t, w + t, t, 0, w];
			j = [2 * t, 2 * t, 2 * t + h, 2 * t + h, t + h, t + h];
		}
		beginShape();
		for(let k = 0; k < i.length; k++)
			vertex(x + i[k], y + j[k]);
		endShape(CLOSE);
	}
}