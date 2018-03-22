import React, { Component } from 'react';
import { Image } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <section id="main" className="clearfix">
        <div className="layout">
          <div id="designline"></div>
          <article>
            <div>
              <Image src={require("../assets/supremedecks.jpg")} />
            </div>
          </article>
          <div id="designline"></div>
        </div>
      </section>
    )
  }
}

export default Home
