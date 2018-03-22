import React, { Component } from 'react'
import { personalInfoData } from '../data/personalInfo'
import { Icon } from 'semantic-ui-react'



class NavBar extends Component {
  // state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <header id="masthead" className="clearfix">
          <h1>
              <a href='/'>
                  Daniel Lee
              </a>
          </h1>
          <div id="siteDescription">
              <span>Software </span>
            <canvas style={{width: 13, height: 13, top: 1, left: -1,}}></canvas>
              <span>Engineer</span>
          </div>
          <nav id="mainNav">
            <li>
              <a href="/about">
                About
              </a>
            </li>
            <li>
              <a href="/projects">
                Projects
              </a>
            </li>
            <li>
              <a href={personalInfoData.resume} target="_blank">
                Resume
              </a>
            </li>
            <li>
              <a href={personalInfoData.email} className="icon" target="_blank">
                <Icon name="mail" size="big"></Icon>
              </a>
            </li>
            <li>
              <a href={personalInfoData.github} className="icon" target="_blank">
                <Icon name="github" size="big"></Icon>
              </a>
            </li>
            <li>
              <a href={personalInfoData.linkedIn} className="icon" target="_blank">
                <Icon name="linkedin square" size="big"></Icon>
              </a>
            </li>
          </nav>
      </header>
    );
  }
}
export default NavBar;
