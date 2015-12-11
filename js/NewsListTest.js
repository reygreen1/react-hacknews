var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var NewsList = require('./NewsList');

$.ajax({
	url: '/json/items.json'
}).then(function(items){
	ReactDOM.render(<NewsList items={items}/>, $('#content')[0]);
});