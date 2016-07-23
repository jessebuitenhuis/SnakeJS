System.register(['./engine'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var engine_1;
    var body, engine;
    return {
        setters:[
            function (engine_1_1) {
                engine_1 = engine_1_1;
            }],
        execute: function() {
            body = document.getElementsByTagName("body")[0];
            engine = new engine_1.Engine(body);
            engine.init();
        }
    }
});
