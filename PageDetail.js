import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // 0.19.1

export default class PageDetail extends React.Component {
  render() {
    const { navigation } = this.props;
    const page = navigation.getParam('page');
    var posts = [];
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Pages
        </Text>
        <FlatList
          data={posts}
          renderItem={({item}) => (
            <Card title="Event">
              <Event date={item.date} creator={item.creator} contents={item.contents}/>
            </Card>          
          )}
        />        
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