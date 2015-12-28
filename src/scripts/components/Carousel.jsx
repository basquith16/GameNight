import React from 'react';

class Carousel extends React.Component {


  render() {
    let items = this.props.images.map((image, i) => {
      return <CarouselItem key={i} index={i} image={image} />
    });

    let listItems = this.props.images.map((image, i) => {
      return <li key={i} className={i == 0 ? 'active' : ''} data-slide-to={i}></li>
    });

    return (
      <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {listItems}
        </ol>
        <div className="carousel-inner">
          {items}
        </div>
      </div>
    );
  }
}

class CarouselItem extends React.Component {

  render() {
    let klass = this.props.index == 0 ? 'item active' : 'item';
    return (
      <div className={klass}>
        <div className="row">
          <div className="col-xs-12">
            <img className="media-object img-rounded img-responsive center-block gamepic" src={this.props.image}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
