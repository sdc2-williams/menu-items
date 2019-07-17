import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App.jsx';
import Item from '../components/item.jsx'


const wrapper = mount(<App />);


describe('Rendering App component', () => {
  it('renders without crashing', () => {
    expect(wrapper.find('.app').exists()).toBe(true);
  });
});

describe('Rendering Item component', () => {
  it('renders without crashing', () => {
    expect(wrapper.find('.menu').exists()).toBe(true);
  });
});

