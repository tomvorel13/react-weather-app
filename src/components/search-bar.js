import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };

    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form>
          <input
            className="mainInput"
            onChange={this.onHandleChange}
            placeholder="Get current weather..."
            value={this.state.city}
            type="text"
          />
          <button
            className="searchButton"
            onClick={this.onHandleSubmit}
            type="submit"
          >
            Get Weather!
          </button>
        </form>
      </div>
    );
  }

  onHandleChange(e) {
    const city = e.target.value;
    city.trim();
    this.setState({
      city
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const city = this.state.city;
    this.props.onSearchTermChange(city);
    this.setState({ city: "" });
  }
}

export default SearchBar;
