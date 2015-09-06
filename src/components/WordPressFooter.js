'use strict';

var React = require('react/addons');


require('styles/WordPressFooter.scss');

var WordPressFooter = React.createClass({

	render: function () {
		return (
				<footer id="colophon" className="site-footer" role="contentinfo">
					<div className="site-info">
						<span className="site-title"><a href="http://vagrant.local/" rel="home">WordPress Site</a></span>
						<a href="https://wordpress.org/">Proudly powered by WordPress</a>
					</div>
				</footer>
			);
	}
});

module.exports = WordPressFooter;
