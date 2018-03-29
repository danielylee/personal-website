import React, { Component } from 'react'
import { personalInfoData } from '../data/personalInfo'
import { Icon } from 'semantic-ui-react'



export default class NavBar extends Component {
  // state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <header id="masthead" className="clearfix">
          <h1>
              <a href="/">
                  Daniel Lee
              </a>
          </h1>
          <nav id="mainNav">
            <li>
              <a href="/about">
                about
              </a>
            </li>
            <li>
              <a href="/projects">
                projects
              </a>
            </li>
            <li>
              <a href={personalInfoData.resume} target="_blank">
                resume
              </a>
            </li>
            <li>
              <a href={personalInfoData.github} className="icon" target="_blank">
                <Icon name="github" size="large"></Icon>
              </a>
            </li>
            <li>
              <a href={personalInfoData.linkedIn} className="icon" target="_blank">
                <Icon name="linkedin square" size="large"></Icon>
              </a>
            </li>
            <li>
              <a href={personalInfoData.email} className="icon" target="_blank">
                <Icon name="mail outline" size="large"></Icon>
              </a>
            </li>
          </nav>
      </header>
    );
  }
}
