import React from 'react';
import { Block, Input, Button, NavBar, Icon } from 'galio-framework'
import { Text, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ElementHealthRecord from '../components/elementHealthRecord'
import Alert from '../components/alert'
export default class HealthRecord extends React.Component {
    state = {
        activeButton: 0
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
                    titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="HEALTH RECORD" />
                <Block row height={40} style={{ margin: 8, borderColor: '#2980b9', borderWidth: 2, borderRadius: 5, }}>
                    <Block flex style={{ paddingTop: 10, alignItems: 'center', fontFamily: 'Montserrat-Bold', backgroundColor: this.state.activeButton == 0 ? '#3498db' : null }}>
                        <TouchableOpacity onPress={() => this.setState({ activeButton: 0 })}>
                            <Text style={{ fontFamily: 'Montserrat-Bold', color: this.state.activeButton == 0 ? '#ecf0f1' : "#2c3e50" }} >Day</Text>
                        </TouchableOpacity>
                    </Block>
                    <Block flex style={{ paddingTop: 10, alignItems: 'center', fontFamily: 'Montserrat-Bold', backgroundColor: this.state.activeButton == 1 ? '#3498db' : null }}>
                        <TouchableOpacity onPress={() => this.setState({ activeButton: 1 })}>
                            <Text style={{ fontFamily: 'Montserrat-Bold', color: this.state.activeButton == 1 ? '#ecf0f1' : "#2c3e50" }} >Week</Text>
                        </TouchableOpacity>
                    </Block>
                    <Block flex style={{ paddingTop: 10, alignItems: 'center', fontFamily: 'Montserrat-Bold', backgroundColor: this.state.activeButton == 2 ? '#3498db' : null }}>
                        <TouchableOpacity onPress={() => this.setState({ activeButton: 2 })}>
                            <Text style={{ fontFamily: 'Montserrat-Bold', color: this.state.activeButton == 2 ? '#ecf0f1' : "#2c3e50" }} >Month</Text>
                        </TouchableOpacity>
                    </Block>
                    <Block flex style={{ paddingTop: 10, alignItems: 'center', fontFamily: 'Montserrat-Bold', backgroundColor: this.state.activeButton == 3 ? '#3498db' : null }}>
                        <TouchableOpacity onPress={() => { this.setState({ activeButton: 3 }); console.log('3') }}>
                            <Text style={{ fontFamily: 'Montserrat-Bold', color: this.state.activeButton == 3 ? '#ecf0f1' : "#2c3e50" }} >All</Text>
                        </TouchableOpacity>
                    </Block>
                </Block>
                <Block flex>
                    <ElementHealthRecord value={'85'} state={0} icon={require('../assets/icons/heart.png')} field='Heart beat' />
                    <ElementHealthRecord value={'34'} state={1} icon={require('../assets/icons/thermometer.png')} field='Temperature' />
                    <ElementHealthRecord value={'80'} state={0} icon={require('../assets/icons/toffee.png')} field='Blood sugar' />
                    <ElementHealthRecord value={'200'} state={0} icon={require('../assets/icons/cholesterol.png')} field='Cholesterol' />
                    <ElementHealthRecord value={'70-50'} state={-1} icon={require('../assets/icons/blood-pressure.png')} field='Blood pressure' />
                    <ElementHealthRecord value={'500'} state={1} icon={require('../assets/icons/blood-cell.png')} field='Blood iron' />

                </Block>
            </Block>
        )
    }

}   