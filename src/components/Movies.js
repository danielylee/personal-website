import React, { Component } from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'

const photos = [
  {
    src: require("../assets/oceans.jpg"),
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 3,
    height: 2,
    caption: 'Ocean\'s Eleven. Year 2001'	
  },
  {
    src: require("../assets/theprestige.png"),
    sizes: ["(min-width:480px) 50vw, (min-width: 1024px) 33.3vw, 100vw"],
    width: 4,
    height: 3,
    caption: 'The Prestige. Year 2006'
  },
]

export default class Movies extends Component {
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
