import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class Home extends Component {
   

   render(){
      return (
      <View style={{backgroundColor:'#EEB9A6', flex:1}}>
         <Text 
            style={{
               color:'white',
               fontSize: 20,
            }}>
            Hello {this.props.route.params.name}, Welcome back!
         </Text>
      </View>
      )
   }
}

export default Home;