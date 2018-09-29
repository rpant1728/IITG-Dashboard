import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import Expo from "expo";
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: "",
      email: "patidarjayant10@gmail.com",
      key: ''
    }
  }

 signIn = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "540331988372-2rfpmjp974lj68cbgoj3jtl657rpdtkt.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })

      if (result.type === "success") {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl,
          email: result.user.email
        });
        console.log(this.state.email);
        this.verification();
        Actions.events({key:this.state.key});
      } else {
        console.log("cancelled")
      }
    } catch (e) {
      console.log("error", e)
    }
  }

  componentDidMount() {
    this.verification();
  }

   verification = async() => {
    console.log("called");
    var data = {
     email: this.state.email
    };
    try {
      console.log("called1");
      console.log(JSON.stringify(data));
     let response = await fetch(
      "https://shrouded-waters-76897.herokuapp.com/appkey",
      {
        method: "POST",
        headers: {
         "Accept": "application/json",
         "Content-Type": "application/json"
        },
       body: JSON.stringify(data)
     }
    );
     if (response.status >= 200 && response.status < 300) {
        console.log("called2");
        this.setState({key: response.msg});
        console.log(this.state.key);
     }
   } catch (errors) {
     console.log("called3");
     alert(errors);
    } 
} 


  render() {
    return (
      <View style={styles.container}>
        <LoginPage signIn={this.signIn} />
      </View>
    );
  }
}

const LoginPage = props => {
  return (
    <View>
      <Text style={styles.header}>IITG Dashboard</Text>
      <Button title="Sign in with Google" onPress={() => props.signIn()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a5276",
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontSize: 30,
    color: '#b3b6b7',
  }
  // image: {
  //   marginTop: 15,
  //   width: 150,
  //   height: 150,
  //   borderColor: "rgba(0,0,0,0.2)",
  //   borderWidth: 3,
  //   borderRadius: 150
  // }
})
