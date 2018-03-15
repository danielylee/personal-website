import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-app-container">
          <NavBar />
          <div className="main-app-nav">
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="about" exact path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;
