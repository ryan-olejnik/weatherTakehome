import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../API_KEY';

class CurrentCityWeather extends Component {
  constructor(){
    super();
    this.state = {
      currentWeather: {}
    }
  }

  componentDidMount(){
    console.log('Searching for Toronto');
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: 'Toronto',
        APPID: API_KEY
      }
    })
    .then((response)=>{
      console.log('OpenWeatherAPI response.data =', response.data);
      this.setState({
        isLoading: false,
        currentWeather: { 
          temp: response.data.main.temp,
          pressure: response.data.main.pressure,
          humidity: response.data.main.humidity,
          temp_min: response.data.main.temp_min,
          temp_max: response.data.main.temp_max,
        }
      });
    })
    .catch((error)=>{
      console.log('Error fetching data from OpenWeatherAPI:', error);
    }) 
  }

  render() {

    return (
      <div>
        <h1>Toronto Weather</h1>
        <p>Current Temperature = {this.state.currentWeather.temp}</p>
        <p>Current Pressure = {this.state.currentWeather.pressure}</p>
        <p>Current Humidity = {this.state.currentWeather.humidity}</p>
        <p>Max Daily Temp = {this.state.currentWeather.temp_max}</p>
        <p>Min Daily Temp = {this.state.currentWeather.temp_min}</p>
      </div>

      )
  }
}

export default CurrentCityWeather
