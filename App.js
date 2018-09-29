import * as React from 'react';
import { Text, View, StyleSheet, FlatList, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Events from 'Events';
import Deadlines from 'Deadlines'
import Pages from 'Pages'
import PageDetail from 'PageDetail'
import Login from 'Login'
import { Router, Scene } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
           <Scene key="login" component={Login} title="Login" initial={true} />
           <Scene key="events" component={Events} title="Events" />
          <Scene key="deadlines" component={Deadlines} title="Deadlines" />
          <Scene key="pages" component={Pages} title="Pages"/>
          <Scene key="page_detail" component={PageDetail} title="Page Detail" />
        </Scene>
      </Router>
    )
  }
}




   
