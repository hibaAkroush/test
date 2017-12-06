import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Left.css';
import sap from './img/sap.jpeg'
import homer from './img/homer.jpeg'

const element = (
	<div>
		<img id="homer" src={homer}/>
		<img id="sap" src={sap}/>
	</div>
	);
ReactDOM.render(
  element,
  document.getElementById('left')
);


