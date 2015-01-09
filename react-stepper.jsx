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