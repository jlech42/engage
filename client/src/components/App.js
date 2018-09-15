import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Header from './Header';
import Reviews from './Reviews';
import NewReview from './NewReview';

/*
import Landing from './Landing';
*/

const Landing = () => (
  <div>
    <h2>Your reviews</h2>
    <Link to="/posts/new">
      <button style={{ margin: '10px 0' }}>New Review</button>
    </Link>
    <Reviews />
  </div>
);
const Dashboard = () => <h2>Dashboard</h2>;

class App extends Component {
  /* componentDidMount() {
    this.props.fetchUser();
  } */
  render() {
    return (
      <div className="container-fluid">
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/posts" component={Dashboard} />
              <Route path="/posts/new" component={NewReview} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
