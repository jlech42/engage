import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <div className="row" style={{ display: 'flex' }}>
        <div className="col">
          <h4 className="center-align">Albums</h4>
          <Review />
        </div>
        <div className="col">
          <h4 className="center-align">Songs</h4>
          <Review />
        </div>
        <div className="col">
          <h4 className="center-align">Artists</h4>
          <Review />
        </div>
      </div>
    );
  }
}

export default Reviews;
