const DOT_GAP = 15;

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
		let startX = 0.5 * DOT_GAP;
		while (startX > -width / 2) {
			startX -= DOT_GAP;
		}
		let startY = 0.5 * DOT_GAP;
		while (startY >= -height / 2) {
			startY -= DOT_GAP;
		}

		for (let x = startX; x <= width / 2 + DOT_GAP; x += DOT_GAP) {
			let ix = x / DOT_GAP;
			for (let y = startY; y <= height / 2 + DOT_GAP; y += DOT_GAP) {
				let iy = y / DOT_GAP;
				let ir = Math.sqrt(ix * ix + iy * iy);
				let angle = Math.atan2(iy, ix);

				let localT = this.t - (ir / 8)

				let waveDist = 0.9 * DOT_GAP;
				let waveX = waveDist * Math.cos(2 * Math.PI * localT + angle);
				let waveY = waveDist * Math.sin(2 * Math.PI * localT + angle);

				context.beginPath();
				context.strokeStyle = '#DDD'
				context.lineWidth = 0.1;
				context.arc(x, y, waveDist, 0, 2 * Math.PI);
				context.stroke();

				context.beginPath();
				context.arc(x + waveX, y + waveY, 2, 0, 2 * Math.PI);
				context.fill();
			}
		}
	}

}
