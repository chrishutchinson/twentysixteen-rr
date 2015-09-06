'use strict';

var TwentysixteenRrApp = require('./TwentysixteenRrApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

// Components
var WordPressHeader = require('./WordPressHeader');
var WordPressFooter = require('./WordPressFooter');
var WordPressSidebar = require('./WordPressSidebar');
var WordPressIndex = require('./WordPressIndex');
var WordPress404 = require('./WordPress404');
var WordPressArchive = require('./WordPressArchive');
var WordPressSinglePost = require('./WordPressSinglePost');
var WordPressSinglePage = require('./WordPressSinglePage');
var WordPressSearch = require('./WordPressSearch');

var app = document.getElementById('app');

var Routes = (
	<Route>
		<Route name="home" path="/" handler={WordPressIndex} />
		<Route name="posts">
			<Route handler={WordPressArchive} />
			<Route name="post" path="/posts/:slug" handler={WordPressSinglePost} />
		</Route>
		<Route name="author" path="/author/:slug" handler={WordPressIndex} />
		<Route name="category" path="/category/:slug" handler={WordPressIndex} />
		<Route name="search" path="/search/:term" handler={WordPressSearch} />
  	<Route name="404" handler={WordPress404} />
		<Route name="page" path=":slug" handler={WordPressSinglePage} />
  	<NotFoundRoute handler={WordPress404} />
	</Route>
);

Router.run(Routes, function (Handler) {
  React.render(
    <Handler/>
    , app);
});
