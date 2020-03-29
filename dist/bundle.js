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
}); // function sequencer() {
//     const kick = new Tone.Player('../drums/kick-cultivator.wav').toMaster();
//     const kick1 = new Tone.Player('../drums/kick-big.wav').toMaster();
//     const kick3 = new Tone.Player('../drums/kick-slapback.wav').toMaster();
//     const kick4 = new Tone.Player('../drums/kick-tron.wav').toMaster();
//     const snare = new Tone.Player('../drums/snare-808.wav').toMaster();
//     const snare1 = new Tone.Player('../drums/snare-analog.wav').toMaster();
//     const snare2 = new Tone.Player('../drums/snare-noise.wav').toMaster();
//     const snare3 = new Tone.Player('../drums/snare-smasher.wav').toMaster();
//     const tom = new Tone.Player('../drums/tom-acoustic01.wav').toMaster();
//     const tom1 = new Tone.Player('../drums/tom-analog.wav').toMaster();
//     const tom2 = new Tone.Player('../drums/tom-chiptune.wav').toMaster();
//     const tom3 = new Tone.Player('../drums/tom-fm.wav').toMaster();
//     let i = 0;
//     // Transport => add f pass howmany time loops,(f,  8times)
//     Tone.Transport.scheduleRepeat(repeat, "32n");
//     Tone.Transport.start()
//     //f to repeat , loop8 time  and repeat
//     function repeat() {
//         let step = i % 32;
//         // console.log(step)
//         let kickInputs = document.querySelector(
//           `.kick input:nth-child(${step + 1})`
//         );
//         let kickInputs1 = document.querySelector(
//           `.kick1 input:nth-child(${step + 1})`
//         );
//         let kickInputs3 = document.querySelector(
//           `.kick3 input:nth-child(${step + 1})`
//         );
//         let kickInputs4 = document.querySelector(
//           `.kick4 input:nth-child(${step + 1})`
//         );
//         let tomInputs = document.querySelector(
//           `.tom input:nth-child(${step + 1})`
//         );
//         let tomInputs1 = document.querySelector(
//           `.tom1 input:nth-child(${step + 1})`
//         );
//         let tomInputs2 = document.querySelector(
//           `.tom2 input:nth-child(${step + 1})`
//         );
//         let tomInputs3 = document.querySelector(
//           `.tom3 input:nth-child(${step + 1})`
//         );
//         let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
//         let snareInputs1 = document.querySelector(`.snare1 input:nth-child(${step + 1})`);
//         let snareInputs2 = document.querySelector(`.snare2 input:nth-child(${step + 1})`);
//         let snareInputs3 = document.querySelector(`.snare3 input:nth-child(${step + 1})`);
//         if (kickInputs.checked){
//             // console.log('sound')
//             kick.start();
//         };
//         if (kickInputs1.checked){
//             // console.log('sound')
//             kick1.start();
//         };
//         if (kickInputs3.checked){
//             // console.log('sound')
//             kick3.start();
//         };
//         if (kickInputs4.checked){
//             // console.log('sound')
//             kick4.start();
//         };
//         if (snareInputs.checked) {
//           // console.log('sound')
//           snare.start();
//         };
//         if (snareInputs1.checked) {
//           // console.log('sound')
//           snare1.start();
//         };
//         if (snareInputs2.checked) {
//           // console.log('sound')
//           snare2.start();
//         };
//         if (snareInputs3.checked) {
//           // console.log('sound')
//           snare3.start();
//         };
//         if (tomInputs.checked) {
//           // console.log('sound')
//           tom.start();
//         };
//         if (tomInputs1.checked) {
//           // console.log('sound')
//           tom1.start();
//         };
//         if (tomInputs2.checked) {
//           // console.log('sound')
//           tom2.start();
//         };
//         if (tomInputs3.checked) {
//           // console.log('sound')
//           tom3.start();
//         };
//         i++;
//     }
// }
// sequencer();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIlRvbmUiLCJjb250ZXh0Iiwic3RhdGUiLCJyZXN1bWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBQSxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLGdCQUF6QixDQUEwQyxXQUExQyxFQUF1RCxZQUFNO0FBQ3pELE1BQUlDLElBQUksQ0FBQ0MsT0FBTCxDQUFhQyxLQUFiLEtBQXVCLFNBQTNCLEVBQXNDRixJQUFJLENBQUNDLE9BQUwsQ0FBYUUsTUFBYjtBQUN6QyxDQUZELEUsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLGUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvL1VQREFURTogdGhlcmUgaXMgYSBwcm9ibGVtIGluIGNocm9tZSB3aXRoIHN0YXJ0aW5nIGF1ZGlvIGNvbnRleHQgYmVmb3JlIGEgdXNlciBnZXN0dXJlLlxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICBpZiAoVG9uZS5jb250ZXh0LnN0YXRlICE9PSAncnVubmluZycpIFRvbmUuY29udGV4dC5yZXN1bWUoKTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBzZXF1ZW5jZXIoKSB7XG4vLyAgICAgY29uc3Qga2ljayA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMva2ljay1jdWx0aXZhdG9yLndhdicpLnRvTWFzdGVyKCk7XG4vLyAgICAgY29uc3Qga2ljazEgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL2tpY2stYmlnLndhdicpLnRvTWFzdGVyKCk7XG4vLyAgICAgY29uc3Qga2ljazMgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL2tpY2stc2xhcGJhY2sud2F2JykudG9NYXN0ZXIoKTtcbi8vICAgICBjb25zdCBraWNrNCA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMva2ljay10cm9uLndhdicpLnRvTWFzdGVyKCk7XG4vLyAgICAgY29uc3Qgc25hcmUgPSBuZXcgVG9uZS5QbGF5ZXIoJy4uL2RydW1zL3NuYXJlLTgwOC53YXYnKS50b01hc3RlcigpO1xuLy8gICAgIGNvbnN0IHNuYXJlMSA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMvc25hcmUtYW5hbG9nLndhdicpLnRvTWFzdGVyKCk7XG4vLyAgICAgY29uc3Qgc25hcmUyID0gbmV3IFRvbmUuUGxheWVyKCcuLi9kcnVtcy9zbmFyZS1ub2lzZS53YXYnKS50b01hc3RlcigpO1xuLy8gICAgIGNvbnN0IHNuYXJlMyA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMvc25hcmUtc21hc2hlci53YXYnKS50b01hc3RlcigpO1xuLy8gICAgIGNvbnN0IHRvbSA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMvdG9tLWFjb3VzdGljMDEud2F2JykudG9NYXN0ZXIoKTtcbi8vICAgICBjb25zdCB0b20xID0gbmV3IFRvbmUuUGxheWVyKCcuLi9kcnVtcy90b20tYW5hbG9nLndhdicpLnRvTWFzdGVyKCk7XG4vLyAgICAgY29uc3QgdG9tMiA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMvdG9tLWNoaXB0dW5lLndhdicpLnRvTWFzdGVyKCk7XG4vLyAgICAgY29uc3QgdG9tMyA9IG5ldyBUb25lLlBsYXllcignLi4vZHJ1bXMvdG9tLWZtLndhdicpLnRvTWFzdGVyKCk7XG4vLyAgICAgbGV0IGkgPSAwO1xuICAgIFxuLy8gICAgIC8vIFRyYW5zcG9ydCA9PiBhZGQgZiBwYXNzIGhvd21hbnkgdGltZSBsb29wcywoZiwgIDh0aW1lcylcbi8vICAgICBUb25lLlRyYW5zcG9ydC5zY2hlZHVsZVJlcGVhdChyZXBlYXQsIFwiMzJuXCIpO1xuLy8gICAgIFRvbmUuVHJhbnNwb3J0LnN0YXJ0KClcblxuLy8gICAgIC8vZiB0byByZXBlYXQgLCBsb29wOCB0aW1lICBhbmQgcmVwZWF0XG4vLyAgICAgZnVuY3Rpb24gcmVwZWF0KCkge1xuLy8gICAgICAgICBsZXQgc3RlcCA9IGkgJSAzMjtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coc3RlcClcbi8vICAgICAgICAgbGV0IGtpY2tJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuLy8gICAgICAgICAgIGAua2ljayBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYFxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBsZXQga2lja0lucHV0czEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuLy8gICAgICAgICAgIGAua2ljazEgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWBcbi8vICAgICAgICAgKTtcbiAgICAgICBcbi8vICAgICAgICAgbGV0IGtpY2tJbnB1dHMzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcbi8vICAgICAgICAgICBgLmtpY2szIGlucHV0Om50aC1jaGlsZCgke3N0ZXAgKyAxfSlgXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIGxldCBraWNrSW5wdXRzNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4vLyAgICAgICAgICAgYC5raWNrNCBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYFxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBsZXQgdG9tSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcbi8vICAgICAgICAgICBgLnRvbSBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYFxuLy8gICAgICAgICApO1xuLy8gICAgICAgICBsZXQgdG9tSW5wdXRzMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4vLyAgICAgICAgICAgYC50b20xIGlucHV0Om50aC1jaGlsZCgke3N0ZXAgKyAxfSlgXG4vLyAgICAgICAgICk7XG4vLyAgICAgICAgIGxldCB0b21JbnB1dHMyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcbi8vICAgICAgICAgICBgLnRvbTIgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWBcbi8vICAgICAgICAgKTtcbi8vICAgICAgICAgbGV0IHRvbUlucHV0czMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuLy8gICAgICAgICAgIGAudG9tMyBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYFxuLy8gICAgICAgICApO1xuICAgXG4gICAgICAgICAgICBcblxuLy8gICAgICAgICBsZXQgc25hcmVJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc25hcmUgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWApO1xuLy8gICAgICAgICBsZXQgc25hcmVJbnB1dHMxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNuYXJlMSBpbnB1dDpudGgtY2hpbGQoJHtzdGVwICsgMX0pYCk7XG4vLyAgICAgICAgIGxldCBzbmFyZUlucHV0czIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc25hcmUyIGlucHV0Om50aC1jaGlsZCgke3N0ZXAgKyAxfSlgKTtcbi8vICAgICAgICAgbGV0IHNuYXJlSW5wdXRzMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zbmFyZTMgaW5wdXQ6bnRoLWNoaWxkKCR7c3RlcCArIDF9KWApO1xuLy8gICAgICAgICBpZiAoa2lja0lucHV0cy5jaGVja2VkKXtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgICBraWNrLnN0YXJ0KCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGlmIChraWNrSW5wdXRzMS5jaGVja2VkKXtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgICBraWNrMS5zdGFydCgpO1xuLy8gICAgICAgICB9O1xuXG4vLyAgICAgICAgIGlmIChraWNrSW5wdXRzMy5jaGVja2VkKXtcbi8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgICBraWNrMy5zdGFydCgpO1xuLy8gICAgICAgICB9O1xuLy8gICAgICAgICBpZiAoa2lja0lucHV0czQuY2hlY2tlZCl7XG4vLyAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuLy8gICAgICAgICAgICAga2ljazQuc3RhcnQoKTtcbi8vICAgICAgICAgfTtcbiAgICBcbi8vICAgICAgICAgaWYgKHNuYXJlSW5wdXRzLmNoZWNrZWQpIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuLy8gICAgICAgICAgIHNuYXJlLnN0YXJ0KCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGlmIChzbmFyZUlucHV0czEuY2hlY2tlZCkge1xuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgc25hcmUxLnN0YXJ0KCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGlmIChzbmFyZUlucHV0czIuY2hlY2tlZCkge1xuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgc25hcmUyLnN0YXJ0KCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGlmIChzbmFyZUlucHV0czMuY2hlY2tlZCkge1xuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgc25hcmUzLnN0YXJ0KCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGlmICh0b21JbnB1dHMuY2hlY2tlZCkge1xuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgdG9tLnN0YXJ0KCk7XG4vLyAgICAgICAgIH07XG4vLyAgICAgICAgIGlmICh0b21JbnB1dHMxLmNoZWNrZWQpIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc291bmQnKVxuLy8gICAgICAgICAgIHRvbTEuc3RhcnQoKTtcbi8vICAgICAgICAgfTtcbi8vICAgICAgICAgaWYgKHRvbUlucHV0czIuY2hlY2tlZCkge1xuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzb3VuZCcpXG4vLyAgICAgICAgICAgdG9tMi5zdGFydCgpO1xuLy8gICAgICAgICB9O1xuLy8gICAgICAgICBpZiAodG9tSW5wdXRzMy5jaGVja2VkKSB7XG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NvdW5kJylcbi8vICAgICAgICAgICB0b20zLnN0YXJ0KCk7XG4vLyAgICAgICAgIH07XG4gICAgICAgXG4vLyAgICAgICAgIGkrKztcbi8vICAgICB9XG4gICAgXG4vLyB9XG4vLyBzZXF1ZW5jZXIoKTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==