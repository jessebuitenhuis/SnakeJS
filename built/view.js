System.register(['./config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config_1;
    var View;
    return {
        setters:[
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            /**
             * The View class is responsible for drawing to the canvas
             */
            View = (function () {
                function View(parentEl) {
                    this.canvas = document.createElement("canvas");
                    this.canvas.setAttribute("width", String(config_1.config.width * config_1.config.pixelSize));
                    this.canvas.setAttribute("height", String(config_1.config.height * config_1.config.pixelSize));
                    parentEl.appendChild(this.canvas);
                    this.ctx = this.canvas.getContext("2d");
                }
                View.prototype.clear = function () {
                    this.ctx.fillStyle = config_1.config.backgroundColor;
                    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
                };
                View.prototype.drawSnake = function (snake) {
                    var ctx = this.ctx;
                    this.ctx.fillStyle = config_1.config.snakeColor;
                    snake.body.forEach(function (bodyPart) {
                        ctx.fillRect(bodyPart.x * config_1.config.pixelSize, bodyPart.y * config_1.config.pixelSize, config_1.config.pixelSize, config_1.config.pixelSize);
                    });
                };
                View.prototype.drawFood = function (food) {
                    this.ctx.fillStyle = config_1.config.foodColor;
                    this.ctx.fillRect(food.x * config_1.config.pixelSize, food.y * config_1.config.pixelSize, config_1.config.pixelSize, config_1.config.pixelSize);
                };
                View.prototype.drawGameOver = function () {
                    this.ctx.fillStyle = config_1.config.textColor;
                    this.ctx.font = "15px Arial";
                    this.ctx.textAlign = "center";
                    this.ctx.fillText("GAME OVER", config_1.config.width * config_1.config.pixelSize / 2, config_1.config.height * config_1.config.pixelSize / 2);
                };
                return View;
            }());
            exports_1("View", View);
        }
    }
});
