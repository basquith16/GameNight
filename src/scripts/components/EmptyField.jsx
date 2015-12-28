import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';
import GameForm from './GameForm';

export default class EmptyField extends React.Component {
   handleSubmit = () => {
     Backbone.history.navigate( `/new`, true);
   }

  render () {
    return <div className="container">
      <div className="jumbotron col-md-offset-2 col-md-8">
        <h1>😮oooops</h1>
        <p>Looks like you forgot to complete all of the fields.</p>
        <p>Go <button onClick={this.handleSubmit} className="btn btn-primary">Back</button> and finish so that we can add your game! </p>
      </div>
    </div>
  }
}
