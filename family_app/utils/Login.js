/*
 * Family App
 * Author: Joel Antony Xaviour
 */

import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput, TouchableHighlightBase } from 'react-native';

class Login extends Component {
  state = {
    username: "Joel"
  }

  handleUname = (uname) => {
      this.setState({username: uname})
  }

  Submit = () => {
      alert("username: " + this.state.username)
  }

  render(){
    return (
      <View>
        <Text style={styles.labels}>Username</Text>
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Joel"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleUname}/>
        <Button onPress={this.Submit} title="Submit"/>
      </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
    layout:{
        padding: 10,
        backgroundColor: 'red',
    },
    labels: {
        alignItems:'center',
        justifyContent:'center',
        fontSize: 20   
    },
    input:{
        margin: 15,
        height: 40, 
        borderColor: '#7a42f4',
        borderWidth: 1
    }
})