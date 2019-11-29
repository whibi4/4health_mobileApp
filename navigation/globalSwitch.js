import React from 'react';
import {
    createAppContainer,
createSwitchNavigator,
  DrawerItems,
} from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


import LogInSignUpStack from './logInSignUpStack'
import SettingsStack from './settingsStack'
import HealthTrackerStack from './healthTrackerStack'


const navDrawer = createDrawerNavigator({
    HealthTrackerStack:HealthTrackerStack,
    SettingsStack:SettingsStack
})

const nav = createSwitchNavigator({
    LogInSignUpStack: LogInSignUpStack,
    navDrawer: navDrawer,
    
  });


export default GlobalSwitch = createAppContainer(nav)
