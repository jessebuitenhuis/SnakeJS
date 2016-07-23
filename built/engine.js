System.register(['./view', './snake', './food', './config', './input'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var view_1, snake_1, food_1, config_1, input_1;
    var Engine;
    return {
        setters:[
            function (view_1_1) {
                view_1 = view_1_1;
            },
            function (snake_1_1) {
                snake_1 = snake_1_1;
            },
            function (food_1_1) {
                food_1 = food_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (input_1_1) {
                input_1 = input_1_1;
            }],
        execute: function() {
            /**
             * Engine for the game
             */
            Engine = (function () {
                function Engine(parentEl) {
                    this.parentEl = parentEl;
                }
                Engine.prototype.init = function () {
                    this.view = new view_1.View(this.parentEl);
                    this.snake = new snake_1.Snake();
                    this.input = new input_1.Input();
                    this.food = new food_1.Food();
                    this.view.clear();
                    this.start();
                    this.input.listen();
                };
                Engine.prototype.start = function () {
                    var self = this;
                    if (this.interval)
                        clearInterval(this.interval);
                    this.interval = setInterval(function () {
                        self.drawScene();
                    }, config_1.config.speed);
                };
                Engine.prototype.gameOver = function () {
                    clearInterval(this.interval);
                    this.view.clear();
                    this.view.drawGameOver();
                };
                Engine.prototype.drawScene = function () {
                    this.view.clear();
                    // Calculate
                    if (this.snake.checkFoodCollision(this.food)) {
                        this.food = new food_1.Food();
                        config_1.config.speed = config_1.config.speed * 0.95;
                        this.start();
                    }
                    this.snake.move(this.input.direction);
                    if (this.snake.checkSnakeCollision()) {
                        return this.gameOver();
                    }
                    // Draw
                    this.view.drawFood(this.food);
                    this.view.drawSnake(this.snake);
                };
                return Engine;
            }());
            exports_1("Engine", Engine);
        }
    }
});
