import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Post extends Component{
    item = this.props.item;

    render(){
        return(
            <View style={styles.postBox}>
                <Text style={{flex:1, fontSize:40}}> 
                    <Text style={{fontWeight:"bold"}}>Content</Text>: {this.item.content}
                    {"\n"}
                    <Text style={{fontWeight:"bold"}}>Type</Text>: {this.item.name}
                    {"\n"}
                    <Text style={{fontWeight:"bold"}}>Date</Text>: {this.item.date}                    
                </Text>
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
        borderColor:"black",
        padding:5,
    }
})

export default Post;