import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './workspace.css';
import logo2 from "./img/apu.png"
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
				<div class="long">
					<p id="text">Lorem ipsum dolor sit amet. </p>
					<img id="logo2" src={logo2}/>
				</div>
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