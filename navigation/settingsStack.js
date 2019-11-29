import React from 'react';
import {
  createDrawerNavigator,
  DrawerItems,
  createAppContainer
} from 'react-navigation';

import Settings from '../screens/settings'
import SettingEditName from '../screens/settingEditName'
import SettingEditBloodType from '../screens/settingEditBloodType'
import SettingEditWeight from '../screens/settingEditWeight'
import SettingEditHeight from '../screens/settingEditHeight'
import SettingEditBirthDate from '../screens/settingEditBirthDate'
import SettingEditGender from '../screens/settingEditGender'

import { createStackNavigator } from 'react-navigation-stack';


const nav = createStackNavigator({
    Settings:Settings,
    SettingEditName:SettingEditName,
    SettingEditBloodType:SettingEditBloodType,
    SettingEditWeight:SettingEditWeight,
    SettingEditHeight:SettingEditHeight,
    SettingEditBirthDate:SettingEditBirthDate,
    SettingEditGender:SettingEditGender
  },{
    headerMode : 'none'
  });


export default SettingsStack = createAppContainer(nav)