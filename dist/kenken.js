/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.ts":
/*!***********************!*\
  !*** ./src/js/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar boards_1 = __webpack_require__(/*! ./kenken/boards */ \"./src/js/kenken/boards.ts\");\nvar Kenken = /** @class */ (function () {\n    function Kenken(n) {\n        var b = new boards_1.board(n);\n    }\n    return Kenken;\n}());\nexports.Kenken = Kenken;\nvar k = new Kenken(3);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYXBwLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC50cz85MWJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Ym9hcmR9IGZyb20gJy4va2Vua2VuL2JvYXJkcydcbmV4cG9ydCBjbGFzcyBLZW5rZW4ge1xuICBjb25zdHJ1Y3RvcihuKSB7XG4gIGxldCAgYj1uZXcgYm9hcmQobik7XG4gIH1cbn1cbnZhciBrID0gbmV3IEtlbmtlbigzKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBS0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/app.ts\n");

/***/ }),

/***/ "./src/js/kenken/boards.ts":
/*!*********************************!*\
  !*** ./src/js/kenken/boards.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nexports.__esModule = true;\nvar board = /** @class */ (function () {\n    function board(n) {\n        this.numberplaced = 0;\n        this.squaresplaced = 0;\n        this.attempts = 0;\n        this.maxattempts = 10;\n        this.pieces = new Array(5);\n        this.pieces[0] = new Array(1);\n        this.pieces[0][0] = new Array(0, 0);\n        //make a dot\n        this.pieces[0] = new Array(1);\n        this.pieces[0][0] = new Array(0, 0);\n        //make a square\n        this.pieces[1] = new Array(4);\n        this.pieces[1][0] = new Array(0, 0);\n        this.pieces[1][1] = new Array(0, 1);\n        this.pieces[1][2] = new Array(1, 0);\n        this.pieces[1][3] = new Array(1, 1);\n        //make a line\n        this.pieces[2] = new Array(4);\n        this.pieces[2][0] = new Array(0, 0);\n        this.pieces[2][1] = new Array(0, 1);\n        this.pieces[2][2] = new Array(0, 2);\n        this.pieces[2][3] = new Array(0, 3);\n        //make a L\n        this.pieces[3] = new Array(5);\n        this.pieces[3][0] = new Array(0, 0);\n        this.pieces[3][1] = new Array(0, 1);\n        this.pieces[3][2] = new Array(0, 2);\n        this.pieces[3][3] = new Array(1, 0);\n        this.pieces[3][4] = new Array(2, 0);\n        //make a small line\n        this.pieces[4] = new Array(2);\n        this.pieces[4][0] = new Array(0, 0);\n        this.pieces[4][1] = new Array(1, 0);\n        this.gridsize = n;\n        while (this.squaresplaced < this.gridsize * this.gridsize) {\n            this.attempts++;\n            if (this.attempts > this.maxattempts) {\n                this.squaresplaced = this.gridsize * this.gridsize;\n            }\n            this.grid = new Array(n);\n            for (var i = 0; i < n; i++) {\n                this.grid[i] = new Array(n);\n            }\n            this.numberplaced = this.pieces.length;\n            while (this.numberplaced == this.pieces.length) {\n                this.numberplaced = 0;\n                for (var i = 0; i < this.pieces.length; i++) {\n                    var xpad = 0;\n                    var ypad = 0;\n                    for (var p = 0; p < this.pieces[i].length; p++) {\n                        if (xpad < this.pieces[i][p][0]) {\n                            xpad = Math.floor(this.pieces[i][p][0]);\n                        }\n                        if (ypad < this.pieces[i][p][1]) {\n                            ypad = Math.floor(this.pieces[i][p][1]);\n                        }\n                    }\n                    var gridy = Math.random() * (this.grid.length) - ypad;\n                    var gridx = Math.random() * (this.grid[0].length) - xpad;\n                    var count = this.grid.length * this.grid[0].length;\n                    console.log(count);\n                    while (count > 0) {\n                        while (gridx > -1) {\n                            count--;\n                            if (gridx + xpad < this.grid[0].length) {\n                                if (gridy + ypad < this.grid.length) {\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n        console.log(this);\n    }\n    return board;\n}());\nexports.board = board;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMva2Vua2VuL2JvYXJkcy50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9rZW5rZW4vYm9hcmRzLnRzP2IzMjgiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIGJvYXJkIHtcbiAgZ3JpZDogQXJyYXk8YW55W10+O1xuICBwaWVjZXM6IGFueVtdW107XG4gIG51bWJlcnBsYWNlZDogbnVtYmVyID0gMDtcbiAgc3F1YXJlc3BsYWNlZDogbnVtYmVyID0gMDtcbiAgYXR0ZW1wdHM6IG51bWJlciA9IDA7XG4gIG1heGF0dGVtcHRzOiBudW1iZXIgPSAxMDtcbiAgZ3JpZHNpemU6IG51bWJlcjtcbiAgY29uc3RydWN0b3Iobikge1xuICAgIHRoaXMucGllY2VzID0gbmV3IEFycmF5KDUpO1xuICAgIHRoaXMucGllY2VzWzBdID0gbmV3IEFycmF5KDEpO1xuICAgIHRoaXMucGllY2VzWzBdWzBdID0gbmV3IEFycmF5KDAsIDApO1xuICAgIC8vbWFrZSBhIGRvdFxuICAgIHRoaXMucGllY2VzWzBdID0gbmV3IEFycmF5KDEpO1xuICAgIHRoaXMucGllY2VzWzBdWzBdID0gbmV3IEFycmF5KDAsIDApO1xuXG5cbiAgICAvL21ha2UgYSBzcXVhcmVcbiAgICB0aGlzLnBpZWNlc1sxXSA9IG5ldyBBcnJheSg0KTtcbiAgICB0aGlzLnBpZWNlc1sxXVswXSA9IG5ldyBBcnJheSgwLCAwKTtcbiAgICB0aGlzLnBpZWNlc1sxXVsxXSA9IG5ldyBBcnJheSgwLCAxKTtcbiAgICB0aGlzLnBpZWNlc1sxXVsyXSA9IG5ldyBBcnJheSgxLCAwKTtcbiAgICB0aGlzLnBpZWNlc1sxXVszXSA9IG5ldyBBcnJheSgxLCAxKTtcblxuICAgIC8vbWFrZSBhIGxpbmVcbiAgICB0aGlzLnBpZWNlc1syXSA9IG5ldyBBcnJheSg0KTtcbiAgICB0aGlzLnBpZWNlc1syXVswXSA9IG5ldyBBcnJheSgwLCAwKTtcbiAgICB0aGlzLnBpZWNlc1syXVsxXSA9IG5ldyBBcnJheSgwLCAxKTtcbiAgICB0aGlzLnBpZWNlc1syXVsyXSA9IG5ldyBBcnJheSgwLCAyKTtcbiAgICB0aGlzLnBpZWNlc1syXVszXSA9IG5ldyBBcnJheSgwLCAzKTtcblxuXG5cbiAgICAvL21ha2UgYSBMXG4gICAgdGhpcy5waWVjZXNbM10gPSBuZXcgQXJyYXkoNSk7XG4gICAgdGhpcy5waWVjZXNbM11bMF0gPSBuZXcgQXJyYXkoMCwgMCk7XG4gICAgdGhpcy5waWVjZXNbM11bMV0gPSBuZXcgQXJyYXkoMCwgMSk7XG4gICAgdGhpcy5waWVjZXNbM11bMl0gPSBuZXcgQXJyYXkoMCwgMik7XG4gICAgdGhpcy5waWVjZXNbM11bM10gPSBuZXcgQXJyYXkoMSwgMCk7XG4gICAgdGhpcy5waWVjZXNbM11bNF0gPSBuZXcgQXJyYXkoMiwgMCk7XG5cbiAgICAvL21ha2UgYSBzbWFsbCBsaW5lXG4gICAgdGhpcy5waWVjZXNbNF0gPSBuZXcgQXJyYXkoMik7XG4gICAgdGhpcy5waWVjZXNbNF1bMF0gPSBuZXcgQXJyYXkoMCwgMCk7XG4gICAgdGhpcy5waWVjZXNbNF1bMV0gPSBuZXcgQXJyYXkoMSwgMCk7XG4gICAgdGhpcy5ncmlkc2l6ZSA9IG47XG4gICAgd2hpbGUgKHRoaXMuc3F1YXJlc3BsYWNlZCA8IHRoaXMuZ3JpZHNpemUgKiB0aGlzLmdyaWRzaXplKSB7XG4gICAgICB0aGlzLmF0dGVtcHRzKys7XG4gICAgICBpZiAodGhpcy5hdHRlbXB0cyA+IHRoaXMubWF4YXR0ZW1wdHMpIHtcbiAgICAgICAgdGhpcy5zcXVhcmVzcGxhY2VkID0gdGhpcy5ncmlkc2l6ZSAqIHRoaXMuZ3JpZHNpemU7XG4gICAgICB9XG4gICAgICB0aGlzLmdyaWQgPSBuZXcgQXJyYXkobik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICB0aGlzLmdyaWRbaV0gPSBuZXcgQXJyYXkobik7XG4gICAgICB9XG4gICAgICB0aGlzLm51bWJlcnBsYWNlZCA9IHRoaXMucGllY2VzLmxlbmd0aDtcbiAgICAgIHdoaWxlICh0aGlzLm51bWJlcnBsYWNlZCA9PSB0aGlzLnBpZWNlcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5udW1iZXJwbGFjZWQgPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGllY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGV0IHhwYWQgPSAwO1xuICAgICAgICAgIGxldCB5cGFkID0gMDtcbiAgICAgICAgICBmb3IgKGxldCBwID0gMDsgcCA8IHRoaXMucGllY2VzW2ldLmxlbmd0aDsgcCsrKSB7XG4gICAgICAgICAgICBpZiAoeHBhZCA8IHRoaXMucGllY2VzW2ldW3BdWzBdKSB7IHhwYWQgPSBNYXRoLmZsb29yKHRoaXMucGllY2VzW2ldW3BdWzBdKTsgfVxuICAgICAgICAgICAgaWYgKHlwYWQgPCB0aGlzLnBpZWNlc1tpXVtwXVsxXSkgeyB5cGFkID0gTWF0aC5mbG9vcih0aGlzLnBpZWNlc1tpXVtwXVsxXSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgbGV0IGdyaWR5ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdyaWQubGVuZ3RoKSAtIHlwYWQ7XG4gICAgICAgICAgbGV0IGdyaWR4ID0gTWF0aC5yYW5kb20oKSAqICh0aGlzLmdyaWRbMF0ubGVuZ3RoKSAtIHhwYWQ7XG4gICAgICAgICAgbGV0IGNvdW50ID0gdGhpcy5ncmlkLmxlbmd0aCp0aGlzLmdyaWRbMF0ubGVuZ3RoO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGNvdW50KTtcbiAgICAgICAgICB3aGlsZSAoY291bnQ+MCkge1xuICAgICAgICAgICAgICB3aGlsZShncmlkeD4tMSl7XG4gICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICBpZihncmlkeCt4cGFkPHRoaXMuZ3JpZFswXS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgaWYoZ3JpZHkreXBhZDx0aGlzLmdyaWQubGVuZ3RoKXtcblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBUUE7QUFMQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBcEZBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/kenken/boards.ts\n");

/***/ })

/******/ });