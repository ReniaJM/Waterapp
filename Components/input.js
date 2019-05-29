import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';


export default class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            text:'custom text',
        }
    }

    render() {
        return (
          <TextInput style={styles.input}
                     value= {this.state.text}
                     onChangeText={(text) =>this.setState({text})}/>
        );
    }

}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius:5,
        margin:10,
        color:'grey',
        padding:5
    }

});

