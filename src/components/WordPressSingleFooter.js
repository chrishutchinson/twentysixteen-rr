'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

// Libraries
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;
var FormattedDate = ReactIntl.FormattedDate;

// Components
var WordPressSingleFooterCategory = require('./WordPressSingleFooterCategory');

require('styles/WordPressSingleFooter.scss');

var WordPressSingleFooter = React.createClass({

	mixins: [
		IntlMixin
	],

  render: function () {
  	var categories = [];
  	var maxCategories = this.props.post.terms.category.length;
  	maxCategories--;
  	for(var i = 0; i < this.props.post.terms.category.length; i++) {
  		var last = "false;"
  		if(i === maxCategories) {
  			last = "true";
  		}

  		categories.push(<WordPressSingleFooterCategory key={i} last={last} category={this.props.post.terms.category[i]} />);
  	}

    return (
        <footer className="entry-footer">
					<span className="byline">
						<span className="author vcard">
							<img alt="" src={this.props.post.author.avatar} className="avatar avatar-49 photo" height="49" width="49" />
							<span className="screen-reader-text">Author </span>
							<Link to="author" params={{slug: this.props.post.author.slug}} className="url fn n">{this.props.post.author.name}</Link>
						</span>
					</span>

					<span className="posted-on">
						<span className="screen-reader-text">Posted on </span>
						<Link to="post" params={{slug: this.props.post.slug}} rel="bookmark">
							<time className="entry-date published" dateTime={this.props.post.date}>
								<FormattedDate
                    value={this.props.post.date}
                    day="numeric"
                    month="long"
                    year="numeric" />
              </time>
							<time className="updated" dateTime={this.props.post.modified}>
								<FormattedDate
                    value={this.props.post.modified}
                    day="numeric"
                    month="long"
                    year="numeric" />
							</time>
						</Link>
					</span>

					<span className="cat-links">
						<span className="screen-reader-text">Categories </span>
						{categories}
					</span>
				</footer>
      );
  }
});

module.exports = WordPressSingleFooter;
