import React from 'react';
import { Block, Input, Button, NavBar, Icon } from 'galio-framework'
import { Text, Dimensions ,TouchableOpacity } from 'react-native'
import Element from '../components/elementSettings'
import Alert from '../components/alert'
import {Ionicons} from '@expo/vector-icons'
export default class HealthTracker extends React.Component {

    render() {
        return (
            <Block flex>
                <NavBar 
                left={(
                    <TouchableOpacity onPress={() => console.log('hio')}>
                        <Ionicons name="ios-menu" size={25} color="#2c3e50" />
                    </TouchableOpacity>
                )}
                titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="HEALTH TRACKER" />
                <Block flex>
                    <Block center flex={1} style={{ backgroundColor: '#f2fcfe', padding: 10, }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#7652af' }}>QUICK TEST</Text>
                        <Block   flex row middle center width={Dimensions.get('screen').width*0.8}>
                            <Icon flex={1} name="rocket1" family="AntDesign" color='#7652af' size={60} />
                            <Text flex={3} style={{ marginRight:5,fontFamily: 'Montserrat-LightItalic' , color:'#7652af'}}>start quick test to evaluate the condition of your body. </Text>
                        </Block>
                        <Button shadowless={true} color="#7652af" onPress={()=>{this.props.navigation.navigate('navQuickTest')}} ><Text style={{ marginLeft:'auto',marginRight:'auto' , fontFamily: 'Montserrat-Bold', color: "#ecf0f1"  }}> START TEST</Text></Button>
                    </Block>
                    <Block center flex={1} style={{ backgroundColor: '#ecf0f1', padding: 10, }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#ce195f' }}>HEALTH RECORD</Text>
                        <Block  flex row middle center width={Dimensions.get('screen').width*0.8}>
                            <Icon  flex={1} name="save" family="AntDesign" color='#ce195f' size={60} />
                            <Text flex={3} style={{marginLeft:5,fontFamily: 'Montserrat-LightItalic' , color:'#ce195f'}}>you can access your medical records anytime, anywhere</Text>
                        </Block>
                        <Button shadowless={true} color="#ce195f" onPress={()=>{this.props.navigation.navigate('HealthRecord')}}><Text style={{marginLeft:'auto',marginRight:'auto' , fontFamily: 'Montserrat-Bold', color: "#ecf0f1"  }}>CONSULT</Text></Button>
                    </Block>
                    <Block center flex={1} style={{ backgroundColor: '#f2fcfe', padding: 10, }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: '#3498db' }}>REAL TIME TRACK</Text>
                        <Block  flex row middle center width={Dimensions.get('screen').width*0.8}>
                            <Icon flex={1} name="hourglass" family="AntDesign" color='#3498db' size={60} />
                            <Text flex={3} style={{marginLeft:5,fontFamily: 'Montserrat-LightItalic' , color:'#3498db'}}>you can track your real-time performance . use device</Text>
                        </Block>
                        <Button shadowless={true} color="#3498db" ><Text style={{ marginLeft:'auto',marginRight:'auto' ,fontFamily: 'Montserrat-Bold', color: "#ecf0f1"  }}>TRACK</Text></Button>
                    </Block>
                </Block>
            </Block>
        )
    }

}   