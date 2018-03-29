import React, { Component } from 'react'
import { personalInfoData } from '../data/personalInfo'

export default class Project extends Component {
  render() {
    return (
      <section id="container" className="clearfix">
        <div className="layout">
          <p className="project">
            <a href={"https://github.com/bradleybernard/RiftBets"} target="_blank">
              RiftBets
            </a>
            &nbsp;- A League of Legends betting platform with live match streaming.
          </p>
          <p className="project">
            <a href={personalInfoData.github + "/youtube-bot"} target="_blank">
              Discord Music Player
            </a>
            &nbsp;- A Discord bot that reads user commands in a server to play songs from Youtube into a voice channel.
          </p>
        </div>
      </section>
    )
  }
}
