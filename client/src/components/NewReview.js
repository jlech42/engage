import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

class NewReview extends Component {
  render() {
    return (
      <div>
        <h2>New Review</h2>
        <SearchBar />
        <SearchResults />
      </div>
    );
  }
}

export default NewReview;
