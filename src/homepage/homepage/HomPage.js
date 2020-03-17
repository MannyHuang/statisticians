import React, { Component } from "react";
import { connect } from "react-redux";

import "./HomePage.scss";
import CardList from "../../components/cardlist/CardList";
import SearchBar from "../../components/searchbar/SearchBar";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: "",
      selectedPerson: null
    };
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { searchField } = this.state;
    const { persons } = this.props;
    const filteredPersons = persons.filter(person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="homepage">
        <SearchBar searchValue={searchField} onSearchChange={this.onSearchChange} />
        <CardList persons={filteredPersons} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  persons: state.persons
});

export default connect(mapStateToProps)(HomePage);
