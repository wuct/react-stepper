var React = require('react')
var AddBtn = require('./add-btn.jsx');
var MinusBtn = require('./minus-btn.jsx');
var NumberInput = require('./number-input.jsx');

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
			<div>
				<MinusBtn onClick={this.doMinus} disabled={this.state.reachLimit === "min"}/>
				<NumberInput value={this.state.value} onChange={this.handleChange} />
				<AddBtn onClick={this.doAdd} disabled={this.state.reachLimit === "max"}/>
			</div>
		)
	}
});