var React = require('react');
var UT = require('./userTable.jsx');


var PostHeader = React.createClass({

  handleDeleteLinkClick: function(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("User deleted post " + this.props.idx);
    this.setState( { status : "DELETED" } );
    this.props.onPostDeletion();
  },

  render: function() {
    // console.log(this.props.author + " maps to " + userTable[this.props.author].image);
    var image_url = UT.IMAGE_URL_PREFIX + UT.getUserImage(this.props.author);
    // var image_url = "TEST";
    if (this.props.author == UT.currentUser.username) {
      // console.log("SAME USER - CAN DELETE POST " + this.props.idx);
      deleteLinkClasses = "deleteLink userCanDelete";
    } else {
      deleteLinkClasses = "deleteLink";
    }

    return (
      <div className="PostHeader">
        <div className="headerTextContent">
          <div className="post-author">
            {this.props.author}
          </div>
          <div className="post-time">
            {this.props.time}
          </div>
          <div className="post-id">
            ID: {this.props.idx}
          </div>
        </div>
        <div className="avatar">
          <img src={image_url}/>
        </div>
        <div className={deleteLinkClasses}
             onClick={this.handleDeleteLinkClick}>
          delete_me
        </div>
      </div>
    );
  }
});

exports.PostHeader = PostHeader;
