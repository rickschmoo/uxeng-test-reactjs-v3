var React = require('react');
var UT = require('./userTable.jsx');
var NewPostForm = React.createClass({

  handleNewPostSubmit: function(e) {
    e.preventDefault();

    var newpost_body = this.refs.newpost.getDOMNode().value.trim();
    if (!newpost_body) {
      return;
    }
    console.log("NewPostForm: received new post value " + newpost_body);
    this.refs.newpost.getDOMNode().value = '';
    var currentDate = new Date();
    this.props.onNewPostSubmit({
        'username': UT.currentUser.username,
        'pubdatetime': currentDate.toString(),
        'body': newpost_body,
        'comments': []
    });
  },

  render: function() {
    return (
      <form className="NewPostForm"
            onSubmit={this.handleNewPostSubmit}>
        <input className="NewPostFormSubmit"
               type="text"
               id="newpost"
               ref="newpost"/>
        <button>Post</button>
      </form>
    );
  }
});
exports.NewPostForm = NewPostForm;
