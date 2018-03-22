import React, { Component } from 'react'
import { personalInfoData } from '../data/personalInfo'
import { Header } from 'semantic-ui-react'
// import { NavLink } from 'react-router-dom'


class NavBar extends Component {
  // state = {}

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state

    return (
      <header id="masthead" className="clearfix">
        <div id="thehead">
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
          </nav>
        </div>
      </header>
      // <Menu>
      //   <Menu.Item >
      //       <a href='/' className='nav-link'>
      //         {personalInfoData.name}
      //       </a>
      //
      //     <a href="/Projects" className="nav-link">
      //       Projects
      //     </a>
      //
      //     <a href={personalInfoData.resume} className="nav-link" target="_blank">
      //       Resume
      //     </a>
      //   </Menu.Item>
      //     <Menu.Item position="right">
      //     <a href={personalInfoData.email} className="nav-link" target="_blank">
      //       <Icon name="mail icon" size="big"></Icon>
      //     </a>
      //     <a href={personalInfoData.github} className="nav-link" target="_blank">
      //       <Icon name="github" size="big"></Icon>
      //     </a>
      //     <a href={personalInfoData.linkedIn} className="nav-link" target="_blank">
      //       <Icon name="linkedin square" size="big"></Icon>
      //     </a>
      //   </Menu.Item>
      // </Menu>
    );
  }
}
export default NavBar;
