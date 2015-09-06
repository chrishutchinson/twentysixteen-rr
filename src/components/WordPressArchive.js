'use strict';

var React = require('react/addons');


// Libraries
var superagent = require('superagent');

// Components
var WordPressSinglePost = require('./WordPressSinglePost');


require('styles/WordPressArchive.scss');

var WordPressArchive = React.createClass({

	getInitialState: function() {
		// Check our localstorage cache, we may as well load from there if we have it
		if(window.localStorage.getItem(this.constructor.displayName)) {
			return JSON.parse(window.localStorage.getItem(this.constructor.displayName));
		}

		// Nothing in the cache, return empty strings for now
		return {
			posts: []
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
			.get('http://vagrant.local/wp-json/posts')
			.end(function(err, res) {
				this.setLocalState({
					posts: res.body
				});
			}.bind(this));
	},

  render: function () {
  	var posts = [];
  	for(var i = 0; i < this.state.posts.length; i++) {
  		posts.push(<WordPressSinglePost key={i} context="archive" post={this.state.posts[i]} />);
  	}

    return (
        <main id="main" className="site-main" role="main">
        	{posts}
        </main>
      );
  }
});

module.exports = WordPressArchive;
