import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './lorem.css';
import logo from './img/logo.png' 
import logo1 from './img/logo1.png' 
import logo2 from './img/logo2.png' 

const element = (
	<div class="contain">
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
		<div class="conta box1">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
			<img id="logo" src={logo}/>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
		<div class="conta box2">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
			<img id="logo1" src={logo1}/>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
		<div class="conta box3">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro </h7>
			<img id="logo2" src={logo2}/>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>
	</div>

	);
ReactDOM.render(
  element,
  document.getElementById('lorem')
);