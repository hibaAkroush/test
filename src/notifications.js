import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './notifications.css';
import apu from './img/apu.png'
import marge from "./img/marge.png"

const numbers = [{
	header: "Lorem ipsum",
	text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"30 minutes ago",
	pic: ""
},
{
	header: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	text:"",
	time:"37 minutes ago",
	pic: ""
},
{
	header: "consectetur adipiscing ipsum incididunt elit",
	text:"",
	time:"50 minutes ago",
	pic: ""
},
{
	header: "eiusmod tempor incididunt",
	text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"52 minutes ago",
	pic: ""
}];
const listItems = numbers.map((number) =>
  <li>
  <div class="container">
  	<div class="head"><p>{number.header}</p></div>
	  	<div class="body">
		  	<p>{number.text}</p>
		  	<img src={number.pic}/>
	  	</div>
  	<div class="time"><p>{number.time}</p></div>
  </div>
  </li>
);


ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('notifications')
);



var bla = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

