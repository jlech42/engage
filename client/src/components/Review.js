import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Review extends Component {
  render() {
    return (
      <div>
        <img
          src="https://i0.wp.com/rockandrollroadmap.com/wp-content/uploads/2015/12/On-The-Beach-by-Neil-Young.jpg?resize=1024%2C1024"
          width="100%"
          style={{ marginRight: '20px' }}
        />
        <p style={{ textAlign: 'center' }}>Great Album</p>
      </div>
    );
  }
}

export default Review;
