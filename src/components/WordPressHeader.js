'use strict';

var React = require('react/addons');

// Router
var Router = require('react-router');
var Link = Router.Link;

// Libraries
var superagent = require('superagent');

// Components
var WordPressMenu = require('./WordPressMenu');

require('styles/WordPressHeader.scss');

var WordPressHeader = React.createClass({

	getInitialState: function() {
		// Check our localstorage cache, we may as well load from there if we have it
		if(window.localStorage.getItem(this.constructor.displayName)) {
			return JSON.parse(window.localStorage.getItem(this.constructor.displayName));
		}

		// Nothing in the cache, return empty strings for now
		return {
			title: '',
			description: ''
		};
	},

	/**
	 * Sets the localstorage state, and continues on to set the state of the React component
	 *
	 * @param data
	 */
	setLocalState: function(data) {
		// Store in LocalStorage
		window.localStorage.setItem(this.constructor.displayName, JSON.stringify(data));

		// Store in Component State
		this.setState(data);
	},

	componentWillMount: function() {
		// Request our data again
		superagent
			.get('http://vagrant.local/wp-json')
			.end(function(err, res) {
				this.setLocalState({
					title: res.body.name,
					description: res.body.description
				});
			}.bind(this));
	},

	render: function () {
		return (
			<header id="masthead" className="site-header" role="banner">
				<div className="site-header-main">
					<div className="site-branding">
						<h1 className="site-title">
							<a href="#">{this.state.title}</a>
						</h1>
						<p className="site-description">{this.state.description}</p>
					</div>

					<WordPressMenu menu="3" />
				</div>
			</header>
			);
	}
});

module.exports = WordPressHeader;
