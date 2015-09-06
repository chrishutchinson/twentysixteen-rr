'use strict';

var React = require('react/addons');

// Components
var WordPressSingle = require('./WordPressSingle');

require('styles/WordPressSinglePage.scss');

var WordPressSinglePage = React.createClass({

  render: function () {
    return (
        <WordPressSingle type="page" context={this.props.context} post={this.props.post} />
      );
  }
});

module.exports = WordPressSinglePage;
