import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default class Deadline extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph1}>
          {this.props.creator}
        </Text>
        <Text style={styles.paragraph2}>
          {this.props.date}
        </Text>
        <Text style={styles.paragraph3}>
          {this.props.contents}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph1: {
    margin: 24,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  paragraph2: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f7dc6f',
  },
  paragraph3: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  // logo: {
  //   backgroundColor: "#056ecf",
  //   height: 128,
  //   width: 128,
  // }
});
