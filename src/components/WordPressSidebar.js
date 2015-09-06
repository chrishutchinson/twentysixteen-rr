'use strict';

var React = require('react/addons');

// Router
var Router = require('react-router');

// Libraries
var superagent = require('superagent');

require('styles/WordPressSidebar.scss');

var WordPressSidebar = React.createClass({

	mixins: [
		Router.Navigation
	],

	doSearch: function( event ) {
		event.preventDefault();

		this.transitionTo('/search/' + this.state.search);
	},

	updateSearchTerm: function( event ) {
		this.setState({
			search: event.target.value
		});
	},

	render: function () {
		return (
				<div id="secondary" className="sidebar widget-area" role="complementary">
					<aside id="search-2" className="widget widget_search">
						<form role="search" method="get" className="search-form" onSubmit={this.doSearch}>
							<label>
								<span className="screen-reader-text">Search</span>
								<input type="search" className="search-field" placeholder="Search …" title="Search for:" onChange={this.updateSearchTerm} />
							</label>

							<input type="submit" className="search-submit screen-reader-text" value="Search" />
						</form>
					</aside>

					<aside id="recent-posts-2" className="widget widget_recent_entries">
						<h2 className="widget-title">Recent Posts</h2>
						<ul>
							<li>
								<a href="http://vagrant.local/2015/06/26/my-new-post/">My New Post</a>
							</li>
							<li>
								<a href="http://vagrant.local/2015/04/26/hello-world/">Hello world!</a>
							</li>
						</ul>
					</aside>
				</div>
			);
	}
});

module.exports = WordPressSidebar;
