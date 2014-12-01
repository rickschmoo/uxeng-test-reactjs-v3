var React = require('react');
var Comment = require('./Comment.jsx').Comment;
var CommentForm = require('./CommentForm.jsx').CommentForm;
var UT = require('./userTable.jsx');


var Comments = React.createClass({

  getInitialState: function() {
    return {
      comments: this.props.comments,
    };
  },

  handleCommentSubmit: function(newcomment) {
    // TODO: submit to the server and refresh the list
    console.log("Comments: NEW COMMENT SUBMITTED " + newcomment.newcomment);

    var oldcomments = this.state.comments;  
    console.log("Comments: oldComments # = " + oldcomments.length);

    var builtcomment = {
      'username': UT.currentUser.username,
      // 'author': currentUser.username,
      'body': newcomment.newcomment,
      'pubdatetime': newcomment.newtime // newcomment.time.toString()
    };

    var newcomments = oldcomments.concat([builtcomment]);
    console.log("Comments: newcomments # = " + newcomments.length);
    this.setState({comments: newcomments});
  },

  render: function() {
    // console.log(this.state.comments);
    var commentNodes = this.state.comments.map(function (comment, idx) {
      return (
       <Comment author={comment.username}
                time={comment.pubdatetime}
                body={comment.body}
                key={idx}/>
      );
    });

    
    // console.log("COMMENTS " + this.props.postid + " - todisplay = " + this.props.todisplay);
    if (this.props.todisplay) {
      commentsClasses = "Comments comments-display";
    } else {
      commentsClasses = "Comments";
    }

    return (
      <div className={commentsClasses}>
        {commentNodes}
        <CommentForm
          className={this.props.toDisplay ? "comments-visible": ""}
          onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
});

exports.Comments = Comments;
