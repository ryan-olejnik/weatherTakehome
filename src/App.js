import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import API_KEY from './API_KEY';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

class App extends Component {
  render() {
    console.log('searching for Toronto');
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: 'Toronto',
        APPID: API_KEY
      }
    })
    .then((response)=>{
      console.log('OpenWeatherAPI response.data =', response.data);
    })
    .catch((error)=>{
      console.log('Error fetching data from OpenWeatherAPI:', error);
    }) 
    return <Root />
  }
}

export default App
