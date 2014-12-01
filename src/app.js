var React = require('react');
var Page = require('./jsx/Page.jsx').Page;

React.render(
  <Page url="data/blog.json" />,
  document.getElementById('blogapp')
);
