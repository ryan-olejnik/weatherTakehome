import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../API_KEY';

class CurrentCityWeather extends Component {
  constructor(){
    super();
    this.state = {
      currentWeather: {},
      isLoading: true
    }
  }

  componentDidMount(){
    console.log('Searching for Toronto');
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: 'toronto',
        APPID: API_KEY
      }
    })
    .then((response)=>{
      console.log('OpenWeatherAPI response.data =', response.data);
      this.setState({
        isLoading: false,
        currentWeather: { 
          temp: Math.round(response.data.main.temp - 273),
          pressure: response.data.main.pressure,
          humidity: response.data.main.humidity,
          temp_min: Math.round(response.data.main.temp_min - 273),
          temp_max: Math.round(response.data.main.temp_max - 273)
        }
      });
    })
    .catch((error)=>{
      console.log('Error fetching data from OpenWeatherAPI:', error);
    }) 
  }

  render() {
    if (this.state.isLoading){
      return (<h1>Loading City Data...</h1>)
    } else {
      return (
        <div>
          <h1>Toronto Weather</h1>
          <p>Current Temperature = {this.state.currentWeather.temp}°C</p>
          <p>Current Pressure = {this.state.currentWeather.pressure}°C</p>
          <p>Current Humidity = {this.state.currentWeather.humidity}°C</p>
          <p>Max Daily Temp = {this.state.currentWeather.temp_max}°C</p>
          <p>Min Daily Temp = {this.state.currentWeather.temp_min}°C</p>
        </div>
        )      
    }
  }
}

export default CurrentCityWeather
