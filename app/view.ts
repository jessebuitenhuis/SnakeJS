import { config } from './config';

/**
 * The View class is responsible for drawing to the canvas
 */

export class View {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;

	constructor(parentEl) {
		this.canvas = document.createElement("canvas");
		this.canvas.setAttribute("width", String(config.width * config.pixelSize));
		this.canvas.setAttribute("height", String(config.height * config.pixelSize));

		parentEl.appendChild(this.canvas);

		this.ctx = this.canvas.getContext("2d");
	}

	clear() {
		this.ctx.fillStyle = config.backgroundColor;
		this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
	}

	drawSnake(snake) {
		var ctx = this.ctx;
		this.ctx.fillStyle = config.snakeColor;

		snake.body.forEach(function(bodyPart){
			ctx.fillRect(
				bodyPart.x * config.pixelSize, 
				bodyPart.y * config.pixelSize,
			 	config.pixelSize, 
			 	config.pixelSize);
		});
	}

	drawFood(food) {
		this.ctx.fillStyle = config.foodColor;
		this.ctx.fillRect(
			food.x * config.pixelSize, 
			food.y * config.pixelSize, 
			config.pixelSize, 
			config.pixelSize);
	}

	drawGameOver() {
		this.ctx.fillStyle = config.textColor;
		this.ctx.font = "15px Arial";
		this.ctx.textAlign = "center";
		this.ctx.fillText("GAME OVER",
			config.width*config.pixelSize/2,
			config.height*config.pixelSize/2);
	}
}