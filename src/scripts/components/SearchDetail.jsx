import React from 'react';
import Icon from './Icon';
import StarRating from './StarRating';

class SearchDetail extends React.Component {

  render () {
    return (
      <div id="searchDetail-panel" className="panel panel-default">
        <div className="panel-heading">
          <a href={`#/game/${this.props.game.id}`}>
            <h3 className="panel-title">{this.props.game.get('title')}</h3>
          </a>
        </div>
        <div className="panel-body">
          <img className="gameImg" src={this.props.game.get('images')[0]}/>
          <p>
            <i>{this.props.game.get('shortSummary')}</i>
          </p>
          <div className="inline">
            <p><Icon type="users"/>
              {this.props.game.get('minPlayers')}-{this.props.game.get('maxPlayers')}
            </p>
            <p>
              <Icon type="hourglass-half"/>
              {this.props.game.get('duration')}
            </p>
            <p>
              <Icon type="cogs"/>
              {this.props.game.get('difficulty')}
            </p>
            <StarRating rating={this.props.game.get('rating')}/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDetail;
