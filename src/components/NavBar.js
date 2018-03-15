import React, { Component } from 'react';
import { personalInfoData } from '../data/personalInfo';
class NavBar extends Component {
  render() {
    return (
          <div class="ui fixed inverted menu">
            <div class="ui container">
              <div class="header item">
                <a href="/" > {personalInfoData.name} </a>
              <a class="item">
                <span>About Me</span>
              </a>
              <a href={personalInfoData.resume} class="item">
                <span>Resume</span>
              </a>
              <a href={personalInfoData.email} class="item">
                <i class="mail icon"></i>
              </a>
              <a href={personalInfoData.github} class="item">
                <i class="github icon"></i>
              </a>
              <a href={personalInfoData.linkedIn} class="item" target="_blank">
                <i class="linkedin square icon"></i>
              </a>
            </div>
              {/* <ul class="nav navbar-nav pull-right">
                <li>
                  <a href="/about" class="nav-link" style={{ lineHeight: 'normal' }}>
                    <span>About me</span>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.resume} class="nav-link" target="_blank" style={{ lineHeight: 'normal' }}>
                    <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.email} class="nav-link">
                    <i class="fa fa-envelope icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.github} class="nav-link" target="_blank">
                    <i class="fa fa-github icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.linkedIn} class="nav-link" target="_blank">
                    <i class="fa fa-linkedin-square icon"></i>
                  </a>
                </li>
                <li>
                  <a href={personalInfoData.angelList} class="nav-link" target="_blank">
                    <i class="fa fa-angellist icon"></i>
                  </a>
                </li>
                </ul> */}
              </div>
          </div>
    );
  }
}
export default NavBar;
