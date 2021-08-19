import React, { Component } from 'react';
import Feed from "./Feed";
import { Text, View, StyleSheet, Animated, Pressable } from 'react-native';

class Home extends Component {
   constructor(props) {
      super(props);
      this.state = {
        data: {"items":[]},
        label: "FEED"
      };
      //this._fetchData = this._fetchData.bind(this);
      // require('../data/content.json')
   }
   
   render(){
      return (
      <View style={{flex:1}}>
         <View style={styles.miniBox}>
            <View style={styles.miniIcons}>
               <Text>Profile Icon</Text>
            </View>
            <View style={styles.labelBar}>
               <Text style={styles.fText}>{this.state.label}</Text>
            </View>
            <View style={styles.miniIcons}>
               <Text>Settings Icon</Text>
            </View>
         </View>
         <View style={styles.mainBox} >
            <Feed uname={this.props.route.params.name} data={this.state.data}/>
         </View>
         <View style={styles.miniBox}>
            <Pressable style={styles.Icons}>
               <Text>Feed Icon</Text>
            </Pressable>
            <Pressable 
               style={({pressed}) => [
                  styles.Icons,
                  {
                    backgroundColor: pressed ? '#A1599B' : '#E1599B',
                  }
                ]}
            >
               <Text>Notification Icon</Text>
            </Pressable>
            <Pressable style={styles.Icons}>
               <Text>Connection Icon</Text>
            </Pressable>
         </View>
      </View>
      )
   }
}

export default Home;

const styles = StyleSheet.create({
   miniBox:{
      flex:0.1,
      flexDirection:"row",
   },
   mainBox: {
      flex:0.8,
      backgroundColor:"#EEB9A6",
   },
   miniIcons: {
      flex:0.15,
      backgroundColor: "#80473B",
      borderColor:"black",
      borderWidth:2
   },
   labelBar: {
      flex:0.7,
      flexDirection:"row",
      backgroundColor:"#9D5B44",
      alignContent:"center",
      justifyContent:"center"
   },
   Icons: {
      flex:0.333,
      backgroundColor: "#E1599B",
      borderColor:"black",
      flexDirection:"row",
      borderWidth:2,
      alignContent:"center",
      justifyContent:"center"
   },
   fText: {
      fontWeight:"bold",
      fontSize: 50
   }
})