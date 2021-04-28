console.log("Webpack is working");

import React from 'react';
import ReactDOM from 'react-dom';
import Game from '../component/game'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Game/>, root);
})