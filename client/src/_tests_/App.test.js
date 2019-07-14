import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';


const wrapper = mount(<App />);

beforeEach(() => {
  wrapper.mount();
});

describe('Rendering App component', () => {
  it('renders without crashing', () => {
    expect(wrapper.find('.app').exists()).toBe(true);
  });
});
