System.register(['./config'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config_1;
    var Food;
    return {
        setters:[
            function (config_1_1) {
                config_1 = config_1_1;
            }],
        execute: function() {
            /**
             * Adding food for the snake
             */
            Food = (function () {
                function Food() {
                    this.x = Math.floor((config_1.config.width / 10) * Math.random()) * 10;
                    this.y = Math.floor((config_1.config.height / 10) * Math.random()) * 10;
                }
                return Food;
            }());
            exports_1("Food", Food);
        }
    }
});
