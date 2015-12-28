import React from 'react';
import Backbone from 'backbone';

class InfoCollect extends React.Component {

  handleSubmit = () =>  {
    let players = this.refs.players.value;
    let duration = this.refs.duration.value;
    let difficulty = this.refs.difficulty.value;
    Backbone.history.navigate(
      `/results?players=${players}&duration=${duration}&difficulty=${difficulty}`,
      true
    );
  }

  render() {
    return (
      <div className='container info-collect'>
        <div className="row">
          <div id="info-jumbotron" className="jumbotron col-md-offset-2 col-md-8">
            <div className='content'>
              <h2 className="text-center">Looking for a Game?</h2>

              <p className="text-center">How Many Players</p>
              <span className="caret"></span>
              <select className="form-control" ref="players">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <p className="text-center">How Much Time?</p>
              <div className="dropdown">
                <span className="caret"></span>
                <select className="form-control" ref="duration">
                  <option value="15">15 minutes</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">1 hour</option>
                  <option value="90">1.5 hours</option>
                  <option value="120">2 hours</option>
                  <option value="150">2.5 hours</option>
                  <option value="180">3 hours or more</option>
                </select>
                <p className="text-center">How Difficult?</p>
                <span className="caret"></span>
                <select className="form-control" ref="difficulty">
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
          

              <p className="text-center">
                <button onClick={this.handleSubmit} id="info-search" className="btn btn-primary">Search</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  }
}

export default InfoCollect;
