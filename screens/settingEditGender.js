import React from 'react';
import { Dimensions, Text, Image,TouchableOpacity } from 'react-native'
import { Block, Input, Button, NavBar, Icon, Switch } from 'galio-framework'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Ionicons} from '@expo/vector-icons'



export default class SettingEditGender extends React.Component {

    state = {
        male: true
    }

    render() {
        return (
                <Block>
                    <NavBar 
                    left={(
                        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={25} color="#2c3e50" />
                        </TouchableOpacity>
                    )}
                    titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="GENDER" />
                    <Block style={{ paddingTop: 20, }} width={Dimensions.get('screen').width} middle={true} center={true} >
                        <Block middle={true} row={true} width={Dimensions.get('screen').width * 0.9} style={{ margin: 10, marginBottom: 70, }} >
                            <Image source={require('../assets/icons/secure.png')} style={{ height: Dimensions.get('screen').width * 0.3, width: Dimensions.get('screen').width * 0.3 }} />
                            <Text style={{ width: Dimensions.get('screen').width * 0.6, marginLeft: 10, marginRight: 10, fontFamily: 'Montserrat-LightItalic', color: "#7652af" }}>Your personal information will be kept strictly confidential and will not be sold, reused, rented, loaned or otherwise disclosed</Text>
                        </Block>
                        <Icon name="male-female" family="Foundation" color="#f39c12" size={40} />
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: "#f39c12" }}>{this.state.male ? 'MALE' : 'FEMALE'}</Text>
                        <Block style={{ margin: 10 }} row={true} >
                            <Switch
                                color="#3498db"
                                ios_backgroundColor='#FFC0CB'
                                trackColor={{true:'#3498db', false: '#FFC0CB'}}
                                value={this.state.male}
                                onValueChange={() => this.setState({ male: !this.state.male })}
                            />
                        </Block>
                        <Button style={{ marginBottom: 10 }} shadowless={true} color="#ce195f" ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1" }}> EDIT</Text></Button>
                    </Block>
                </Block>

        )
    }

}   