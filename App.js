import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Welcome from "./Components/welcome";
import Signin from "./Components/signin";
import Waterlevel from "./Components/waterlevel";
import { createStackNavigator, createAppContainer } from "react-navigation";



const AppNavigator = createStackNavigator(
    {
      Welcome:Welcome,
      Signin:Signin,
      Waterlevel: Waterlevel
},
    {
      initialRouteName:'Welcome',
      // headerMode
    },


);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {


  render() {
    return (
      <SafeAreaView style={styles.container}>
       <AppContainer/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex:1,


  },

});



