const DOT_GAP = 10;

export default class Controller {

	constructor() {
		this.t = 0;
	}

	update() {
		this.t += 0.01;
		if (this.t > 1) {
			this.t --;
		}
	}

	/**
	 * 
	 * @param {CanvasRenderingContext2D} context 
	 * @param {number} width 
	 * @param {number} height 
	 */
	render(context, width, height) {
		// TODO: Some rendering logic
		let startX = 0;
		while (startX > -width / 2) {
			startX -= DOT_GAP;
		}
		let startY = 0;
		while (startY >= -height / 2) {
			startY -= DOT_GAP;
		}

		for (let x = startX; x <= width / 2 + DOT_GAP; x += DOT_GAP) {
			let ix = x / DOT_GAP;
			for (let y = startY; y <= height / 2 + DOT_GAP; y += DOT_GAP) {
				let iy = x / DOT_GAP;

				let localT = this.t + (ix + iy) / 4;

				let waveX = DOT_GAP * Math.cos(2 * Math.PI * localT);
				let waveY = DOT_GAP * Math.sin(2 * Math.PI * localT);

				context.beginPath();
				context.arc(x + waveX, y + waveY, 1, 0, 2 * Math.PI);
				context.fill();
			}
		}
	}

}
