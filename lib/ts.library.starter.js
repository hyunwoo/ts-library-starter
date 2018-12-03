(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ts.library.starter", [], factory);
	else if(typeof exports === 'object')
		exports["ts.library.starter"] = factory();
	else
		root["ts.library.starter"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./dist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/index.js":
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatter = void 0;

var formatter = _interopRequireWildcard(__webpack_require__(/*! ./module/formatter */ "./dist/module/formatter.js"));

exports.formatter = formatter;

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/***/ }),

/***/ "./dist/module/formatter.js":
/*!**********************************!*\
  !*** ./dist/module/formatter.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  /**
   * @param  {number} number
   * @returns string
   */
  numberToCommaString: function numberToCommaString(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  /**
   * @param  {number} num
   * @param  {number} length
   * @returns string
   */
  formatNumberLength: function formatNumberLength(num, length) {
    var r = "" + num;

    while (r.length < length) {
      r = "0" + r;
    }

    return r;
  },

  /**
   * @param  {number} number
   * @param  {number} digits
   * @returns string
   */
  numberToKString: function numberToKString(number, digits) {
    var si = [{
      value: 1,
      symbol: ''
    }, {
      value: 1E3,
      symbol: 'k'
    }, {
      value: 1E6,
      symbol: 'M'
    }, {
      value: 1E9,
      symbol: 'G'
    }, {
      value: 1E12,
      symbol: 'T'
    }, {
      value: 1E15,
      symbol: 'P'
    }, {
      value: 1E18,
      symbol: 'E'
    }];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var num = number;
    var i;

    for (i = si.length - 1; i > 0; i -= 1) {
      if (num >= si[i].value) {
        break;
      }
    }

    return (num / si[i].value).toFixed(digits).replace(rx, '$1') + si[i].symbol;
  },

  /**
   * @param  {string} filename
   * @returns string
   */
  removeExtension: function removeExtension(filename) {
    return filename.split('.').slice(0, -1).join('.');
  }
};
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cy5saWJyYXJ5LnN0YXJ0ZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3RzLmxpYnJhcnkuc3RhcnRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy5saWJyYXJ5LnN0YXJ0ZXIvLi4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL3RzLmxpYnJhcnkuc3RhcnRlci8uLi8uLi9zcmMvbW9kdWxlL2Zvcm1hdHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUNBZTtBQUNiOzs7O0FBSUEscUJBQW1CLEVBQW5CLDZCQUFvQixNQUFwQixFQUFrQztBQUNoQyxXQUFPLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLE9BQWxCLENBQTBCLHVCQUExQixFQUFtRCxHQUFuRCxDQUFQO0FBQ0QsR0FQWTs7QUFTYjs7Ozs7QUFLQSxvQkFBa0IsRUFBbEIsNEJBQW1CLEdBQW5CLEVBQWdDLE1BQWhDLEVBQThDO0FBQzVDLFFBQUksQ0FBQyxHQUFHLEtBQUcsR0FBWDs7QUFDQSxXQUFPLENBQUMsQ0FBQyxNQUFGLEdBQVcsTUFBbEIsRUFBMEI7QUFDeEIsT0FBQyxHQUFHLE1BQUksQ0FBUjtBQUNEOztBQUNELFdBQU8sQ0FBUDtBQUNELEdBcEJZOztBQXNCYjs7Ozs7QUFLQSxpQkFBZSxFQUFmLHlCQUFnQixNQUFoQixFQUFnQyxNQUFoQyxFQUE4QztBQUM1QyxRQUFNLEVBQUUsR0FBRyxDQUNUO0FBQUUsV0FBSyxFQUFFLENBQVQ7QUFBWSxZQUFNLEVBQUU7QUFBcEIsS0FEUyxFQUVUO0FBQUUsV0FBSyxFQUFFLEdBQVQ7QUFBYyxZQUFNLEVBQUU7QUFBdEIsS0FGUyxFQUdUO0FBQUUsV0FBSyxFQUFFLEdBQVQ7QUFBYyxZQUFNLEVBQUU7QUFBdEIsS0FIUyxFQUlUO0FBQUUsV0FBSyxFQUFFLEdBQVQ7QUFBYyxZQUFNLEVBQUU7QUFBdEIsS0FKUyxFQUtUO0FBQUUsV0FBSyxFQUFFLElBQVQ7QUFBZSxZQUFNLEVBQUU7QUFBdkIsS0FMUyxFQU1UO0FBQUUsV0FBSyxFQUFFLElBQVQ7QUFBZSxZQUFNLEVBQUU7QUFBdkIsS0FOUyxFQU9UO0FBQUUsV0FBSyxFQUFFLElBQVQ7QUFBZSxZQUFNLEVBQUU7QUFBdkIsS0FQUyxDQUFYO0FBU0EsUUFBTSxFQUFFLEdBQUcsMEJBQVg7QUFDQSxRQUFNLEdBQUcsR0FBRyxNQUFaO0FBQ0EsUUFBSSxDQUFKOztBQUNBLFNBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFILEdBQVksQ0FBckIsRUFBd0IsQ0FBQyxHQUFHLENBQTVCLEVBQStCLENBQUMsSUFBSSxDQUFwQyxFQUF1QztBQUNyQyxVQUFJLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBRCxDQUFGLENBQU0sS0FBakIsRUFBd0I7QUFDdEI7QUFDRDtBQUNGOztBQUNELFdBQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNLEtBQWIsRUFBb0IsT0FBcEIsQ0FBNEIsTUFBNUIsRUFBb0MsT0FBcEMsQ0FBNEMsRUFBNUMsRUFBZ0QsSUFBaEQsSUFBd0QsRUFBRSxDQUFDLENBQUQsQ0FBRixDQUFNLE1BQXJFO0FBQ0QsR0E5Q1k7O0FBZ0RiOzs7O0FBSUEsaUJBQWUsRUFBZix5QkFBZ0IsUUFBaEIsRUFBZ0M7QUFDOUIsV0FBTyxRQUFRLENBQUMsS0FBVCxDQUFlLEdBQWYsRUFBb0IsS0FBcEIsQ0FBMEIsQ0FBMUIsRUFBNkIsQ0FBQyxDQUE5QixFQUFpQyxJQUFqQyxDQUFzQyxHQUF0QyxDQUFQO0FBQ0Q7QUF0RFksQyIsImZpbGUiOiJ0cy5saWJyYXJ5LnN0YXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcInRzLmxpYnJhcnkuc3RhcnRlclwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJ0cy5saWJyYXJ5LnN0YXJ0ZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1widHMubGlicmFyeS5zdGFydGVyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vZGlzdC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCAqIGFzIGZvcm1hdHRlciBmcm9tICcuL21vZHVsZS9mb3JtYXR0ZXInO1xuZXhwb3J0IHsgZm9ybWF0dGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICBudW1iZXJUb0NvbW1hU3RyaW5nOiBmdW5jdGlvbiAobnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5yZXBsYWNlKC9cXEIoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnLCcpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBudW1cbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIGZvcm1hdE51bWJlckxlbmd0aDogZnVuY3Rpb24gKG51bSwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciByID0gXCJcIiArIG51bTtcbiAgICAgICAgd2hpbGUgKHIubGVuZ3RoIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICByID0gXCIwXCIgKyByO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSBudW1iZXJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IGRpZ2l0c1xuICAgICAqIEByZXR1cm5zIHN0cmluZ1xuICAgICAqL1xuICAgIG51bWJlclRvS1N0cmluZzogZnVuY3Rpb24gKG51bWJlciwgZGlnaXRzKSB7XG4gICAgICAgIHZhciBzaSA9IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IDEsIHN5bWJvbDogJycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDFFMywgc3ltYm9sOiAnaycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDFFNiwgc3ltYm9sOiAnTScgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDFFOSwgc3ltYm9sOiAnRycgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IDFFMTIsIHN5bWJvbDogJ1QnIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiAxRTE1LCBzeW1ib2w6ICdQJyB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogMUUxOCwgc3ltYm9sOiAnRScgfVxuICAgICAgICBdO1xuICAgICAgICB2YXIgcnggPSAvXFwuMCskfChcXC5bMC05XSpbMS05XSkwKyQvO1xuICAgICAgICB2YXIgbnVtID0gbnVtYmVyO1xuICAgICAgICB2YXIgaTtcbiAgICAgICAgZm9yIChpID0gc2kubGVuZ3RoIC0gMTsgaSA+IDA7IGkgLT0gMSkge1xuICAgICAgICAgICAgaWYgKG51bSA+PSBzaVtpXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobnVtIC8gc2lbaV0udmFsdWUpLnRvRml4ZWQoZGlnaXRzKS5yZXBsYWNlKHJ4LCAnJDEnKSArIHNpW2ldLnN5bWJvbDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gZmlsZW5hbWVcbiAgICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICAgKi9cbiAgICByZW1vdmVFeHRlbnNpb246IGZ1bmN0aW9uIChmaWxlbmFtZSkge1xuICAgICAgICByZXR1cm4gZmlsZW5hbWUuc3BsaXQoJy4nKS5zbGljZSgwLCAtMSkuam9pbignLicpO1xuICAgIH1cbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXR0ZXIuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==