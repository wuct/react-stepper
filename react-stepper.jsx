var React = require('react')
var AddBtn = require('./src/add-btn.jsx');
var MinusBtn = require('./src/minus-btn.jsx');
var NumberInput = require('./src/number-input.jsx');

module.exports = React.createClass({
	displayName: 'ReactStepper',
	getInitialState: function() {
		return {
			value: 1
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
	},
	doAdd: function() {
		this.setState({
			value: this.state.value + this.props.step 
		});
	},
	doMinus: function() {
		this.setState({
			value: this.state.value - this.props.step 
		});
	},
	handleChange: function(e) {
		console.log('change', e.target.value);
		// 
		this.setState({
			value: e.target.value 
		});
	},
	componentDidUpdate: function(prevProps, prevState) {
		var val = parseFloat(this.state.value);
		// check the new value is still a number
		console.log('val', val)
		if (isNaN(parseFloat(val)) || !isFinite(val)) {
			console.log('not number')
			console.log('prevState', prevState.value)
			this.setState({
				value: prevState.value 
			});
		}
		// check the new value is smaller than Max
		if (val > this.props.max) {
			this.state.value = this.props.max;
		}
		// check the new value is bigger than min
		if (val < this.props.min) {
			this.state.value = this.props.min;
		}
	},
	render: function(){
		return (
			<div>
				<MinusBtn onClick={this.doMinus} />
				<NumberInput value={this.state.value} onChange={this.handleChange} />
				<AddBtn onClick={this.doAdd} />
			</div>
		)
	}
});