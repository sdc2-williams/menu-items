import React from 'react';
import ReactDOM from 'react-dom';
import index from './index.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>.div);
  console.log('true')
  ReactDOM.unmountComponentAtNode(div)
})