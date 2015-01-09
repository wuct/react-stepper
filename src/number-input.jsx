var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<input value={this.props.value} onChange={this.props.onChange}/>
		)
	}
});