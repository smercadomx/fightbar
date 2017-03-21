import React from 'react';
import ReactDOM from 'react-dom';
import BarMap from './index.js';

it('renders without crashing test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BarMap />, div);
});
