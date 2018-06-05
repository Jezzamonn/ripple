const DOT_GAP = 10;

export default class Controller {

	constructor() {

	}

	update() {
		// TODO: Some updating logic
	}

	/**
	 * 
	 * @param {CanvasRenderingContext2D} context 
	 * @param {number} width 
	 * @param {number} height 
	 */
	render(context, width, height) {
		// TODO: Some rendering logic
		let x = 0;
		while (x > -width / 2) {
			x -= DOT_GAP;
		}
		let y = 0;
		while (y >= -height / 2) {
			y -= DOT_GAP;
		}

		for (x; x < width; x += DOT_GAP) {
			for (y; y < height; y += DOT_GAP) {
				context.beginPath();
				// context.fillStyle = 'black';
				context.arc(x, y, 5, 0, Math.PI);
				context.stroke();
			}
		}
	}

}
