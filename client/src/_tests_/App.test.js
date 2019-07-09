import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App.jsx';

describe('Rendering first component', () => {
  it('renders without crashing', () => {
   shallow(<App/>)
  })
})
