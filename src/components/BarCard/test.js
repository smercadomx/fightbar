import React from 'react';
import ReactDOM from 'react-dom';
import BarCard from './index.js';

it('renders without crashing test', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BarCard />, div);
});
