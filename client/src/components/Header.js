import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="deep-purple darken-2">
        <div className="nav-wrapper container">
          <Link to="/" className="center brand-logo">
            Engage
          </Link>
          <ul className="right">
            <a href="/auth/spotify">Login With Spotify</a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
