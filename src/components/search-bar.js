import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: ""
    };

    this.onHandleChange = this.onHandleChange.bind(this);
  }

  render() {
    return (
      <input
        id="mainInput"
        value={this.state.city}
        onChange={this.onHandleChange}
        className="form-control my-3"
        type="text"
      />
    );
  }

  onHandleChange(env) {
    const city = env.currentTarget.value;
    this.setState({ city });
    this.props.onSearchTermChange(city);
  }
}

export default SearchBar;
