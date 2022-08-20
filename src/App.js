import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchString: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }
  handleChange = (e) => {
    return this.setState({ searchString: e.target.value });
  }

  render() {
    const {robots, searchString} = this.state;
    const filteredRobots = robots.filter((robot) => (
      robot.name.toLowerCase().includes(searchString.toLowerCase())
    ))
    return (
      <div className="App">
        <h1 className="title">Robo Times</h1>
        <SearchBox
          placeholder="Search robots..."
          handleChange={this.handleChange}
        />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
