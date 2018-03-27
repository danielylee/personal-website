import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

// function importAll(r){
//   let pictures = {};
//   r.keys().map((picture, index) => { pictures[picture.replace('./', '')] = r(picture); });
//   return pictures;
// }
// const pictures = importAll(require.context('../assets', false, '/\.jpg/'));

class Home extends Component {
  render() {
    return (
      <section id="main" className="clearfix">
        <div>
          <div id="designline"></div>
          <article>
            <div>
              <Image src={require('../assets/1.jpg')} fluid/>
            </div>
          </article>
          <div id="designline"></div>
          <article>
            <div>
              <Image src={require('../assets/2.jpg')} fluid/>
            </div>
          </article>
          <div id="designline"></div>
          <article>
            <div>
              <Image src={require('../assets/pinata.jpg')} fluid/>
            </div>
          </article>
          <div id="designline"></div>
          <article>
            <div>
              <Image src={require('../assets/supremedecks.jpg')} fluid />
            </div>
          </article>
          <div id="designline"></div>
        </div>
      </section>
    )
  }
}

export default Home
