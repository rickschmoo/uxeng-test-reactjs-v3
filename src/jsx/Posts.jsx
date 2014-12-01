var React = require('react');
var Post = require('./Post.jsx').Post;
var NewPostForm = require('./NewPostForm.jsx').NewPostForm;

var Posts = React.createClass({

  getInitialState: function() {
    return {
      posts: this.props.posts,
    };
  },

  handleNewPost: function(new_post) {
    console.log("Posts: NEW POST SUBMITTED " + new_post.body);

    /* this.setState({
      posts: this.props.posts
    }); */
    var oldposts = this.state.posts;  
    console.log("Posts: oldposts # = " + oldposts.length);

    var builtpost = {
      'author': new_post.author,
      'username': new_post.username,
      'body': new_post.body,
      'pubdatetime': new_post.pubdatetime ,
      'comments': []
    };

    var newposts = oldposts.concat([builtpost]);
    console.log("Posts: newposts # = " + newposts.length);
    this.setState({
      posts: newposts
    });

  },

  handlePostDeletion: function(idx) {
    console.log("Posts: DELETE LINK CLICKED " + idx);
  },

  render: function() {

    console.log("Posts: props.posts # = " + this.props.posts.length);
    console.log("Posts: state.posts # = " + this.state.posts.length);
    var postNodes = this.state.posts.map(function (blogpost, idx) {
      // console.log("Generated post " + idx);
      return (
       <Post author={blogpost.username}
             comments={blogpost.comments} 
             body={blogpost.body}
             pubdatetime={blogpost.pubdatetime}
             key={idx}
             thiskey={idx}
             onPostDeletionPosts={this.handlePostDeletion}/>
      );
    });

    return (
      <div className="Posts">
        {postNodes}
        <NewPostForm onNewPostSubmit={this.handleNewPost} />
      </div>
    );
  }
});
exports.Posts = Posts;