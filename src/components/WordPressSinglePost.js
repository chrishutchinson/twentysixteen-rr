'use strict';

var React = require('react/addons');

// Components
var WordPressSingle = require('./WordPressSingle');

require('styles/WordPressSinglePost.scss');

var WordPressSinglePost = React.createClass({

  render: function () {
    return (
        <WordPressSingle type="post" context={this.props.context} post={this.props.post} />
      );
  }
});

module.exports = WordPressSinglePost;
