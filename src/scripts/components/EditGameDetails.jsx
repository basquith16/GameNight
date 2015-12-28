import React from 'react';
import Parse from 'parse';
import Icon from './Icon';
import Game from '../Game';

class EditGameDetails extends React.Component {
//constructing this as a mash up of the GameDetails and the GameForm

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    let query = new Parse.Query(Game);
    query.get(this.props.game_id, {
      success: (object) => {
        this.setState({
          game: object
        });
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  //choosing the path of creating a new game with the "edited" data.
  //old entry will need to be deleted
    let game = new Game();

    let duration = Number(this.refs.durationHours.value * 60) + Number(this.refs.durationMinutes.value);

    game.set('title', this.refs.title.value);
    game.set('minPlayers', Number(this.refs.minPlayers.value));
    game.set('maxPlayers', Number(this.refs.maxPlayers.value));
    game.set('duration', duration);
    game.set('difficulty', event.target.elements.difficulty.value);

    game.set('images', []);

    console.log(game.attributes);
    game.save().then((game) => {
      Backbone.history.navigate(`/game/${game.id}`, true);
    });
  }

  render() {
    return (
      <div>
          <div className="row row-centered">
            <div className="col-xs-4 col-centered">
                <h3>Let's do some editing!</h3>
              <div className="centerBlock">
                <button className="btn btn-lg btn-success" type="submit">Submit Changes</button>
              </div>
            </div>
          </div>
      </div>
    )

  }
}

export default EditGameDetails;
