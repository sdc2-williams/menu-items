import React from 'react';
import Menu from './menu.jsx';
import Item from './item.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
  }

  // componentDidMount(){
  //   fetch('/api/menu')
  //   .then(res => res.json())
  //   .then(menu => this.setState({menu: menu}))
  // }

  render () {
    return (
      <div>
        <h1>Dinner</h1>
        {/* <Menu menuItems = {this.state.menu}/> */}
      </div>)
  }
}
export default App;