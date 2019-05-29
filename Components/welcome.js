import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Basicbutton from "./button";

const Welcome =(props)=> (

    <View>
        <Image style={styles.image}
               resizeMode='contain'
               source={require('../assets/glass.png')}

        />

        <Text style={styles.title}>Water</Text>
        <Text style={styles. description}>Drink water!</Text>
        <Basicbutton title="Next" onPress={()=>props.navigation.push('Signin')}/>
    </View>
);
const styles = StyleSheet.create({
    title: {
       fontSize:40,
       fontWeight: '700',
       textAlign: 'center',

    },
    description:{
        fontSize:26,
        color:'grey',
        marginTop:8,
        padding:8,
        textAlign: 'center',
        marginBottom:16
    },
    image:{
        width:100,
        height:200,
        alignSelf:'center'
    }

});

export default Welcome;

