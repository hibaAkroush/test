import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Right.css';
import search from './img/search.png'
import setting from './img/setting.png'
import edit from './img/edit.svg'

const element = (
	<div>
		<img id="search" src={search}/>
		<img id="setting" src={setting}/>
		<img id="edit" src={edit}/>
	</div>
	);
ReactDOM.render(
  element,
  document.getElementById('right')
);