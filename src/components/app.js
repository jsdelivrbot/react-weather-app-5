import React, { Component } from 'react';
import SearchBar from '../containers/search_bar'
import SearchList from '../containers/search_list'

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <SearchList />
      </div>
    );
  }
}
