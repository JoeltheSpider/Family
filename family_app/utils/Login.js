/*
 * Family App
 * Author: Joel Antony Xaviour
 */

import React, { Component } from 'react';
import { Text, View, Pressable, StyleSheet, TextInput } from 'react-native';

class Login extends Component {
  state = {
    username: "Joel"
  }

  handleUname = (uname) => {
      this.setState({username: uname})
  }

  Submit = () => {
      this.props.navigation.navigate('Home', {name: this.state.username});
  }

  render(){
    return (
      <View style={styles.bg}>
        <Text>(: Family app :)</Text>
        <View style={styles.layout}>
          <Text style={styles.labels}>Enter username</Text>
          <TextInput style = {styles.input}
            underlineColorAndroid = "transparent"
            placeholder = "Joel" 
            placeholderTextColor = "#724A3B"
            autoCapitalize = "none"
            onChangeText = {this.handleUname}/>
          <Pressable style={styles.button} onPress={this.Submit}>
            <Text style={{color:"white"}}>
              Submit
            </Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
    bg: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EEB9A6',
    },
    button: {
      backgroundColor: '#E1599B',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      elevation: 3,
      height: 40
    },
    layout:{
      width: '80%',
      textAlign: 'center',
      padding: 10,
      backgroundColor: '#80473B',
      borderRadius: 20,
    },
    labels: {
      textAlign: 'center',
      color: "white",
      fontSize: 25
    },
    input:{
      textAlign: 'center',
      margin: 15,
      height: 40, 
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: '#9D5B44',
      color: 'white'
    }
})