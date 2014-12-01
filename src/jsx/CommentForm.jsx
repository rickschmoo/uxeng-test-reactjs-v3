var React = require('react');

var CommentForm = React.createClass({
  
  handleNewCommentSubmit: function(e) {
    e.preventDefault();
    var newcomment = this.refs.newcomment.getDOMNode().value.trim();
    if (!newcomment) {
      return;
    }
    console.log("NewCommentForm: received new comment " + newcomment);
    this.refs.newcomment.getDOMNode().value = '';
    var currentDate = new Date();
    this.props.onCommentSubmit({
      'newcomment': newcomment,
      'newtime': currentDate.toString()
    });
  },

  render: function() {
    return (
        <form className="CommentForm"
              onSubmit={this.handleNewCommentSubmit}>
          <input className="NewCommentFormSubmit"
                 type="text"
                 id="newcomment"
                 ref="newcomment"/>
          <button>Post</button>
        </form>
    );
  }
});
exports.CommentForm = CommentForm;