import React from 'react';
import Menu from './menu.jsx';
import Item from './item.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  componentDidMount(){
    fetch('/api/menu')
    .then(res => res.json())
    .then(menu => this.setState({menu: menu}))
  }

  handleItemClick(e){
    console.log(e.target.parentNode.id)
  }

  render () {
    return (
      <div className = 'app'>
        <h1>Dinner</h1>
        <Menu menuItems = {this.state.menu} handleItemClick={this.handleItemClick}/>
      </div>)
  }
}
export default App;