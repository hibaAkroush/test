import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './notifications.css';
import apu from './img/apu.png'
import marge from "./img/marge.png"


const element = <RenderNotifications name="Sara" />;


function RenderNotifications(props) {
	return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
  element,
  document.getElementById('notifications')
);

var notifs = [{
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


var bla = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

