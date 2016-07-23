System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var config;
    return {
        setters:[],
        execute: function() {
            exports_1("config", config = {
                width: 30,
                height: 20,
                backgroundColor: '#000',
                snakeColor: '#fff',
                foodColor: 'red',
                textColor: 'orange',
                pixelSize: 25,
                speed: 100
            });
        }
    }
});
