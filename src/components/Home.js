import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

// function importAll(r){
//   let pictures = {};
//   r.keys().map((picture, index) => { pictures[picture.replace('./', '')] = r(picture); });
//   return pictures;
// }
// const pictures = importAll(require.context('../assets', false, '/\.jpg/'));

export default class Home extends Component {
  render() {
    return (
      <section id='container' className='clearfix'>
        <div className='layout'>
          <article>
            <div>
              <Image className='picture' src={require('../assets/supremedecks.jpg')} />
            </div>
            <blockquote>
              <p>
                The Last Supper Supreme decks. Year 2002
              </p>
            </blockquote>
          </article>
          <article>
            <div>
              <Image className='picture' src={require('../assets/pinata.jpg')} />
            </div>
            <blockquote>
              <p>
                Pińata - Freddie Gibbs & Madlib. Year 2014
              </p>
            </blockquote>
          </article>
          <article>
            <div>
              <Image className='picture' src={require('../assets/bulletsupreme.jpg')} />
            </div>
            <div>
              <Image className='picture' src={require('../assets/bulletsupreme2.jpg')} />
            </div>
            <blockquote>
              <p>
                Supreme Shibuya Box Logo. Year 2012
              </p>
            </blockquote>
          </article>
        </div>
      </section>
    )
  }
}
