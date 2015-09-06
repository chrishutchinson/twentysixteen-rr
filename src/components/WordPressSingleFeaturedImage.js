'use strict';

var React = require('react/addons');

// Router
var Router = require('react-router');
var Link = Router.Link;

require('styles/WordPressSingleFeaturedImage.scss');

var WordPressSingleFeaturedImage = React.createClass({

  render: function () {
  	if(this.props.post.featured_image) {
	    return (
	      <Link to="post" params={{slug: this.props.post.slug}} className="post-thumbnail" aria-hidden="true">
					<img width="634" height="444" src={this.props.post.featured_image.attachment_meta.sizes.medium.url} className="attachment-post-thumbnail wp-post-image" alt={this.props.post.title} />
				</Link>
	    );
	  }

	  return false;
  }
});

module.exports = WordPressSingleFeaturedImage;
