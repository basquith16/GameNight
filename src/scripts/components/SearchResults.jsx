import React from 'react';
import Parse from 'parse';
import Icon from './Icon';
import SearchDetail from './SearchDetail';
import Game from '../Game';

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
    this.query = new Parse.Query(Game);
    this.state = {
      players: Number(this.params('players')),
      duration: Number(this.params('duration')),
      difficulty: this.params('difficulty'),
      games: []
    };
  }

  componentWillMount() {
    this.query.lessThanOrEqualTo('minPlayers', this.state.players);
    this.query.greaterThanOrEqualTo('maxPlayers', this.state.players);
    this.query.lessThanOrEqualTo('duration', this.state.duration);
    this.query.equalTo('difficulty', this.state.difficulty);
    // This part is not functioning but I wanted to keep the concept
    //     switch (this.state.difficulty) {
    //       case 'advanced':
    //         this.query.equalTo('difficulty', ('advanced' && 'intermediate' && 'beginner'));
    //         break;
    //       case 'intermediate':
    //         this.query.equalTo('difficulty', ('intermediate' && 'beginner'));
    //       default:
    //         this.query.equalTo('difficulty', 'beginner');
    // };
    this.query
      .find({
        success: (results) => {
          this.setState({
            games: results
          });
        }
      });
  }

  render () {
    let details = this.state
      .games
      .map((game, i) => {
        return <SearchDetail game={game} key={i}/>;
      });

    return (
      <div className="container search-results">
        <div className="results">
          <div id="results-jumbotron" className="jumbotron">
            <h2 className="text-center">Search Results</h2>
            <div className="row text-center">
              <div className="col-xs-4">
                <Icon type="users"/>
                <br/>
                {this.state.players}
              </div>
              <div className="col-xs-4">
                <Icon type="hourglass-half"/>
                <br/>
                {this.state.duration}
              </div>
              <div className="col-xs-4">
                <Icon type="cogs"/>
                <br/>
                {this.state.difficulty}
              </div>
            </div>

          </div>
          {details}
        </div>
      </div>
    );
  }

  params(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.hash);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
  }
}

export default SearchResults;
