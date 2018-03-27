import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Project from './Projects';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar />
          <Route name="home" exact path='/' component={Home} />
          <Route name="about" exact path='/about' component={About} />
          <Route name="projects" exact path='/projects' component={Project} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;
