import { constants } from './constants';
import { config } from './config';

/**
 * Snake Class
 */

export class Snake {
	body: Array<any>;
	direction: string;
	eating: boolean;

	constructor() {
		this.body = [];
		this.addBodyPart(1,1);
		this.addBodyPart(2,1);
		this.addBodyPart(3,1);
		this.addBodyPart(4,1);
		this.addBodyPart(5,1);
		this.addBodyPart(6,1);
	}

	addBodyPart(x, y) {
		var bodyPart = {x: x, y: y};
		this.body.push(bodyPart);
	}

	move(direction = constants.LEFT) {
		var head = this.body[this.body.length-1];
		var newX;
		var newY;

		// remove last bodypart unless when eating
		if (!this.eating) this.body.shift();

		// change direction if it's not opposite
		switch (direction) {
			case constants.LEFT :
				if (this.direction !== constants.RIGHT) this.direction = direction;
				break;
			case constants.RIGHT :
				if (this.direction !== constants.LEFT) this.direction = direction;
				break;
			case constants.UP :
				if (this.direction !== constants.DOWN) this.direction = direction;
				break;
			case constants.DOWN :
				if (this.direction !== constants.UP) this.direction = direction;
				break;
		}

		// add new body part ot the head
		switch (this.direction) {
			case constants.LEFT :
				newX = head.x === config.width-1 ? 0 : head.x+1;
				this.addBodyPart(newX, head.y);
				break;
			case constants.RIGHT :
				newX = head.x === 0 ? config.width-1 : head.x-1;
				this.addBodyPart(newX, head.y);
				break;
			case constants.UP :
				newY = head.y === 0 ? config.height-1 : head.y-1;
				this.addBodyPart(head.x, newY);
				break;
			case constants.DOWN :
				newY = head.y === config.height-1 ? 0 : head.y+1;
				this.addBodyPart(head.x, newY);
				break;
		}
		
	}

	private checkCollision(point, skipHead = false) {
		var bodyPart;

		var length = this.body.length;
		if (skipHead) length--;

		for (var i = 0; i < length; i++) {
			bodyPart = this.body[i];
			if (bodyPart.x === point.x && bodyPart.y === point.y) {
				return true;
			}
		}
		return false;
	}

	public checkFoodCollision(food) {
		return this.eating = this.checkCollision(food);
	}

	public checkSnakeCollision() {
		var head = this.body[this.body.length-1];

		return this.checkCollision(head, true);
	}
}