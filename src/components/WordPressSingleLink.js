'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;


require('styles/WordPressSingleLink.scss');

var WordPressSingleLink = React.createClass({

  render: function () {
  	switch(this.props.context) {
  		case 'archive':
  		  return (
		        <Link to="post" params={{slug: this.props.post.slug}}>{this.props.post.title}</Link>
		      );
  			break;
  		case 'single':
  		default:
		    return (
		      	<span>{this.props.post.title}</span>
		      );
  			break;
  	}
  }
});

module.exports = WordPressSingleLink;
