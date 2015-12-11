var $ = require('jquery');
var _ = require('lodash');
var React =  require('react');
var ReactDOM = require('react-dom');
var NewsList = require('./NewsList');

$.ajax({
	url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
	dataType: 'json'
}).then(function(ids){
	var detailDeferreds = _(ids.slice(0, 30)).map(function(id){
		return $.ajax({
			url: 'https://hacker-news.firebaseio.com/v0/item/' + id + '.json',
			dataType: 'json'
		});
	}).value();
	return $.when.apply($, detailDeferreds);
}).then(function(){
	var items = _(arguments).map(function(argument){
		return argument[0];
	}).value();

	ReactDOM.render(<NewsList items={items} />, $('#content')[0]);
});