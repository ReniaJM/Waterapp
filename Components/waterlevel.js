import React ,{ Component }from 'react';
import {View, StyleSheet, Text} from 'react-native';



export default class Waterlevel extends Component {

    render() {
        const gradientHeight= 6;
        const gradientBackground  = '#007AFF';
        const data = Array.from({ length: gradientHeight });
    return (
        <View>
            <Text style={styles.text}>Your Daily water rutine</Text>
            <Text style={styles.textprocent}>100%</Text>
            {data.map((_, i) => (
                <View
                    key={i}
                    style={{
                        backgroundColor: gradientBackground,
                        height: 80,
                        bottom: (gradientHeight + i),
                        width: 250,
                        left: 63,
                        borderColor: 'black',
                        borderBottomWidth:3,
                        top: 40,
                        zIndex: 2,
                        opacity: (1 / gradientHeight) * (i + 1)
                    }}
                />
            ))}
        </View>
);
}
}


const styles = StyleSheet.create({
    container: {


    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
    },

    container2: {
        width: 250,
        height: 50,
        left: 63,
        top: 40,
        borderColor: 'black',
        borderBottomWidth:1,
        backgroundColor: 'black',

    },
    text: {
        color:'black',
        textAlign: 'center',
        fontSize:18,
        padding:8,
    },
    textprocent:{
        color:'blue',
        fontWeight: '700',
        textAlign: 'center',
        fontSize:36,
    },
});






