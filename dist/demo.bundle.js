/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8090/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM *//** @jsx React.DOM */
	'use strict'
	var React = __webpack_require__(2)
	var Stepper = __webpack_require__(1)
	React.render(React.createElement(Stepper, null), document.getElementById('content'));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(2)
	var AddBtn = __webpack_require__(3);
	var MinusBtn = __webpack_require__(4);
	var NumberInput = __webpack_require__(5);

	module.exports = React.createClass({
		displayName: 'ReactStepper',
		getInitialState: function() {
			return {
				value: 1,
				reachLimit: null
			}
		},
		getDefaultProps: function() {
			return {
				step: 1,
				max: 10,
				min: 0
			}
		},
		propTypes: {
			step: React.PropTypes.number.isRequired,
			max: React.PropTypes.number.isRequired,
			min: React.PropTypes.number.isRequired,
			onValueChange: React.PropTypes.func,
		},
		convertToNumber: function(val) {
			return 'number' === typeof val
				? val
				: Number(this.state.value);
		},
		doAdd: function() {
			this.setState({
				value: this.convertToNumber(this.state.value) + this.props.step 
			});
		},
		doMinus: function() {
			this.setState({
				value: this.convertToNumber(this.state.value) - this.props.step 
			});
		},
		handleChange: function(e) {
			this.setState({
				value: e.target.value 
			});
		},
		componentDidUpdate: function(prevProps, prevState) {
			this.props.onValueChange && this.props.onValueChange(this.state.value, prevState.value);
			var val = this.convertToNumber(this.state.value);
			// check the new value is smaller than Max
			if (val > this.props.max) {
				return this.setState({
					value: this.props.max,
					reachLimit: 'max' 
				});
			}
			// check the new value is bigger than min
			if (val < this.props.min) {
				return this.setState({
					value: this.props.min,
					reachLimit: 'min' 
				});
			}
			this.state.reachLimit = null;
		},
		render: function(){
			return (
				React.createElement("div", null, 
					React.createElement(MinusBtn, {onClick: this.doMinus, disabled: this.state.reachLimit === "min"}), 
					React.createElement(NumberInput, {value: this.state.value, onChange: this.handleChange}), 
					React.createElement(AddBtn, {onClick: this.doAdd, disabled: this.state.reachLimit === "max"})
				)
			)
		}
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(2);

	module.exports = React.createClass({displayName: "exports",
		render: function(){
			return (
				React.createElement("button", {onClick: this.props.onClick, disabled: this.props.disabled}, 
					"+"
				)
			)
		}
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(2);

	module.exports = React.createClass({displayName: "exports",
		render: function(){
			return (
				React.createElement("button", {onClick: this.props.onClick, disabled: this.props.disabled}, 
					"-"
				)
			)
		}
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var React = __webpack_require__(2);

	module.exports = React.createClass({displayName: "exports",
		render: function(){
			return (
				React.createElement("input", {value: this.props.value, onChange: this.props.onChange})
			)
		}
	});

/***/ }
/******/ ])