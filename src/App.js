import React, { Component } from 'react';
import styled from 'styled-components';
import CurrentCityWeather from './components/CurrentCityWeather.jsx';
import { Tab, Tabs } from 'react-bootstrap';
import './App.css';

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
      <div className='container'>
        <Tabs defaultActiveKey={1} animation={false} id='city-tab-content' >
          <Tab eventKey={1} title="Toronto">
            <CurrentCityWeather city='Toronto' />
          </Tab>
          <Tab eventKey={2} title="Ottawa">
            <CurrentCityWeather city='Ottawa' />
          </Tab>
          <Tab eventKey={3} title="Montreal">
            <CurrentCityWeather city='Montreal' />
          </Tab>
        </Tabs>
      </div>
      )
  }
}

export default App
