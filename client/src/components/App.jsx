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
    const id = window.location.pathname.substring(1)
    fetch(`/api/menu/${id}`)
      .then(res => res.json())
      .then(menu => this.setState({ menu }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <h1>Dinner</h1>
        <Menu menuItems={this.state.menu} />
      </div>
    );
  }
}
export default App;
