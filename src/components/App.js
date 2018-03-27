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
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route name="about" exact path={process.env.PUBLIC_URL + '/about'} component={About} />
          <Route name="projects" exact path={process.env.PUBLIC_URL + '/projects'} component={Project} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;
