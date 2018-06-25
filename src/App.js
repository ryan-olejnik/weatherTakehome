import React, { Component } from 'react';
import styled from 'styled-components';
import CurrentCityWeather from './components/CurrentCityWeather.jsx';
import API_KEY from './API_KEY';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

class App extends Component {
  render() {
    return <CurrentCityWeather />
  }
}

export default App
