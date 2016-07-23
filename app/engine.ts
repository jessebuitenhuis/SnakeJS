import { View } from './view';
import { Snake } from './snake';
import { Food } from './food';
import { config } from './config';
import { Input } from './input';

/**
 * Engine for the game
 */

export class Engine {
	parentEl: HTMLElement;
	interval;
	view;
	score;
	snake: Snake;
	input: Input;
	food: Food;

	constructor(parentEl) {
		this.parentEl = parentEl;
	}

	public init() {
		this.view = new View(this.parentEl);
		this.snake = new Snake();
		this.input = new Input();
		this.food = new Food();

		this.view.clear();
		this.start();
		this.input.listen();
	}

	public start() {
		var self = this;

		if (this.interval) clearInterval(this.interval);

		this.interval = setInterval(function(){
			self.drawScene();
		}, config.speed);
	}

	public gameOver() {
		clearInterval(this.interval);
		this.view.clear();
		this.view.drawGameOver();
	}

	private drawScene() {
		this.view.clear();

		// Calculate
		if (this.snake.checkFoodCollision(this.food)) {
			this.food = new Food();
			config.speed = config.speed * 0.95;
			this.start();
		}

		this.snake.move(this.input.direction);

		if (this.snake.checkSnakeCollision()){
			return this.gameOver();
		}

		// Draw
		this.view.drawFood(this.food);
		this.view.drawSnake(this.snake);
	}
}