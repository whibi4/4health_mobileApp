import React from 'react';
import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from 'react-navigation';





import HealthTracker from '../screens/healthTracker'
import HealthRecord from '../screens/healthRecord'
import QuickTest from '../screens/quickTest'
import ResultQuickTest from '../screens/resultQuickTest'


import { createStackNavigator } from 'react-navigation-stack';


const navQuickTest=createStackNavigator({
  QuickTest:QuickTest,
  ResultQuickTest:ResultQuickTest
},{
  headerMode : 'none'
});

const nav = createStackNavigator({
  HealthTracker:HealthTracker,
  HealthRecord:HealthRecord,
  navQuickTest:navQuickTest
  },{
    headerMode : 'none'
  });


export default HealthTrackerStack = createAppContainer(nav)