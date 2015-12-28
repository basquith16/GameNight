import React from 'react';
import Backbone from 'backbone';

class Splash extends React.Component {

  handleSubmit = () => {
    console.log('Hello');
    Backbone.history
      .navigate(`/info`, true);
  }

  componentDidMount() {
    //  $("#splashtext").delay(1000).fadeIn(1000);
    //   $("#startnow").delay(2000).fadeIn(1500);
    // $("#introcopy").delay(2500).fadeIn(2000);
  }

  render() {
    return (
      <div className="container splashcontainer">
        <div className="splashpopout">
          <div className="splashwelcome" id="welcome">It's Game Night!</div>
          <div className="row">
            <div className="col-xs-4 text-right splashgamepad">
              <div className="fa fa-gamepad fa-5x"></div>
            </div>
            <div className="col-xs-4 text-center splashpuzzle">
              <div className="fa fa-puzzle-piece fa-5x"></div>
            </div>
            <div className="col-xs-4 text-left splashtrophy">
              <div className="fa fa-trophy fa-5x"></div>
            </div>
          </div>
          <div className="centerBlock">
            <div className="text-center" id="splashtext">Personalized Board Game Manager</div>
          </div>
          <div className="centerBlock">
            <button id="startnow" onClick={this.handleSubmit}>START NOW</button>
          </div>
          <div className="centerBlock">
            <div id="introcopy">
              Hanging out with a group of friends or someone special? In a competitive mood? Or just looking to have a fun-filled evening? We have your web app! GameNight, created by front-end web development students at The Iron Yard, is an app designed to help you choose board games based on the number of players, duration and difficulty. Whether it is an old classic like Trivial Pursuit or a modern hit like Exploding Kittens, we will recommend the right game for your particular evening (or anytime!). This is the best place on the web to search for board games! Do not just look for games in the GameNight database, submit your own! Do your part so fellow gamers can take
              <em>their</em>
              turn.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Splash;
