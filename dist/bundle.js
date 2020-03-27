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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

//UPDATE: there is a problem in chrome with starting audio context before a user gesture.
document.documentElement.addEventListener('mousedown', function () {
  if (Tone.context.state !== 'running') Tone.context.resume();
});

function sequencer() {
  var kick = new Tone.Player('../drums/kick-cultivator.wav').toMaster();
  var kick1 = new Tone.Player('../drums/kick-big.wav').toMaster();
  var kick3 = new Tone.Player('../drums/kick-slapback.wav').toMaster();
  var kick4 = new Tone.Player('../drums/kick-tron.wav').toMaster();
  var snare = new Tone.Player('../drums/snare-808.wav').toMaster();
  var snare1 = new Tone.Player('../drums/snare-analog.wav').toMaster();
  var snare2 = new Tone.Player('../drums/snare-noise.wav').toMaster();
  var snare3 = new Tone.Player('../drums/snare-smasher.wav').toMaster();
  var tom = new Tone.Player('../drums/tom-acoustic01.wav').toMaster();
  var tom1 = new Tone.Player('../drums/tom-analog.wav').toMaster();
  var tom2 = new Tone.Player('../drums/tom-chiptune.wav').toMaster();
  var tom3 = new Tone.Player('../drums/tom-fm.wav').toMaster();
  var i = 0; // Transport => add f pass howmany time loops,(f,  8times)

  Tone.Transport.scheduleRepeat(repeat, "32n");
  Tone.Transport.start(); //f to repeat , loop8 time  and repeat

  function repeat() {
    var step = i % 32; // console.log(step)

    var kickInputs = document.querySelector(".kick input:nth-child(".concat(step + 1, ")"));
    var kickInputs1 = document.querySelector(".kick1 input:nth-child(".concat(step + 1, ")"));
    var kickInputs3 = document.querySelector(".kick3 input:nth-child(".concat(step + 1, ")"));
    var kickInputs4 = document.querySelector(".kick4 input:nth-child(".concat(step + 1, ")"));
    var tomInputs = document.querySelector(".tom input:nth-child(".concat(step + 1, ")"));
    var tomInputs1 = document.querySelector(".tom1 input:nth-child(".concat(step + 1, ")"));
    var tomInputs2 = document.querySelector(".tom2 input:nth-child(".concat(step + 1, ")"));
    var tomInputs3 = document.querySelector(".tom3 input:nth-child(".concat(step + 1, ")"));
    var snareInputs = document.querySelector(".snare input:nth-child(".concat(step + 1, ")"));
    var snareInputs1 = document.querySelector(".snare1 input:nth-child(".concat(step + 1, ")"));
    var snareInputs2 = document.querySelector(".snare2 input:nth-child(".concat(step + 1, ")"));
    var snareInputs3 = document.querySelector(".snare3 input:nth-child(".concat(step + 1, ")"));

    if (kickInputs.checked) {
      // console.log('sound')
      kick.start();
    }

    ;

    if (kickInputs1.checked) {
      // console.log('sound')
      kick1.start();
    }

    ;

    if (kickInputs3.checked) {
      // console.log('sound')
      kick3.start();
    }

    ;

    if (kickInputs4.checked) {
      // console.log('sound')
      kick4.start();
    }

    ;

    if (snareInputs.checked) {
      // console.log('sound')
      snare.start();
    }

    ;

    if (snareInputs1.checked) {
      // console.log('sound')
      snare1.start();
    }

    ;

    if (snareInputs2.checked) {
      // console.log('sound')
      snare2.start();
    }

    ;

    if (snareInputs3.checked) {
      // console.log('sound')
      snare3.start();
    }

    ;

    if (tomInputs.checked) {
      // console.log('sound')
      tom.start();
    }

    ;

    if (tomInputs1.checked) {
      // console.log('sound')
      tom1.start();
    }

    ;

    if (tomInputs2.checked) {
      // console.log('sound')
      tom2.start();
    }

    ;

    if (tomInputs3.checked) {
      // console.log('sound')
      tom3.start();
    }

    ;
    i++;
  }
}

