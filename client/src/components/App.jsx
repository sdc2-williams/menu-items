import React from 'react';
import Menu from './menu.jsx';
import Item from './item.jsx';

const fetch = require('node-fetch');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
    };
  }

  componentDidMount() {
    fetch('/api/menu')
      .then(res => res.json())
      .then(menu => this.setState({ menu }));
  }

  render() {
    console.log(this.state.menu)
    return (
      <div className="app">
        <h1>Dinner</h1>
        <Menu menuItems={this.state.menu} />
      </div>
    );
  }
}
export default App;
