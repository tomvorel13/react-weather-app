import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./Components/search-bar";

const API_KEY = "c5c58670c32db956ece142ae13d1759f";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "London",
      country: "",
      temperature: 0,
      humidity: 0,
      pressure: 0,
      weather: ""
    };

    this.citySearch = this.citySearch.bind(this);
  }

  componentDidMount() {
    this.axioSearch();
  }

  axioSearch(city) {
    let cityName = city || this.state.city;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}`
      )
      .then(
        function(response) {
          this.setState({
            city: response.data.name,
            country: response.data.sys.country,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            pressure: response.data.main.pressure,
            weather: response.data.weather[0].main
          });
        }.bind(this)
      )
      .catch(function(error) {
        console.log(error);
      });
  }

  citySearch(city) {
    this.axioSearch(city);
  }

  render() {
    return (
      <div className="container">
        <div className="main">
          <h1 id="mainHeading">WeatherNOW</h1>
          <SearchBar onSearchTermChange={this.citySearch} />
          <br />
          <h2 className="weatherDesc">{this.state.weather}</h2>
          <h3 className="cityName">
            {this.state.city}, {this.state.country}
          </h3>
          <p className="tempText">
            {Math.round(this.state.temperature - 273.15)} °C
          </p>
          <p className="humidText">Humidity: {this.state.humidity} %</p>
          <p className="pressText">{this.state.pressure} hPa</p>
        </div>
      </div>
    );
  }
}

export default App;
