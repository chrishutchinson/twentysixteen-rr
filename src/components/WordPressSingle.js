'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;


// Libraries
var superagent = require('superagent');

// Components
var WordPressHeader = require('./WordPressHeader');
var WordPressFooter = require('./WordPressFooter');
var WordPressSidebar = require('./WordPressSidebar');
var WordPressSingleLink = require('./WordPressSingleLink');
var WordPressSingleFeaturedImage = require('./WordPressSingleFeaturedImage');
var WordPressSingleFooter = require('./WordPressSingleFooter');

require('styles/WordPressSingle.scss');

var WordPressSingle = React.createClass({

	mixins: [
		Router.State,
		Router.Navigation
	],

  contextTypes: {
    router: React.PropTypes.func
  },

	getInitialState: function() {
		// Check if post data has been sent through with the component, use that
		if(this.props.post) {
			return {
				post: this.props.post
			};
		} else {
			// Check our localstorage cache, we may as well load from there if we have it
			if(window.localStorage.getItem(this.constructor.displayName + '-' + this.getParams().slug)) {
				return JSON.parse(window.localStorage.getItem(this.constructor.displayName + '-' + this.getParams().slug));
			}
		}

		// Nothing there either, return empty strings for now
		return {
			post: {}
		}
	},

	/**
	 * Sets the localstorage state, and continues on to set the state of the React component
	 *
	 * @param data
	 */
	setLocalState: function(data, extension) {
		// Store in LocalStorage
		window.localStorage.setItem(this.constructor.displayName + extension, JSON.stringify(data));

		// Store in Component State
		this.setState(data);
	},

	componentWillMount: function() {
		if(typeof this.props.post === 'undefined' || typeof this.props.post.ID === 'undefined') {
			// Request our data again
			superagent
				.get('http://vagrant.local/wp-json/posts?filter[name]=' + this.getParams().slug)
				.end(function(err, res) {
					this.setLocalState({
						post: res.body[0]
					}, '-' + this.getParams().slug);
				}.bind(this));
		} else {
			this.setLocalState({
				post: this.props.post
			}, '-' + this.props.post.slug);
		}
	},

	render: function () {
		if(this.props.type === 'post') {

			if(typeof this.state.post.ID === 'undefined') {
				return (
					<div>Loading...</div>
					);
			}

			if(this.props.context === 'archive') {
				return (
						<article id="post-16" className="post-{this.state.post.ID} post type-post status-publish format-standard has-post-thumbnail hentry category-themeconf category-uncategorized">
							<header className="entry-header">
								<h2 className="entry-title">
									<WordPressSingleLink post={this.state.post} context={this.props.context} />
								</h2>
							</header>

							<div className="entry-summary" dangerouslySetInnerHTML={{__html: this.state.post.excerpt}}></div>

							<WordPressSingleFeaturedImage post={this.state.post} />

							<div className="entry-content" dangerouslySetInnerHTML={{__html: this.state.post.content}}></div>

							<WordPressSingleFooter post={this.state.post} />
						</article>
					);
			}

			return (
				<div className="site">
		      <WordPressHeader />

		    		<div id="content" className="site-content">

				      <div id="primary" className="content-area">
				      	<main id="main" className="site-main" role="main">

									<article id="post-16" className="post-{this.state.post.ID} post type-post status-publish format-standard has-post-thumbnail hentry category-themeconf category-uncategorized">
										<header className="entry-header">
											<h2 className="entry-title">
												<WordPressSingleLink post={this.state.post} context={this.props.context} />
											</h2>
										</header>

										<div className="entry-summary" dangerouslySetInnerHTML={{__html: this.state.post.excerpt}}></div>

										<WordPressSingleFeaturedImage post={this.state.post} />

										<div className="entry-content" dangerouslySetInnerHTML={{__html: this.state.post.content}}></div>

										<WordPressSingleFooter post={this.state.post} />
									</article>

								</main>
				      </div>

				      <WordPressSidebar />
				    </div>

		      <WordPressFooter />
		    </div>
			);
		}

		return (
				<div className="site">
		      <WordPressHeader />

		    		<div id="content" className="site-content">

				      <div id="primary" className="content-area">
				      	<main id="main" className="site-main" role="main">

									Not a post, probably a page or something

								</main>
				      </div>

				      <WordPressSidebar />
				    </div>

		      <WordPressFooter />
		    </div>
			);
	}
});

module.exports = WordPressSingle;
