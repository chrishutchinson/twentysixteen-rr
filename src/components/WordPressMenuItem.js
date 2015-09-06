'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

// Libraries
var superagent = require('superagent');


require('styles/WordPressMenuItem.scss');

var WordPressMenuItem = React.createClass({

	getInitialState: function() {
		// Check our localstorage cache, we may as well load from there if we have it
		if(window.localStorage.getItem(this.constructor.displayName + '-' + this.props.item.ID)) {
			return JSON.parse(window.localStorage.getItem(this.constructor.displayName + '-' + this.props.item.ID));
		}

		// Nothing in the cache, return empty strings for now
		return {
			object: {
				slug: ''
			}
		};
	},

	setLocalState: function(data) {
		// Store in LocalStorage
		window.localStorage.setItem(this.constructor.displayName + '-' + this.props.item.ID, JSON.stringify(data));

		// Store in Component State
		this.setState(data);
	},

	componentWillMount: function() {
		switch(this.props.item.type) {
			case 'post_type':
				superagent
					.get('http://vagrant.local/wp-json/posts/' + this.props.item.object_id)
					.end(function(err, res) {
						this.setLocalState({
							object: res.body
						});
					}.bind(this));
				break;
			case 'taxonomy':
				break;
			case 'custom':
				this.setLocalState({
					object: {
						slug: ''
					}
				});
				break;
		}
	},

  render: function () {
  	switch(this.props.item.type) {
  		case 'post_type':
  			switch(this.props.item.object) {
  				case 'post':
  					var link = <Link to="post" params={{slug: this.state.object.slug}}>{this.props.item.title}</Link>;
  					break;
  				case 'page':
  				default:
  					var link = <Link to="page" params={{slug: this.state.object.slug}}>{this.props.item.title}</Link>;
  					break;
  			}
  			break;
  		default:
  			var link = <Link to="page" params={{slug: this.state.object.slug}}>{this.props.item.title}</Link>;
  			break;
  	}
    return (
        <li id="menu-item-{this.props.item.ID}" className="menu-item menu-item-type-{this.props.item.type} menu-item-object-{this.props.item.object} menu-item-{this.props.item.ID}">
					{link}
				</li>
      );
  }
});

module.exports = WordPressMenuItem;
