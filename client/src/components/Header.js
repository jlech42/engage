import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
          <Link to="/" className="left brand-logo">
            Engage
          </Link>
          <ul className="right">Reviews</ul>
        </div>
      </nav>
    );
  }
}

export default Header;
