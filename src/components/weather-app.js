import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./search-bar";

const API_KEY = "c5c58670c32db956ece142ae13d1759f";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      country: "",
      temperature: 0,
      humidity: 0,
      pressure: 0,
      weather: ""
    };

    this.citySearch = this.citySearch.bind(this);
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
      .catch(
        function(error) {
          this.setState({ city: 404 });
        }.bind(this)
      );
  }

  citySearch(city) {
    this.axioSearch(city);
  }

  render() {
    return (
      <div>
        <div>
          <h1>WeatherNOW</h1>
          <SearchBar onSearchTermChange={this.citySearch} />
          <br />
          {(this.state.city === 404 && (
            <div>
              <h1>Location not found!</h1>
            </div>
          )) ||
            (this.state.city !== "" && (
              <div>
                <h2>{this.state.weather}</h2>
                <h3>
                  {this.state.city}, {this.state.country}
                </h3>
                <p>{Math.round(this.state.temperature - 273.15)} °C</p>
                <p>Humidity: {this.state.humidity} %</p>
                <p>{this.state.pressure} hPa</p>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;