import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/cardlists/card-list.components";
import SearchBox from "./components/search-box/search-box.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFeilds: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleEvent = (e) => {
    this.setState({ searchFeilds: e.target.value });
  };

  render() {
    const { monsters, searchFeilds } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFeilds.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monstors Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleEvent}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
