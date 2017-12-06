import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './notifications.css';
import apu from './img/apu.ico'
import marge from "./img/marge.jpg"
import x from './img/x.png'
import $ from 'jquery';
//

const numbers = [{
	header: "my super market burned down!",
	text:"consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"30 minutes ago",
	bla: "sed do",
	pic: apu
},
{
	header: "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	text:"",
	bla: "adipiscing",
	time:"37 minutes ago"
},
{
	header: "consectetur adipiscing ipsum incididunt elit",
	text:"",
	bla: "eiusmod",
	time:"50 minutes ago"
},
{
	header: "you are the best husband ever",
	text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
	time:"52 minutes ago",
	bla: "tempor",
	pic: marge
}];


//replace by for cooler efect:
//arrayColors[Math.floor(Math.random() * arrayColors.length)]}}>
const arrayColors = ["#ECF5FD","#BEE7AF","#E0C660","#E17777"]
var i = 0;
const listItems = numbers.map((number) =>
  <li class="list">
	<div class="side">
	</div>
	<div class="containerN" style={{borderColor:arrayColors[i++]}}>
		<div class="divx">
		<a href="https://www.youtube.com/watch?v=SzoIJdjR5wA"><img class="x" src={x}/></a>
		</div>
		<div class="head"><p>{number.header}</p></div>
	  	<div class="body">
		  	<img class="imgnoti" src={number.pic}/>
		  	<p>{number.text}</p>
	  	</div>
		<div class="time"><p>{number.bla}{ " - " }{number.time}</p></div>
	</div>
  </li>
);


ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('notifications')
);



var bla = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

