import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {Actions, ActionConst, Router, Scene} from 'react-native-router-flux';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import reducer from './src/redux/reducers'

import Login from './src/redux/containers/LoginContainer';
import Profile from './src/redux/containers/ProfileContainer';

const store = createStore(reducer)

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="Login" component={Login} title="Login"  hideNavBar='true'/>
    <Scene key="Profile" component={Profile} initial={true} title="Perfil"  hideNavBar='true'/>
  </Scene>
);

const ConnectedRouter = connect()(Router);

class FirstApp extends Component {
  render() {
    return (
      <Provider store={store}>
          <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('firstapp', () => FirstApp);
