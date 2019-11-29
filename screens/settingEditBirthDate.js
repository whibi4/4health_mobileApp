import React from 'react';
import { Dimensions, Text, Image, TouchableOpacity } from 'react-native'
import { Block, Input, Button, NavBar, Icon } from 'galio-framework'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Ionicons } from '@expo/vector-icons'



export default class SettingEditBirthDate extends React.Component {
    state={
        year : '1996' ,
        month : '08' ,
        day : '16'
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
                    titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="BIRTH DATE" />
                    <KeyboardAwareScrollView>
                    <Block style={{ paddingTop: 20, }} width={Dimensions.get('screen').width} middle={true} center={true} >
                    
                        <Block middle={true} row={true} width={Dimensions.get('screen').width * 0.9} style={{ margin: 10, marginBottom: 70, }} >
                            <Image source={require('../assets/icons/secure.png')} style={{ height: Dimensions.get('screen').width * 0.3, width: Dimensions.get('screen').width * 0.3 }} />
                            <Text style={{ width: Dimensions.get('screen').width * 0.6, marginLeft: 10, marginRight: 10, fontFamily: 'Montserrat-LightItalic', color: "#7652af" }}>Your personal information will be kept strictly confidential and will not be sold, reused, rented, loaned or otherwise disclosed</Text>
                        </Block>
                        <Icon name="calendar" family="AntDesign" color="#27ae60" size={40} />
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: "#27ae60" }}>{this.state.year+'-'+this.state.month+'-'+this.state.day}</Text>
                        <Block style={{ margin: 10}} row={true} >
                            <Block style={{ marginRight: 10 }} flex={2}><Input type='number-pad' style={{ marginTop: 20, borderColor: "#7652af", borderWidth: 2 }} color="#7652af" placeholder="Year" onChangeText={(year) => this.setState({year})} value={this.state.year}/></Block>
                            <Block style={{ marginRight: 10 }} flex={1}><Input type='number-pad' style={{ marginTop: 20, borderColor: "#7652af", borderWidth: 2 }} color="#7652af" placeholder="Month" onChangeText={(month) => this.setState({month})} value={this.state.month} /></Block>
                            <Block flex={1}><Input  type='number-pad' style={{ marginTop: 20, borderColor: "#7652af", borderWidth: 2 }} color="#7652af" placeholder="Day" onChangeText={(day) => this.setState({day})} value={this.state.day}/></Block>
                        </Block>
                        <Button style={{ marginBottom: 10 }} shadowless={true} color="#ce195f" ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1" }}> EDIT</Text></Button>
                        
                    </Block>
                    </KeyboardAwareScrollView>
                </Block>

        )
    }

}   