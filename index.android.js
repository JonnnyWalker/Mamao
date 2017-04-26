import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {Router, Scene} from 'react-native-router-flux';
import firebase from './firebase';

import Login from './Login';
import Home from './Home';
import Event from './Event';
import Pay from './Pay';
import Zone from './Zone';
import Information from './Information';
import Confirmation from './Confirmation';
import Feedback from './Feedback';

export default class Mamao extends Component {
  render() {
      return (
                <Router>
                  <Scene key="root">
                    <Scene key="Login" component={Login} title="Login" initial={true}/>
                    <Scene key="Home" component={Home} title="News" />
                    <Scene key="Event" component={Event} title="Event" />
                    <Scene key="Zone" component={Zone} title="Zone" />
                    <Scene key="Information" component={Information} title="Information" />
                    <Scene key="Pay" component={Pay} title="Pay" />
                    <Scene key="Confirmation" component={Confirmation} title="Confirmation" />
                    <Scene key="Feedback" component={Feedback} title="Feedback" />
                  </Scene>  
                </Router>
            );
          }
        }

AppRegistry.registerComponent('Mamao', () => Mamao);