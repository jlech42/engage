import React, { Component } from 'react';
// import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input placeholder="Enter A Song, Album, or Artist" />
        <button onClick={() => console.log('clicked')}>SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
