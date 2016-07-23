System.register(['./constants', './config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var constants_1, config_1;
    var Snake;
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            /**
             * Snake Class
             */
            Snake = (function () {
                function Snake() {
                    this.body = [];
                    this.addBodyPart(1, 1);
                    this.addBodyPart(2, 1);
                    this.addBodyPart(3, 1);
                    this.addBodyPart(4, 1);
                    this.addBodyPart(5, 1);
                    this.addBodyPart(6, 1);
                }
                Snake.prototype.addBodyPart = function (x, y) {
                    var bodyPart = { x: x, y: y };
                    this.body.push(bodyPart);
                };
                Snake.prototype.move = function (direction) {
                    if (direction === void 0) { direction = constants_1.constants.LEFT; }
                    var head = this.body[this.body.length - 1];
                    var newX;
                    var newY;
                    // remove last bodypart unless when eating
                    if (!this.eating)
                        this.body.shift();
                    // change direction if it's not opposite
                    switch (direction) {
                        case constants_1.constants.LEFT:
                            if (this.direction !== constants_1.constants.RIGHT)
                                this.direction = direction;
                            break;
                        case constants_1.constants.RIGHT:
                            if (this.direction !== constants_1.constants.LEFT)
                                this.direction = direction;
                            break;
                        case constants_1.constants.UP:
                            if (this.direction !== constants_1.constants.DOWN)
                                this.direction = direction;
                            break;
                        case constants_1.constants.DOWN:
                            if (this.direction !== constants_1.constants.UP)
                                this.direction = direction;
                            break;
                    }
                    // add new body part ot the head
                    switch (this.direction) {
                        case constants_1.constants.LEFT:
                            newX = head.x === config_1.config.width - 1 ? 0 : head.x + 1;
                            this.addBodyPart(newX, head.y);
                            break;
                        case constants_1.constants.RIGHT:
                            newX = head.x === 0 ? config_1.config.width - 1 : head.x - 1;
                            this.addBodyPart(newX, head.y);
                            break;
                        case constants_1.constants.UP:
                            newY = head.y === 0 ? config_1.config.height - 1 : head.y - 1;
                            this.addBodyPart(head.x, newY);
                            break;
                        case constants_1.constants.DOWN:
                            newY = head.y === config_1.config.height - 1 ? 0 : head.y + 1;
                            this.addBodyPart(head.x, newY);
                            break;
                    }
                };
                Snake.prototype.checkCollision = function (point, skipHead) {
                    if (skipHead === void 0) { skipHead = false; }
                    var bodyPart;
                    var length = this.body.length;
                    if (skipHead)
                        length--;
                    for (var i = 0; i < length; i++) {
                        bodyPart = this.body[i];
                        if (bodyPart.x === point.x && bodyPart.y === point.y) {
                            return true;
                        }
                    }
                    return false;
                };
                Snake.prototype.checkFoodCollision = function (food) {
                    return this.eating = this.checkCollision(food);
                };
                Snake.prototype.checkSnakeCollision = function () {
                    var head = this.body[this.body.length - 1];
                    return this.checkCollision(head, true);
                };
                return Snake;
            }());
            exports_1("Snake", Snake);
        }
    }
});
