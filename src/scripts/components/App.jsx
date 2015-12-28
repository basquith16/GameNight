import React from 'react';
import Parse from 'parse';
import Navigation from './Navigation';
import Splash from './Splash';
import GameForm from './GameForm';
import InfoCollect from './InfoCollect';
import SearchResults from './SearchResults';
import GameDetails from './GameDetails';
import EmptyField from './EmptyField';
import SignUp from './SignUp';
import Icon from './Icon';
import EditGameDetails from './EditGameDetails';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: Parse.User.current(),
      currentRoute: props.router.current
    }
  }

  componentWillMount() {
    this.props
      .router
      .on('route', this.onRoute);
  }

  componentWillUnmount() {
    this.props
      .router
      .off('route', this.onRoute);
  }

  onRoute = () => {
    $('.navbar-toggle').click();
    this.setState({
      currentUser: Parse.User.current(),
      currentRoute: this.props.router.current
    });
  }

  render() {
    let currentView;

    switch (this.state.currentRoute) {
      case 'newGame' :
        currentView = <GameForm />;
        break;
      case 'infoCollect' :
        currentView = <InfoCollect />;
        break;
      case 'newGame' :
        currentView = <GameForm />;
        break;
      case 'searchResults' :
        currentView = <SearchResults />;
        break;
      case 'gameDetails' :
        currentView = <GameDetails game_id={this.props.router.game_id} />;
        break;
      case 'editGameDetails' :
        currentView = <EditGameDetails game_id={this.props.router.game_id} />;
        break;
      case 'emptyField' :
        currentView = <EmptyField />;
        break;
      case 'signUp' :
        currentView = <SignUp />;
        break;
     default :
      currentView = <Splash/>;
    }

    return (
      <div>
        <Navigation current={this.state.currentRoute} currentUser={this.state.currentUser}/>
        {currentView}
        <footer className="footer">
          <div className="container">
            <p>
              Made with <Icon type="heart" /> at The Iron Yard
              in St. Petersburg, Florida.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
