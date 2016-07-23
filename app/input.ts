import { constants } from './constants';

/**
 * Gets keyboard input and handles it
 */

export class Input {
	private listening: boolean;
	public lastKeyPress: string;
	public arrowKeys: Array<Number>;
	public direction: string;

	constructor() {
		this.arrowKeys = [37,38,39,40];
	}

	public listen() {
		var self = this;

		if (!this.listening) {
			window.addEventListener("keydown", function(event) {
				self.handleKeyDown(event);
			}, true);
		}
	}

	public stopListening() {

	}

	private handleKeyDown(event) {
		this.lastKeyPress = event.keyCode;

		if (this.arrowKeys.indexOf(event.keyCode) >= 0){
			switch (event.keyCode) {
				case 37 :
					this.direction = constants.RIGHT;
					break;
				case 38 :
					this.direction = constants.UP;
					break;
				case 39 :
					this.direction = constants.LEFT;
					break;
				case 40 :
					this.direction = constants.DOWN;
					break;
			}
		}
		
	}

}