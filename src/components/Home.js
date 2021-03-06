import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

const photos = [
  {
    src: 'https://hypb.imgix.net/image/2018/05/stone-island-spring-summer-2018-deliveries-hbx-4.jpg?q=90&w=1755&fit=clip&auto=compress%2Cformat',
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 4,
    height: 3,
    caption: 'Stone Island Outerwear Spring/Summer 2018'
  },
  {
    src: require("../assets/supremedecks.jpg"),
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 4,
    height: 3,
    caption: "The Last Supper Supreme decks. Year 2002"
  },
  {
    src:
      "https://78.media.tumblr.com/2218bb5fc1e7aa67934cc4502d84cf57/tumblr_n2lep48xP71trt6xpo1_500.jpg",
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 3,
    height: 3,
    caption: 'Kendrick and Shia'
  },
  {
    src: require("../assets/bulletsupreme.jpg"),
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 4,
    height: 3,
    caption: 'Supreme Shibuya Box Logo. Year 2012'	
  },
  {
    src: require("../assets/bulletsupreme2.jpg"),
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 3,
    height: 3,
    caption: 'Supreme Shibuya Box Logo. Year 2012'
  },
  {
    src: require("../assets/apc_carhartt.jpg"),
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 3,
    height: 4,
    caption: 'APC x Carhartt'
  }
];

export default class Home extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render() {
    return (
      <div className="layout">
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
          backdropClosesModal={true}
          showImageCount={false}
          showCloseButton={false}
        />
      </div>
    )
  }
}
