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
      <form>
        <input onChange={this.onHandleChange} type="text" />
        <button onClick={this.onHandleSubmit} type="submit">
          Search!
        </button>
      </form>
    );
  }

  onHandleChange(e) {
    this.setState({
      city: e.target.value
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const city = this.state.city;
    this.props.onSearchTermChange(city);
  }
}

export default SearchBar;
