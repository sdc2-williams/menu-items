import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';

const wrapper = shallow(<App />);


describe('Rendering first component', () => {
  it('renders without crashing', () => {
    expect(wrapper.find('.app').exists()).toBe(true);
  });
});
