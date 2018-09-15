import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Review />
        <Review />
        <Review />
      </div>
    );
  }
}

export default Reviews;
