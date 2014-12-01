/** @jsx React.DOM */
var React = require('react');
var CommentHeader = require('./CommentHeader.jsx').CommentHeader;

var Comment = React.createClass({
  render: function() {
    return (
      <div className="Comment">
        <CommentHeader author={this.props.author} time={this.props.time} />
        <div className="comment-body">
          {this.props.body}
        </div>
      </div>
    );
  }
});

//module.exports = CommentList;
exports.Comment = Comment;
