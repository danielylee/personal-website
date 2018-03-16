import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Project from './Projects';
import About from './About';
import NavBar from './NavBar';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div class="ui container">
          <NavBar />
          <Route name="about" exact path="/" component={About} />
          <Route name="projects" exact path="/Projects" component={Project} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;
