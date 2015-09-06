'use strict';

var React = require('react/addons');

// Libaries
var superagent = require('superagent');

// Components
var WordPressMenuItem = require('./WordPressMenuItem');

require('styles/WordPressMenu.scss');

var WordPressMenu = React.createClass({

	getInitialState: function() {
		// Check our localstorage cache, we may as well load from there if we have it
		if(window.localStorage.getItem(this.constructor.displayName)) {
			return JSON.parse(window.localStorage.getItem(this.constructor.displayName));
		}

		// Nothing in the cache, return empty strings for now
		return {
			menu: []
		};
	},

	setLocalState: function(data) {
		// Store in LocalStorage
		window.localStorage.setItem(this.constructor.displayName, JSON.stringify(data));

		// Store in Component State
		this.setState(data);
	},

	componentWillMount: function() {
		superagent
			.get('http://vagrant.local/wp-json/menus/' + this.props.menu)
			.end(function(err, res) {
				this.setLocalState({
					menu: res.body
				});
			}.bind(this));
	},

  render: function () {
  	var items = [];
  	for(var i = 0; i < this.state.menu.items.length; i++) {
  		items.push(<WordPressMenuItem key={i} item={this.state.menu.items[i]} />);
  	}

    return (
    		<div>
	    		<button id="menu-toggle" className="menu-toggle">Menu</button>
	        <div id="site-header-menu" className="site-header-menu">
						<nav id="site-navigation" className="main-navigation" role="navigation">
							<div className="menu-test-menu-container">
								<ul id="menu-test-menu" className="primary-menu">
									{items}
								</ul>
							</div>
						</nav>
					</div>
				</div>
      );
  }
});

module.exports = WordPressMenu;
