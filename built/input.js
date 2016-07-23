System.register(['./constants'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var constants_1;
    var Input;
    return {
        setters:[
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            /**
             * Gets keyboard input and handles it
             */
            Input = (function () {
                function Input() {
                    this.arrowKeys = [37, 38, 39, 40];
                }
                Input.prototype.listen = function () {
                    var self = this;
                    if (!this.listening) {
                        window.addEventListener("keydown", function (event) {
                            self.handleKeyDown(event);
                        }, true);
                    }
                };
                Input.prototype.stopListening = function () {
                };
                Input.prototype.handleKeyDown = function (event) {
                    this.lastKeyPress = event.keyCode;
                    if (this.arrowKeys.indexOf(event.keyCode) >= 0) {
                        switch (event.keyCode) {
                            case 37:
                                this.direction = constants_1.constants.RIGHT;
                                break;
                            case 38:
                                this.direction = constants_1.constants.UP;
                                break;
                            case 39:
                                this.direction = constants_1.constants.LEFT;
                                break;
                            case 40:
                                this.direction = constants_1.constants.DOWN;
                                break;
                        }
                    }
                };
                return Input;
            }());
            exports_1("Input", Input);
        }
    }
});