sequencer();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlRvbmUiLCJjb250ZXh0Iiwic3RhdGUiLCJyZXN1bWUiLCJzZXF1ZW5jZXIiLCJraWNrIiwiUGxheWVyIiwidG9NYXN0ZXIiLCJraWNrMSIsImtpY2szIiwia2ljazQiLCJzbmFyZSIsInNuYXJlMSIsInNuYXJlMiIsInNuYXJlMyIsInRvbSIsInRvbTEiLCJ0b20yIiwidG9tMyIsImkiLCJUcmFuc3BvcnQiLCJzY2hlZHVsZVJlcGVhdCIsInJlcGVhdCIsInN0YXJ0Iiwic3RlcCIsImtpY2tJbnB1dHMiLCJxdWVyeVNlbGVjdG9yIiwia2lja0lucHV0czEiLCJraWNrSW5wdXRzMyIsImtpY2tJbnB1dHM0IiwidG9tSW5wdXRzIiwidG9tSW5wdXRzMSIsInRvbUlucHV0czIiLCJ0b21JbnB1dHMzIiwic25hcmVJbnB1dHMiLCJzbmFyZUlucHV0czEiLCJzbmFyZUlucHV0czIiLCJzbmFyZUlucHV0czMiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIs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WUFBTSxDQUFDVyxLQUFQO0FBQ0Q7O0FBQUE7O0FBQ0QsUUFBSWEsWUFBWSxDQUFDRSxPQUFqQixFQUEwQjtBQUN4QjtBQUNBekIsWUFBTSxDQUFDVSxLQUFQO0FBQ0Q7O0FBQUE7O0FBQ0QsUUFBSWMsWUFBWSxDQUFDQyxPQUFqQixFQUEwQjtBQUN4QjtBQUNBeEIsWUFBTSxDQUFDUyxLQUFQO0FBQ0Q7O0FBQUE7O0FBQ0QsUUFBSU8sU0FBUyxDQUFDUSxPQUFkLEVBQXVCO0FBQ3JCO0FBQ0F2QixTQUFHLENBQUNRLEtBQUo7QUFDRDs7QUFBQTs7QUFDRCxRQUFJUSxVQUFVLENBQUNPLE9BQWYsRUFBd0I7QUFDdEI7QUFDQXRCLFVBQUksQ0FBQ08sS0FBTDtBQUNEOztBQUFBOztBQUNELFFBQUlTLFVBQVUsQ0FBQ00sT0FBZixFQUF3QjtBQUN0QjtBQUNBckIsVUFBSSxDQUFDTSxLQUFMO0FBQ0Q7O0FBQUE7O0FBQ0QsUUFBSVUsVUFBVSxDQUFDSyxPQUFmLEVBQXdCO0FBQ3RCO0FBQ0FwQixVQUFJLENBQUNLLEtBQUw7QUFDRDs7QUFBQTtBQUVESixLQUFDO0FBQ0o7QUFFSjs7QUFDRGYsU0FBUyxHIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy9VUERBVEU6IHRoZXJlIGlzIGEgcHJvYmxlbSBpbiBjaHJvbWUgd2l0aCBzdGFydGluZyBhdWRpbyBjb250ZXh0IGJlZm9yZSBhIHVzZXIgZ2VzdHVyZS5cbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgaWYgKFRvbmUuY29udGV4dC5zdGF0ZSAhPT0gJ3J1bm5pbmcnKSBUb25lLmNvbnRleHQucmVzdW1lKCk7XG59KTtcblxuZnVuY3Rpb24gc2VxdWVuY2VyKCkge1xuICAgIGNvbnN0IGtpY2sgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL2tpY2stY3VsdGl2YXRvci53YXYnKS50b01hc3RlcigpO1xuICAgIGNvbnN0IGtpY2sxID0gbmV3IFRvbmUuUGxheWVyKCcuLi9kcnVtcy9raWNrLWJpZy53YXYnKS50b01hc3RlcigpO1xuICAgIGNvbnN0IGtpY2szID0gbmV3IFRvbmUuUGxheWVyKCcuLi9kcnVtcy9raWNrLXNsYXBiYWNrLndhdicpLnRvTWFzdGVyKCk7XG4gICAgY29uc3Qga2ljazQgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL2tpY2stdHJvbi53YXYnKS50b01hc3RlcigpO1xuICAgIGNvbnN0IHNuYXJlID0gbmV3IFRvbmUuUGxheWVyKCcuLi9kcnVtcy9zbmFyZS04MDgud2F2JykudG9NYXN0ZXIoKTtcbiAgICBjb25zdCBzbmFyZTEgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL3NuYXJlLWFuYWxvZy53YXYnKS50b01hc3RlcigpO1xuICAgIGNvbnN0IHNuYXJlMiA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMvc25hcmUtbm9pc2Uud2F2JykudG9NYXN0ZXIoKTtcbiAgICBjb25zdCBzbmFyZTMgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL3NuYXJlLXNtYXNoZXIud2F2JykudG9NYXN0ZXIoKTtcbiAgICBjb25zdCB0b20gPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL3RvbS1hY291c3RpYzAxLndhdicpLnRvTWFzdGVyKCk7XG4gICAgY29uc3QgdG9tMSA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMvdG9tLWFuYWxvZy53YXYnKS50b01hc3RlcigpO1xuICAgIGNvbnN0IHRvbTIgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL3RvbS1jaGlwdHVuZS53YXYnKS50b01hc3RlcigpO1xuICAgIGNvbnN0IHRvbTMgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL3RvbS1mbS53YXYnKS50b01hc3RlcigpO1xuICAgIGxldCBpID0gMDtcbiAgICBcbiAgICAvLyBUcmFuc3BvcnQgPT4gYWRkIGYgcGFzcyBob3dtYW55IHRpbWUgbG9vcHMsKGYsICA4dGltZXMpXG4gICAgVG9uZS5UcmFuc3BvcnQuc2NoZWR1bGVSZXBlYXQocmVwZWF0LCBcIjMyblwiKTtcbiAgICBUb25lLlRyYW5zcG9ydC5zdGFydCgpXG5cbiAgICAvL2YgdG8gcmVwZWF0ICwgbG9vcDggdGltZSAgYW5kIHJlcGVhdFxuICAgIGZ1bmN0aW9uIHJlcGVhdCgpIHtcbiAgICAgICAgbGV0IHN0ZXAgPSBpICUgMzI7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0ZXApXG4gICAgICAgIGxldCBraWNrSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmtpY2sgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWBcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IGtpY2tJbnB1dHMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLmtpY2sxIGlucHV0Om50aC1jaGlsZCgke3N0ZXAgKyAxfSlgXG4gICAgICAgICk7XG4gICAgICAgXG4gICAgICAgIGxldCBraWNrSW5wdXRzMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC5raWNrMyBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYFxuICAgICAgICApO1xuICAgICAgICBsZXQga2lja0lucHV0czQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAua2ljazQgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWBcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHRvbUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC50b20gaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWBcbiAgICAgICAgKTtcbiAgICAgICAgbGV0IHRvbUlucHV0czEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAudG9tMSBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYFxuICAgICAgICApO1xuICAgICAgICBsZXQgdG9tSW5wdXRzMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYC50b20yIGlucHV0Om50aC1jaGlsZCgke3N0ZXAgKyAxfSlgXG4gICAgICAgICk7XG4gICAgICAgIGxldCB0b21JbnB1dHMzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBgLnRvbTMgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWBcbiAgICAgICAgKTtcbiAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgbGV0IHNuYXJlSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNuYXJlIGlucHV0Om50aC1jaGlsZCgke3N0ZXAgKyAxfSlgKTtcbiAgICAgICAgbGV0IHNuYXJlSW5wdXRzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zbmFyZTEgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWApO1xuICAgICAgICBsZXQgc25hcmVJbnB1dHMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNuYXJlMiBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYCk7XG4gICAgICAgIGxldCBzbmFyZUlucHV0czMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc25hcmUzIGlucHV0Om50aC1jaGlsZCgke3N0ZXAgKyAxfSlgKTtcbiAgICAgICAgaWYgKGtpY2tJbnB1dHMuY2hlY2tlZCl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgICAga2ljay5zdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoa2lja0lucHV0czEuY2hlY2tlZCl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgICAga2ljazEuc3RhcnQoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoa2lja0lucHV0czMuY2hlY2tlZCl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgICAga2ljazMuc3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGtpY2tJbnB1dHM0LmNoZWNrZWQpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdW5kJylcbiAgICAgICAgICAgIGtpY2s0LnN0YXJ0KCk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIGlmIChzbmFyZUlucHV0cy5jaGVja2VkKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdW5kJylcbiAgICAgICAgICBzbmFyZS5zdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoc25hcmVJbnB1dHMxLmNoZWNrZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgIHNuYXJlMS5zdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoc25hcmVJbnB1dHMyLmNoZWNrZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgIHNuYXJlMi5zdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoc25hcmVJbnB1dHMzLmNoZWNrZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgIHNuYXJlMy5zdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodG9tSW5wdXRzLmNoZWNrZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgIHRvbS5zdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodG9tSW5wdXRzMS5jaGVja2VkKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdW5kJylcbiAgICAgICAgICB0b20xLnN0YXJ0KCk7XG4gICAgICAgIH07XG4gICAgICAgIGlmICh0b21JbnB1dHMyLmNoZWNrZWQpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuICAgICAgICAgIHRvbTIuc3RhcnQoKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRvbUlucHV0czMuY2hlY2tlZCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4gICAgICAgICAgdG9tMy5zdGFydCgpO1xuICAgICAgICB9O1xuICAgICAgIFxuICAgICAgICBpKys7XG4gICAgfVxuICAgIFxufVxuc2VxdWVuY2VyKCk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=