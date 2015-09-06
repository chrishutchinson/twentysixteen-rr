'use strict';

var React = require('react/addons');

// Components
var WordPressHeader = require('./WordPressHeader');
var WordPressFooter = require('./WordPressFooter');
var WordPressArchive = require('./WordPressArchive');
var WordPressSidebar = require('./WordPressSidebar');

require('styles/WordPressIndex.scss');

var WordPressIndex = React.createClass({

  render: function () {
    return (
    		<div className="site">
		      <WordPressHeader />

		    		<div id="content" className="site-content">

				      <div id="primary" className="content-area">
				      	<WordPressArchive context="index" />
				      </div>

				      <WordPressSidebar />
				    </div>

		      <WordPressFooter />
		    </div>
      );
  }
});

module.exports = WordPressIndex;
