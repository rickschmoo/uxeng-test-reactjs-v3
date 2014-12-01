var React = require('react');
var UT = require('./userTable.jsx');

var Header = React.createClass({

  render: function() {
    var image_url = UT.IMAGE_URL_PREFIX + UT.getUserImage(UT.currentUser.username);
      return (
      <div className="Header">
        <div className="blogTitle">
          <h3>Star Wars blog </h3>
          <div className="subTitle">
            <span>Brought to you by Richard Boardman</span>
          </div>    
        </div>    
        <div className="currentUser">
            <img src={image_url}/>
        </div>
      </div>
    );
  }
});

exports.Header = Header;
