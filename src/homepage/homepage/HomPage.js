import React , { Component } from 'react';
import './HomePage.scss';
import CardList from '../../components/cardlist/CardList';
import SearchBar from '../../components/searchbar/SearchBar';
import { data } from '../../assets/data';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      searchField: '',
      persons: data,
      selectedPerson: null,
   };
  }

  onSearchChange = (event) => {
    console.log(event.target.value)
    this.setState({ searchField: event.target.value });
  };

  debouncedField = content => console.log(content);

  // onFormSubmit = event => {
  //   event.preventDefault();
  //   this.setState({ searchField: event})
  // }

  render() {
    const { persons, searchField } = this.state;
    const filteredPersons = persons.filter(person =>
      person.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className='homepage'>
        <SearchBar onSearchChange={this.onSearchChange}/>
        <CardList persons={filteredPersons} />
      </div>
    )
  }
}

export default HomePage;
