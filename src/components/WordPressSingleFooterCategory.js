'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;


require('styles/WordPressSingleFooterCategory.scss');

var WordPressSingleFooterCategory = React.createClass({

  render: function () {
  	var separator = <span>,&nbsp;</span>;
  	if(this.props.last === 'true') {
  		separator = <span></span>;
  	}
    return (
    		<span>
        	<Link to="category" params={{slug: this.props.category.slug}} rel="category tag">{this.props.category.name}</Link>{separator}
      	</span>
      );
  }
});

module.exports = WordPressSingleFooterCategory;
