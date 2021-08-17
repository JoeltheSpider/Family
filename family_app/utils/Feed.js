import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import Post from './Post';

class Feed extends Component{
    state = {
        items:[
            {
                name: "Birthday",
                content: "Joel's birthday",
                date: "Oct 19",
                type: "rem"
            },
            {
                name: "Birthday",
                content: "Gabriel's birthday",
                date: "July 16",
                type: "rem"
            },
            {
                name: "Aniversary",
                content: "Somebody's wedding aniversary",
                date: "Jan 6",
                type: "rem"
            }

        ]
    }

    renderPosts () {
        return this.state.items.map((item, index) => {
            if (item.type=="rem")
                return <Post key={index} index={index} item={item} />
        });
    }
    /*
        <Text 
            style={{
            color:'white',
            fontSize: 20,
        }}> 
        Hello {this.props.uname}, Welcome back!
        </Text>
    */
    render(){
        return(
            <ScrollView style={{flex:1}}>
                { this.renderPosts() }
            </ScrollView>
        )
    }
}

export default Feed;