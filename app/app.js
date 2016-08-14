var React = require('react')
var ReactDOM = require('react-dom')
var HelloComponent = require('./components/hello-component')

import './style/app.css'

var {
	div
} = React.DOM


var App = React.createClass({
	render () {
		return (
			<HelloComponent string="H3ll0 W0rld!" />
		);
	}
});

ReactDOM.render(
	<App />, 
	document.getElementById('app')
);