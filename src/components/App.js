import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Project from './Projects';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="about" exact path="/about" component={About} />
          <Route name="projects" exact path="/projects" component={Project} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;
