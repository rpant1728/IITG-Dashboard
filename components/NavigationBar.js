import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import App from '../App'
import { Actions } from 'react-native-router-flux';

export default class NavigationBar extends React.Component {
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1, flexDirection: 'row', paddingTop:20, backgroundColor: '#7f8c8d'}}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress = {() => {Actions.events(); }} activeOpacity={0.8} >
            <View style={styles.container}>
              <Image source={require('../assets/events_icon.png')} style={styles.img}/>
              <Text style={styles.paragraph}>Events</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress = {() => {Actions.deadlines(); }} activeOpacity={0.8} >
            <View style={styles.container}>
              <Image source={require('../assets/deadline_icon.png')} style={styles.img}/>
              <Text style={styles.paragraph}>Deadlines</Text>
            </View>
          </TouchableOpacity>              
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity onPress = {() => {Actions.pages(); }} activeOpacity={0.8} >
            <View style={styles.container}>
              <Image source={require('../assets/pages_icon.png')} style={styles.img}/>
              <Text style={styles.paragraph}>Pages</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}  

const styles = StyleSheet.create({
  paragraph: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#ffffff',
    fontFamily: 'monospace'
  },
  img: {
    width: 30, 
    height: 30
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor : '#85c1e9'
  }
});
 