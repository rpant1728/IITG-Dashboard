import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Linking, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Deadline from './components/Deadline';
import NavigationBar from './components/NavigationBar';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

var deadlines = [
    { date: '12/1/2011', creator: 'Xpressions', contents: 'Auditions for upcoming play' },
    { date: '13/1/2011', creator: 'Robotics Club', contents: 'Arduino tutorials' },
    { date: '14/1/2011', creator: 'Cadence Club', contents: 'Flash mob' }
];

export default class Deadlines extends React.Component {

  static navigationOptions = {
    title: 'Deadline',
    header: null
  }; 

   CalendarHandler = () => {
    Linking.openURL('https://www.google.com/calendar').catch(err => console.error('An error occurred', err));
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:6}}>
          <FlatList
            data={deadlines}
            renderItem={({item}) => (
              <TouchableOpacity onPress = {this.CalendarHandler} activeOpacity={0.8} >
              <Card title="Deadline">
                <Deadline date={item.date} creator={item.creator} contents={item.contents}/>
              </Card>
              </TouchableOpacity>
            )}
          />   
        </View>
        <View style={{flex:0.8}}>
          <NavigationBar/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#34495e',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
