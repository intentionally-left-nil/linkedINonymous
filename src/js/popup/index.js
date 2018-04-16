import React from 'react';
import { render } from 'react-dom';
import App from './App';


const container = document.getElementById('app-container');
render(<App />, container);

chrome.browserAction.setIcon({
  path: {
    16: 'graylogo-16.png',
    32: 'graylogo-32.png',
    48: 'graylogo-48.png',
    128: 'graylogo-128.png',
  },
});
