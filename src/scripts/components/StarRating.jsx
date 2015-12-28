import React from 'react';
import Icon from './Icon';

class StarRating extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rating: (props.rating || 0),
      max: (props.max || 5)
    };
  }

  render() {
    let stars = [];
    for (var i = 0; i < this.state.max; i++) {
      if (i < this.state.rating) {
        stars.push(<Icon key={i} type="star" />);
      } else {
        stars.push(<Icon key={i} type="star-o" />);
      }
    }

    return (
      <div className="star-rating">
        {stars}
      </div>
    );
  }
}

export default StarRating;
