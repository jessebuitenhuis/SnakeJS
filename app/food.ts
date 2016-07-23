import { config } from './config';

/**
 * Adding food for the snake
 */

export class Food {
	public x: number;
	public y: number;

	constructor() {
		this.x = Math.floor( (config.width/10) * Math.random() ) * 10;
		this.y = Math.floor( (config.height/10) * Math.random()) * 10;
	}
}	