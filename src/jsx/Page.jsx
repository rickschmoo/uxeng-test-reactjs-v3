var React = require('react');
var $ = require('jquery');
var Header = require('./Header.jsx').Header;
var Posts = require('./Posts.jsx').Posts;
var UT = require('./userTable.jsx');

var Page = React.createClass({

  loadBlogFromServer: function() {
    console.log("Loading data ...");
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      async: false,
      success: function(data) {
        this.setState({
          data: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  getInitialState: function() {
    return {
      currentUser: UT.currentUser,
      data: []
    };
  },

  componentWillMount: function() {
    this.loadBlogFromServer();
  },

  render: function() {
    return (
      <div className="Page">
        <Header currentUser={this.state.currentUser}/>
        <Posts posts={this.state.data}
               currentUser={this.state.currentUser}/>
      </div>
    );
  }
});

exports.Page = Page;