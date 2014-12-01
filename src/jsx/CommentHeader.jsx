var React = require('react');
var UT = require('./userTable.jsx');

var CommentHeader = React.createClass({
  render: function() {
    var image_url = UT.IMAGE_URL_PREFIX + UT.getUserImage(this.props.author);
    return (
      <div className="CommentHeader">
        <div className="commentHeaderTextContent">
          <div className="comment-author">
            {this.props.author}
          </div>
          <div className="comment-time">
            {this.props.time}
          </div>
        </div>
        <div className="avatar">
          <img src={image_url}/>
        </div>
      </div>
    );
  }
});

exports.CommentHeader = CommentHeader;
