let cols, rows, current, stack = [];
const w = 35, grid = [];

function setup() {
	createCanvas(700, 700);
	columns = floor(width / w);
	rows = floor(height / w);
	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < columns; i++) {
			grid.push(new Cell(i, j));
		}
	}
	current = grid[0];
}

function draw() {
	background(55);
	noStroke();

	for (let i = 0; i < grid.length; i++) {
		grid[i].show();
	}
	current.visited = true;
	const next = current.checkNeighbors();
	if (next) {
		next.visited = true;
		stack.push(current);
		removeWalls(current, next);
		current = next;
	} else if (stack.length > 0) {
		current = stack.pop();
	}
}	

function removeWalls(a, b) {
	const x = a.i - b.i;
	if (x === 1) {
		a.walls[3] = false;
		b.walls[1] = false;
	} else if (x === -1) {
		a.walls[1] = false;
		b.walls[3] = false;
	}

	const y = a.j - b.j;
	if (y === 1) {
		a.walls[0] = false;
		b.walls[2] = false;
	} else if (y === -1) {
		a.walls[2] = false;
		b.walls[0] = false;
	}	
}

class Cell {
	constructor(i, j) {
		this.i = i;
		this.j = j
		this.walls = [true, true, true, true];
		this.visited = false;
	}

	show() {
		const x = this.i * w;
		const y = this.j * w;
		stroke(255);

		if (this.walls[0]) line(x, y, x + w, y);
		if (this.walls[1]) line(x + w, y, x + w, y + w);
		if (this.walls[2]) line(x + w, y + w, x, y + w);
		if (this.walls[3]) line(x, y + w, x, y);

		if (this.visited) {
			noStroke();
			fill(24, 155, 217, 100);
			rect(x, y, w, w);
		}
	}

	checkNeighbors() {
		const i = this.i;
		const j = this.j;
		const neighbors = [];
		const top = grid[this.index(i, j - 1)];
		const bottom = grid[this.index(i, j + 1)];
		const right = grid[this.index(i + 1, j)];
		const left = grid[this.index(i - 1, j)];
		const directions = [top, right, left, bottom];
		for (let i = 0; i < directions.length; i++) {
			if (directions[i] && !directions[i].visited)
				neighbors.push(directions[i]);
		}
		if (neighbors.length > 0) {
			const r = floor( random( 0, neighbors.length ) );
			return neighbors[r];
		} else
			return undefined;
	}

	index(i, j) {
		if (i < 0 || j < 0 || i > columns - 1 || j > rows - 1)
			return -1;
		return i + j * columns;
	} 
}