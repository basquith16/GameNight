import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';
import Icon from './Icon';
import Game from '../Game';
import EmptyField from './EmptyField';

class GameForm extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    // We could validate the data
    // ON ANOTHER DAY
    // Tell parse to construct a new game with the data
    if (document.getElementsByName('.form-control')[0], this.refs.title.value == '' || this.refs.minPlayers.value == '' || this.refs.maxPlayers.value == '' || this.refs.durationHours.value == '' || this.refs.durationMinutes.value == '') {
      console.log('empty');
      Backbone.history
        .navigate(`/empty`, true);
    } else {

      let game = new Game();

      let duration = Number(this.refs.durationHours.value * 60) + Number(this.refs.durationMinutes.value);

      game.set('title', this.refs.title.value);
      game.set('description', Text(this.refs.gameDescription.value));
      game.set('shortSummary', Text(this.refs.shortSummary.value));
      game.set('minPlayers', Number(this.refs.minPlayers.value));
      game.set('maxPlayers', Number(this.refs.maxPlayers.value));
      game.set('duration', duration);
      game.set('difficulty', event.target.elements.difficulty.value);
      game.set('rating', Number(this.state.rating));

      game.set('images', []); // For NOW. TODO: use a text field, split on new lines.

      console.log(game.attributes);
      // save it
      game.save()
        .then((game) => {
          // redirect to game detail page.
          Backbone.history
            .navigate(`/game/${game.id}`, true);
        });
    }
  }

  render() {
    return (
      <div id="gameForm">
        <div className="container new-game">
          <div className="jumbotron" id="gameform-jumbotron">

            <div className="row row-centered">
              <div className="col-xs-6 col-centered">
                <h2 className="text-center">New Game Form</h2>
              </div>
            </div>

            <form onSubmit={this.handleSubmit} role="form">

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Game Title:</p>
                </div>
                <div className="col-xs-6 col-centered">
                  <input className="form-control" id="title" ref="title" type="text"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Description:</p>
                </div>
                <div className="col-xs-6 col-centered">
                  <input className="form-control" id="description" ref="description" type="textarea"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Short Summary:</p>
                </div>
                <div className="col-xs-6 col-centered">
                  <input className="form-control" id="shortSummary" ref="shortSummary" type="textarea"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Players
                    <Icon type="users"/></p>
                </div>
                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Min" ref="minPlayers" type="number"></input>
                </div>

                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Max" ref="maxPlayers" type="number"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Duration
                    <Icon type="hourglass-half"/></p>
                </div>
                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Hours" ref="durationHours" type="number"></input>
                </div>
                <div className="col-xs-3 col-centered">
                  <input className="form-control" placeholder="Minutes" ref="durationMinutes" type="number"></input>
                </div>
                <div className="col-xs-3 col-centered"></div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">Difficulty
                    <Icon type="cogs"/></p>
                </div>
                <div className="col-xs-6 col-centered">
                  <div className="centerBlock">
                    <div className="btn-group btn-group-md" data-toggle="buttons" id="diffChoice">
                      <label className="btn btn-default active">
                        <input defaultChecked="Yes" name="difficulty" ref="difficulty" type="radio" value="Beginner"/>
                        Beginner
                      </label>
                      <label className="btn btn-default">
                        <input name="difficulty" ref="difficulty" type="radio" value="Intermediate"/>
                        Intermediate
                      </label>
                      <label className="btn btn-default">
                        <input name="difficulty" ref="difficulty" type="radio" value="Advanced"/>
                        Advanced
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row row-centered">
                <div className="col-xs-3 col-centered">
                  <p className="text-right">
                    Rating
                    <Icon type="star"/>
                  </p>
                </div>
                <div className="col-xs-3 col-centered">
                  <div className="centerBlock">
                    <span className="rating"></span>
                    <select className="form-control" ref="rating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
                <div className="row row-centered">
                  <div className="col-xs-4 col-centered">
                    <div className="centerBlock">
                      <button className="btn btn-lg btn-success" type="submit">Add Game</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  };
}
export default GameForm;
