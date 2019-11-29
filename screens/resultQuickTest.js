import React from 'react';
import { Block, Input, Button, NavBar, Icon } from 'galio-framework'
import { Text, Dimensions ,TouchableOpacity  } from 'react-native'
import Element from '../components/elementSettings'
import ElementTestResult from '../components/elementTestResult'
import ElementTestResultTotal from '../components/elementTestResultTotal'
import Alert from '../components/alert'
import {Ionicons} from '@expo/vector-icons'
export default class ResultQuickTest extends React.Component {

    state={
        heartBeat : 85,
        temperature : 34,
        bloodSugar : 80,
        cholesterol : 200 ,
        bloodPressure : '70-50' ,
        bloodIron : 500 ,
    }
    render() {
        return (
            <Block flex>
                <NavBar 
                left={(
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={25} color="#2c3e50" />
                    </TouchableOpacity>
                )}
                titleStyle={{ fontFamily: 'Montserrat-Bold' }} onLeftPress={() => console.log("hi")} title="RESULTS" />
                <Block flex>
                    <ElementTestResult value={this.state.heartBeat} state={0} icon={require('../assets/icons/heart.png')} field='Heart beat'/>
                    <ElementTestResult value={this.state.temperature} state={1} icon={require('../assets/icons/thermometer.png')} field='Temperature' />
                    <ElementTestResult value={this.state.bloodSugar} state={0} icon={require('../assets/icons/toffee.png')} field='Blood sugar' />
                    <ElementTestResult value={this.state.cholesterol} state={0} icon={require('../assets/icons/cholesterol.png')} field='Cholesterol' />
                    <ElementTestResult value={this.state.bloodPressure} state={-1} icon={require('../assets/icons/blood-pressure.png')} field='Blood pressure' />
                    <ElementTestResult value={this.state.bloodIron} state={1} icon={require('../assets/icons/blood-cell.png')} field='Blood iron' />
                    <ElementTestResultTotal state={3} />
                </Block>
            </Block>
        )
    }

}   