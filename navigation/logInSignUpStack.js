import React from 'react';
import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from 'react-navigation';

import SignUp from '../screens/signUp'
import LogIn from '../screens/logIn'

import { createStackNavigator } from 'react-navigation-stack';


const nav = createStackNavigator({
    LogIn: {
      screen: LogIn,
    },
    SignUp: {
        screen: SignUp,
      }
  },{
    headerMode : 'none'
  });


export default LogInSignUpStack = createAppContainer(nav)
 