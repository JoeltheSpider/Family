import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Post extends Component{
    item = this.props.item;

    render(){
        return(
            <View style={styles.postBox}>
                <Text style={{flex:1, fontSize:100}}> {this.item.content} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    postBox: {
        flex:1,
        backgroundColor: "white",
        opacity: 0.7,
        borderWidth: 10,
        padding:5,
    }
})

export default Post;