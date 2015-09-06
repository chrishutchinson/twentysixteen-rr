'use strict';

var React = require('react/addons');

// Components
var WordPressHeader = require('./WordPressHeader');
var WordPressFooter = require('./WordPressFooter');
var WordPressSidebar = require('./WordPressSidebar');

require('styles/WordPress404.scss');

var WordPress404 = React.createClass({

  render: function () {
    return (
    		<div className="site">
		      <WordPressHeader />

		    		<div id="content" className="site-content">

				      <div id="primary" className="content-area">
				      	<main id="main" className="site-main" role="main">

									<section className="error-404 not-found">
										<header className="page-header">
											<h1 className="page-title">Oops! That page can’t be found.</h1>
										</header>

										<div className="page-content">
											<p>It looks like nothing was found at this location. Maybe try a search?</p>

											<form role="search" method="get" className="search-form" action="http://vagrant.local/">
												<label>
													<span className="screen-reader-text">Search for:</span>
													<input type="search" className="search-field" placeholder="Search …" value="" name="s" title="Search for:" />
												</label>
												<input type="submit" className="search-submit screen-reader-text" value="Search" />
											</form>
										</div>
									</section>

								</main>
				      </div>

				      <WordPressSidebar />
				    </div>

		      <WordPressFooter />
		    </div>
      );
  }
});

module.exports = WordPress404;
