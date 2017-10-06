import React, { Component } from "react";
import axios from "axios";
import classnames from "classnames";
import SearchBar from "./search-bar";
import NotFoundPage from "./not-found-page";
import animate from "animate.css";

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
      weather: "",
      spinner: false
    };

    this.citySearch = this.citySearch.bind(this);
  }

  axioSearch(city) {
    let cityName = city || this.state.city;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?APPID=${API_KEY}&q=${cityName}`
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
    this.setState({ city: "", spinner: true });
    setTimeout(() => {
      this.axioSearch(city);
      this.setState({
        spinner: false
      });
    }, 1000);
  }

  render() {
    let classes = classnames("loader__img", { active: this.state.spinner });
    return (
      <div className="body">
        <SearchBar onSearchTermChange={this.citySearch} />
        <br />
        <div className="loader">
          <img className={classes} src="img/spinner.gif" />
        </div>
        {(this.state.city === 404 && <NotFoundPage />) ||
          (this.state.city !== "" && (
            <div className="container">
              <div className="data animated fadeIn">
                <h1 className="data__h1">
                  {" "}
                  {Math.round(this.state.temperature - 273.15)} °C
                </h1>
                <h2 className="data__h2">
                  {this.state.city},{" "}
                  <span id="uppercase">{this.state.country}</span>
                </h2>
                <h2 className="data__h2">{this.state.weather}</h2>
                <p className="data__p">
                  <img
                    className="data__h-icon"
                    src="img/humidity-icon.png"
                  />{" "}
                  {this.state.humidity} % |{" "}
                  <img
                    className="data__p-icon"
                    src="img/pressure-icon.png"
                  />{" "}
                  {this.state.pressure} hPa
                </p>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default App;
