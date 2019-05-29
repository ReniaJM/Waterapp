import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Basicbutton = props => (
    <TouchableOpacity style={[
        styles.container,
        props.style,
        props.disabled && styles.disabled,
    ]}
        disabled={props.disabled}
        onPress={props.onPress}>
        <Text  style={styles.text}>{props.title}</Text>

    </TouchableOpacity>
);

const styles = StyleSheet.create({
   container: {
       backgroundColor:'#007AFF',
       paddingVertical:8,
       paddingHorizontal:16,
       borderRadius:8,
       shadowColor: "#000",
       shadowOffset: {
           width: 0,
           height: 4,
       },
       shadowOpacity: 0.30,
       shadowRadius: 4.65,
       elevation: 8,
    },
    text: {
       color:'white',
       textAlign: 'center',
       fontSize:16,
    },
    disabled:{
        backgroundColor:'grey',
    }


});

export default Basicbutton;

