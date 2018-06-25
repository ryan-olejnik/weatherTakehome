import React, { Component } from 'react';
import axios from 'axios';
import API_KEY from '../API_KEY';
import { Grid, Row, Col } from 'react-bootstrap';
import './CurrentCityWeather.css';

class CurrentCityWeather extends Component {
  constructor(){
    super();
    this.state = {
      currentWeather: {},
      isLoading: true,
      API_error: false
    }
  }

  getWeatherData(city){
    console.log('Fetching weather data for:', city);
    axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        APPID: API_KEY
      }
    })
    .then((response)=>{
      console.log('OpenWeatherAPI response.data =', response.data);
      this.setState({
        isLoading: false,
        currentWeather: { 
          temp: Math.round(response.data.main.temp - 273),
          pressure: response.data.main.pressure / 1000,
          humidity: response.data.main.humidity,
          temp_min: Math.round(response.data.main.temp_min - 273),
          temp_max: Math.round(response.data.main.temp_max - 273),
          wind_speed: response.data.wind.speed,
          icon: response.data.weather[0].icon,
          description: response.data.weather[0].description
        }
      });
    })
    .catch((error)=>{
      console.log('Error fetching data from OpenWeatherMap API:', error);
      this.setState({API_error: true})
    }) 
  }

  componentDidMount(){
    this.getWeatherData(this.props.city)
  }

  render() {
    if (this.state.API_error){
      return (<h1>Error fetching weather data from OpenWeatherMap API</h1>)
    } else if (this.state.isLoading){
      return (<h1>Loading City Data...</h1>);
    } else {
      return (
        <Grid id='weather-container'>
          <Row>
            <Col md={6} id='left-column'>
              <img id='weather-logo' alt='weather-logo' src={`http://openweathermap.org/img/w/${this.state.currentWeather.icon}.png`} />
              <p>{
                this.state.currentWeather.description.replace(/\w\S*/g, function(txt){
                  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                })}
                </p>
              <p>{this.state.currentWeather.temp}°C</p>
            </Col>
            <Col md={6} id='right-column'>
              <p>Daily High = {this.state.currentWeather.temp_max}°C</p>
              <p>Daily Low = {this.state.currentWeather.temp_min}°C</p>
              <p>Air Pressure = {this.state.currentWeather.pressure}kPa</p>
              <p>Humidity = {this.state.currentWeather.humidity}%</p>
              <p>WindSpeed = {this.state.currentWeather.wind_speed}m/s</p>
            </Col>
          </Row>
        </Grid>
        )      
    }
  }
}

export default CurrentCityWeather
