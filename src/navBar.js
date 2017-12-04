import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navBar.css';

const element = (
<div class="navbar navbar-inverse navbar-fixed-top opaque-navbar">
  <div class="container">
    <div class="navbar-header">
	    <a class="navbar-brand" href="#">Actions</a>
	    <a class="navbar-brand" href="#">Procurnment Overview Page</a>
	    <a class="navbar-brand" href="#">Inbox</a>
	    <a class="navbar-brand" href="#">News</a>
	    <a class="navbar-brand" href="#">Requests</a>
	    <a class="navbar-brand" href="#">Profile</a>
	    <a class="navbar-brand" href="#">Letters</a>
    </div>
  </div>
</div>

	);
ReactDOM.render(
  element,
  document.getElementById('navBar')
);
