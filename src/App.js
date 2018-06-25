import React, { Component } from 'react';
import styled from 'styled-components';
import CurrentCityWeather from './components/CurrentCityWeather.jsx';
import { Button } from 'react-bootstrap';
import API_KEY from './API_KEY';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: null 
    }
  }
  render() {
    return (
      <div>
        <Button onClick={()=>{this.setState({city: 'Toronto'})}}>Toronto</Button>
        <Button onClick={()=>{this.setState({city: 'Montreal'})}}>Montreal</Button>
        <Button onClick={()=>{this.setState({city: 'Ottawa'})}}>Ottawa</Button>
        <CurrentCityWeather city={this.state.city}/>
      </div>
      )
  }
}

export default App
