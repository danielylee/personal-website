import React, { Component } from 'react'
import { personalInfoData } from '../data/personalInfo'
import { Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


class NavBar extends Component {
  // state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item >
            <a href='/' class='nav-link'>
              {personalInfoData.name}
            </a>

          <a href="/Projects" class="nav-link">
            Projects
          </a>

          <a href={personalInfoData.resume} class="nav-link" target="_blank">
            Resume
          </a>
        </Menu.Item>
          <Menu.Item position="right">
          <a href={personalInfoData.email} class="nav-link" target="_blank">
            <Icon name="mail icon" size="big"></Icon>
          </a>
          <a href={personalInfoData.github} class="nav-link" target="_blank">
            <Icon name="github" size="big"></Icon>
          </a>
          <a href={personalInfoData.linkedIn} class="nav-link" target="_blank">
            <Icon name="linkedin square" size="big"></Icon>
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default NavBar;
