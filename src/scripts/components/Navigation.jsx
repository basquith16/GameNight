import React from 'react';
import Parse from 'parse';
import Backbone from 'backbone';
import Icon from './Icon';

class NavigationItem extends React.Component {

  render() {
    let className;
    if (this.props.current)
      className = 'active';

    return (
      <li className={className}>
        <a href={this.props.to}>
          {this.props.icon
            ? <Icon type={this.props.icon}/>
            : ''}
          {' '}
          {this.props.label}
        </a>
      </li>
    );
  }
}

class SessionNavigation extends React.Component {

  handleSignOut = () => {
    Parse.User.logOut();
    Backbone.history.navigate('/', true);
  }

  handleSignIn = (event) => {
    event.preventDefault();
    Parse.User.logIn(this.refs.username.value, this.refs.password.value, {
      success: function(user) {
        Backbone.history.navigate('/info', true);
      },
      error: function(user, error) {
        alert("Error: " + error.code + " " + error.message);
      }
    });
  }

  render() {
    if (this.props.user) {
      return (
        <ul className = "nav navbar-nav navbar-right">
          <li>
            <a href="#" onClick={this.handleSignOut} >
              <Icon type="user"/>
              {' '}
              Sign Out
            </a>
          </li>
        </ul>
      )
    } else {
      return (
        <div>
          <form className="navbar-form navbar-right" onSubmit={this.handleSignIn}>
            <div className="form-group">
              <input ref="username" className="form-control" placeholder="Username" type="text"/>
            </div>
            {' '}
            <div className="form-group">
              <input ref="password" className="form-control" placeholder="Password" type="password"/>
            </div>
            {' '}
            <button className="btn btn-success" type="submit">Sign in</button>
          </form>
          <ul className = "nav navbar-nav navbar-right">
            <NavigationItem current={this.props.current === 'signUp'} icon="user" label="Sign Up" to="#/register"/>
          </ul>
        </div>
      );
    }
  }
}

class Navigation extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button aria-controls="navbar" aria-expanded="false" className="navbar-toggle collapsed" data-target="#navbar" data-toggle="collapse" type="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              <Icon type="puzzle-piece" / >
              {' '}
              Game Night
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="nav navbar-nav">
              <NavigationItem current={this.props.current === 'info'} icon="home" label="Home" to="#/info"/>
              <NavigationItem current={this.props.current === 'newGame'} icon="plus" label="New Game" to="#/new"/>
            </ul>
            <SessionNavigation user={this.props.currentUser}/>
          </div>
        </div>
      </nav >);
    }
  }

  export default Navigation;
