import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { personalInfoData } from '../data/personalInfo';
class NavBar extends Component {
  render() {
    return (
          <nav className="navbar navbar-fixed-top navbar-inner header">

            <div className="container">
              <div className="navbar-brand">
                <a href="/about" > {personalInfoData.name} </a>
              </div>
              <ul className="nav navbar-nav pull-right">
                <li>
                  <a href={personalInfoData.resume} className="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.email} className="nav-link">
                    <i className="fa fa-envelope icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.github} className="nav-link" target="_blank">
                    <i className="fa fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.linkedIn} className="nav-link" target="_blank">
                    <i className="fa fa-linkedin-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.angelList} className="nav-link" target="_blank">
                    <i className="fa fa-angellist icon"></i>
                  </a>
                </li>
                </ul>
            </div>
            </nav>
    );
  }
}
export default NavBar;
