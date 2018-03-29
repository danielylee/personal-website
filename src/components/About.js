import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <section id="container" className="clearfix">
        <div className="layout">
          <p>
            Hi random viewer, I'm a 1st generation Korean-American from Cupertino, CA. I have recently graduated with a degree in Computer Science from UC Santa Cruz. Currently my main interests are in technology, streetwear, and web design. Aside from that, I also enjoy snowboarding and traveling to obscure parts of the world. The images (not owned or taken by me) on my blog are stuff I like.
          </p>
          <p>
            These are some of my favorite&nbsp;<a href="/movies">movies/shows</a>&nbsp;and&nbsp;<a href="/albums">albums.</a>
          </p>
          <p>
            If you have any inquiries or would like to talk about film or music, connect with me on Linkedin or send me an email.
          </p>
        </div>
      </section>
    )
  }
}
