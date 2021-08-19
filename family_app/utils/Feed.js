import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Post from './Post';

class Feed extends Component{

    renderPosts () {
        return this.props.data.items.map((item, index) => {
            if (item.type=="rem")
                return <Post key={index} index={index} item={item} />
        });
    }
    
    render(){
        return(
            <ScrollView style={{flex:1}}>
                { this.renderPosts() }
            </ScrollView>
        )
    }
}

export default Feed;