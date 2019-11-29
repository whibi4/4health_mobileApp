import React from 'react';
import { Block, Input, Button, NavBar, Icon } from 'galio-framework'
import { Text, Dimensions ,TouchableOpacity  } from 'react-native'
import Element from '../components/elementSettings'
import ElementTest from '../components/elementTest'
import Alert from '../components/alert'
import {Ionicons} from '@expo/vector-icons'
export default class QuickTest extends React.Component {

    state={
        heartBeat : 85,
        temperature : 43,
        bloodSugar : 80,
        cholesterol : 200 ,
        bloodPressure_Systolic : 70 ,
        bloodPressure_Diastolic : 50 ,
        bloodIron : 500 ,
    }
    render() {
        return (
            <Block flex>
                <NavBar 
                left={(
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('HealthTracker')}>
                        <Ionicons name="ios-arrow-back" size={25} color="#2c3e50" />
                    </TouchableOpacity>
                )}
                titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="QUICK TEST" />
                <Block flex>
                    <ElementTest prec={false} max={170} min={30} icon={require('../assets/icons/heart.png')} field='Heart beat' onChangeHandler={(text) => this.setState({ heartBeat: text })} value={this.state.heartBeat} />
                    <ElementTest prec={true} max={30} min={20} icon={require('../assets/icons/thermometer.png')} field='Temperature' onChangeHandler={(text) => this.setState({ temperature: text })} value={this.state.temperature} />
                    <ElementTest prec={true} max={160} min={40} icon={require('../assets/icons/toffee.png')} field='Blood sugar' onChangeHandler={(text) => this.setState({ bloodSugar: text })} value={this.state.bloodSugar} />
                    <ElementTest prec={true} max={130} min={50} icon={require('../assets/icons/cholesterol.png')} field='Cholesterol' onChangeHandler={(text) => this.setState({ cholesterol: text })} value={this.state.cholesterol} />
                    <ElementTest prec={true} max={120} min={50} icon={require('../assets/icons/blood-pressure.png')} field='Systolic' onChangeHandler={(text) => this.setState({ bloodPressure_Systolic: text })} value={this.state.bloodPressure_Systolic} />
                    <ElementTest prec={true} max={130} min={20} icon={require('../assets/icons/blood-pressure.png')} field='Diastolic' onChangeHandler={(text) => this.setState({ bloodPressure_Diastolic: text })} value={this.state.bloodPressure_Diastolic} />
                    <ElementTest prec={true} max={80} min={15} icon={require('../assets/icons/blood-cell.png')} field='Blood iron' onChangeHandler={(text) => this.setState({ bloodIron: text })} value={this.state.bloodIron} />
                    <Block flex={1} midlle center >
                    <Button style={{ marginBottom:10}} shadowless={true} color="#ce195f" onPress={() => this.props.navigation.navigate('ResultQuickTest')} ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1"  }}> TEST</Text></Button>
                    </Block>
                </Block>
            </Block>
        )
    }

}   