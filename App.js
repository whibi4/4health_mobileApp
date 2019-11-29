import React from 'react';
import SignUp from './screens/signUp'
import LogIn from './screens/logIn'
import Settings from './screens/settings'
import SettingEditName from './screens/settingEditName'
import SettingEditBloodType from './screens/settingEditBloodType'
import SettingEditWeight from './screens/settingEditWeight'
import SettingEditHeight from './screens/settingEditHeight'
import HealthTracker from './screens/healthTracker'
import TestChart from './screens/testChart'
import HealthRecord from './screens/healthRecord'
import QuickTest from './screens/quickTest'
import ResultQuickTest from './screens/resultQuickTest'
import SettingEditBirthDate from './screens/settingEditBirthDate'
import SettingEditGender from './screens/settingEditGender'
import GlobalSwitch from './navigation/globalSwitch'

import * as Font from 'expo-font';
import {Text} from 'react-native'

export default class App extends React.Component {

  state={
    fontLoaded : false 
  }

  async componentWillMount(){
    await Font.loadAsync({
      'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
      'Montserrat-LightItalic': require('./assets/fonts/Montserrat-LightItalic.ttf'),
      'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf')
    });

    this.setState({fontLoaded:true});
  }

  render(){
    if(this.state.fontLoaded){
      return (
        <GlobalSwitch/>
      );
    }else{
      return (
        <Text>HI</Text>
      );
    }
  }
}