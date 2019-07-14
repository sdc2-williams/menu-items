import React from 'react';
import Menu from './menu.jsx';
import Item from './item.jsx';
import styled from 'styled-components'

const Container = styled.div`
  @media screen and (min-width: 1060px){
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: content-box;
  }
`
const Title = styled.h2`
  font-family: Calibri, "Helvetica", san-serif;
  width: 100%
  border-bottom: 1px solid #ECEDEF;
  padding-bottom: 3px
`
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
      <Container className="app">
        <Title>Dinner</Title>
        <Menu menuItems={this.state.menu} />
      </Container>
    );
  }
}
export default App;
