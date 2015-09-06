'use strict';

var React = require('react/addons');
var Router = require('react-router');

// Libraries
var superagent = require('superagent');

// Components
var WordPressHeader = require('./WordPressHeader');
var WordPressFooter = require('./WordPressFooter');
var WordPressSidebar = require('./WordPressSidebar');
var WordPressSinglePost = require('./WordPressSinglePost');

require('styles/WordPressSearch.scss');

var WordPressSearch = React.createClass({

	mixins: [ Router.State ],

	getInitialState: function() {
		// Check our localstorage cache, we may as well load from there if we have it
		if(window.localStorage.getItem(this.constructor.displayName + '-' + this.props.params.term)) {
			return JSON.parse(window.localStorage.getItem(this.constructor.displayName + '-' + this.props.params.term));
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
		window.localStorage.setItem(this.constructor.displayName + '-' + this.props.params.term, JSON.stringify(data));

		// Store in Component State
		this.setState(data);
	},

	componentWillMount: function() {
		superagent
			.get('http://vagrant.local/wp-json/posts?filter[s]=' + this.props.params.term)
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
        <div className="site">
		      <WordPressHeader />

		    		<div id="content" className="site-content">

				      <div id="primary" className="content-area">
				      	<main id="main" className="site-main" role="main">
				      		<header className="page-header">
										<h1 className="page-title">Search Results for: <span>{this.props.params.term}</span></h1>
									</header>
				      		{posts}
				      	</main>
				      </div>

				      <WordPressSidebar />
				    </div>

		      <WordPressFooter />
		    </div>
      );
  }
});

module.exports = WordPressSearch;
