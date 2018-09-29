import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import Post from 'components/Event';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

export default class Pages extends React.Component {
  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data');
    return (
      <View style={styles.container}>
        <View style={{flex:0.875}}>
          <Text style={styles.paragraph}>
            Pages
          </Text>
          <FlatList
            data={data.pages}
            renderItem={({item}) => (
              <TouchableHighlight onPress = {() => this.props.navigation.navigate("PageDetail", {page: item})}>
                <Text> {item.name} </Text>
              </TouchableHighlight>            
            )}
          />       
        </View>
        <View style={{flex:0.125}}>
          <View style={{flex: 1, flexDirection: 'row', paddingTop:20, backgroundColor: '#6495ED'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              // <TouchableHighlight onPress = {() => this.props.navigation.navigate("Fixtures", )}>
                <Text style={styles.paragraph}>Events</Text>
              // </TouchableHighlight>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              // <TouchableHighlight onPress = {() => this.props.navigation.navigate("Points_Table")}>
                <Text style={styles.paragraph}>Deadlines</Text>
              // </TouchableHighlight>
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              // <TouchableHighlight onPress = {() => this.props.navigation.navigate("Teams")}>
                <Text style={styles.paragraph}>Pages</Text>
              // </TouchableHighlight>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});