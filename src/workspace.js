import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './workspace.css';

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
			<p class="text">Lorem ipsum dolor sit amet. </p>
			<img id="logo" src=""/>
		</div>
		<div class="conta">
			<h5>Lorem ipsum</h5>
			<h7>Neque porro</h7>
		</div>

	</div>

	);
ReactDOM.render(
  element,
  document.getElementById('workspace')
);