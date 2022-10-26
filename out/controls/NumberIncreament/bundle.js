/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./NumberIncreament/index.ts":
/*!***********************************!*\
  !*** ./NumberIncreament/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports.NumberIncreament = void 0;\n\nvar NumberIncreament =\n/** @class */\nfunction () {\n  function NumberIncreament() {}\n  /**\r\n   * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.\r\n   * Data-set values are not initialized here, use updateView.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.\r\n   * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.\r\n   * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.\r\n   * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.\r\n   */\n\n\n  NumberIncreament.prototype.init = function (context, notifyOutputChanged, state, container) {\n    var _this = this; // Add control initialization code\n\n\n    this.context = context;\n    this.container = container;\n    this.notifyOutputChanged = notifyOutputChanged;\n    var br = document.createElement(\"br\");\n    this.textLabelElement = document.createElement(\"label\");\n    this.textLabelElement.innerHTML = \"Value Adjust By  \";\n    this.container.appendChild(this.textLabelElement);\n    this.inputElement = document.createElement(\"input\");\n    this.inputElement.setAttribute(\"type\", \"number\");\n    this.inputElement.setAttribute(\"style\", \"width:400px;border:solid 1px #f0f0f0;box-shadow:0px 4px 5px #e0e0e0\");\n    this._operationNumberBy = context.parameters.operationNumberBy.raw || 0;\n    this._inputNumber = context.parameters.inputNumber.raw || 0;\n    this.inputElement.value = String(this._inputNumber);\n    this.container.appendChild(this.inputElement);\n    this.container.appendChild(br);\n    this.addButtonElement = document.createElement(\"button\");\n    this.addButtonElement.innerHTML = \"+ by \" + this._operationNumberBy;\n    this.addButtonElement.setAttribute(\"style\", \"width:10%;justify:centre;height:20px\");\n    this.addButtonElement.addEventListener(\"click\", function (e) {\n      return _this.increamentByOne(Number(_this.inputElement.value), _this._operationNumberBy);\n    });\n    this.subButtonElement = document.createElement(\"button\");\n    this.subButtonElement.innerHTML = \"- by \" + this._operationNumberBy;\n    this.subButtonElement.setAttribute(\"style\", \"width:10%;justify:centre;height:20px\");\n    this.subButtonElement.addEventListener(\"click\", function (e) {\n      return _this.decreamentByOne(Number(_this.inputElement.value), _this._operationNumberBy);\n    });\n    this.container.appendChild(this.addButtonElement);\n    this.container.appendChild(this.subButtonElement);\n  };\n  /**\r\n   * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.\r\n   * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions\r\n   */\n\n\n  NumberIncreament.prototype.updateView = function (context) {\n    // Add code to update control view\n    this._inputNumber = context.parameters.inputNumber.raw || 0;\n    this._operationNumberBy = context.parameters.operationNumberBy.raw || 0;\n    this.inputElement.value = String(this._inputNumber);\n    this.addButtonElement.innerHTML = \"+ by \" + this._operationNumberBy;\n    this.subButtonElement.innerHTML = \"- by \" + this._operationNumberBy;\n  };\n  /**\r\n   * It is called by the framework prior to a control receiving new data.\r\n   * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”\r\n   */\n\n\n  NumberIncreament.prototype.getOutputs = function () {\n    return {\n      inputNumber: this._inputNumber\n    };\n  };\n  /**\r\n   * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.\r\n   * i.e. cancelling any pending remote calls, removing listeners, etc.\r\n   */\n\n\n  NumberIncreament.prototype.destroy = function () {// Add code to cleanup control if necessary\n  };\n\n  NumberIncreament.prototype.increamentByOne = function (num, oppNum) {\n    num = num + oppNum;\n    this.inputElement.value = String(num);\n    this._inputNumber = Number(this.inputElement.value);\n    this.notifyOutputChanged();\n  };\n\n  NumberIncreament.prototype.decreamentByOne = function (num, oppNum) {\n    num = num - oppNum;\n    this.inputElement.value = String(num);\n    this._inputNumber = Number(this.inputElement.value);\n    this.notifyOutputChanged();\n  };\n\n  return NumberIncreament;\n}();\n\nexports.NumberIncreament = NumberIncreament;\n\n//# sourceURL=webpack://pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad/./NumberIncreament/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./NumberIncreament/index.ts"](0, __webpack_exports__);
/******/ 	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = __webpack_exports__;
/******/ 	
/******/ })()
;
if (window.ComponentFramework && window.ComponentFramework.registerControl) {
	ComponentFramework.registerControl('NumberIncreamentPCF.NumberIncreament', pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.NumberIncreament);
} else {
	var NumberIncreamentPCF = NumberIncreamentPCF || {};
	NumberIncreamentPCF.NumberIncreament = pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad.NumberIncreament;
	pcf_tools_652ac3f36e1e4bca82eb3c1dc44e6fad = undefined;
}