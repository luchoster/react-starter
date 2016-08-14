var React = require('react')

var {
	div,
	img,
	h2,
	p
} = React.DOM

var HelloComponent = React.createClass({
	render () {
		return (
			div(
				{className: 'app'},
				div(
					{className: 'app-header' },
					img({
								className: 'app-logo',
								alt: 'logo',
								src: '../app/style/logo.svg'
					}),
					h2({}, this.props.string)
				),
				<p className="app-intro">To get started, edit <code>src/App.js</code> and save to reload.</p>
			)
		);
	}
});

module.exports = HelloComponent