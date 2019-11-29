import React from 'react';
import { Dimensions, Text, Image,TouchableOpacity } from 'react-native'
import { Block, Input, Button, NavBar, Icon } from 'galio-framework'
import {Ionicons} from '@expo/vector-icons'


export default class SettingEditName extends React.Component {

    render() {
        return (
            <Block>
                <NavBar 
                left={(
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={25} color="#2c3e50" />
                    </TouchableOpacity>
                )}
                 titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="EDIT NAME" />
                <Block style={{ paddingTop: 20, }} width={Dimensions.get('screen').width} middle={true} center={true} >
                    <Block middle={true} row={true} width={Dimensions.get('screen').width * 0.9} style={{ margin: 10, marginBottom: 70, }} >
                        <Image source={require('../assets/icons/secure.png')} style={{ height: Dimensions.get('screen').width * 0.3, width: Dimensions.get('screen').width * 0.3 }} />
                        <Text style={{ width: Dimensions.get('screen').width * 0.6, marginLeft: 10, marginRight: 10, fontFamily: 'Montserrat-LightItalic', color: "#7652af" }}>Your personal information will be kept strictly confidential and will not be sold, reused, rented, loaned or otherwise disclosed</Text>
                    </Block>
                    <Icon name="user" family="Feather" color="#8e44ad" size={40} />
                    <Input style={{marginTop: 20, borderColor: "#7652af", borderWidth: 2 ,width:Dimensions.get('screen').width * 0.9 }} color="#7652af" placeholder="Name" />
                    <Button style={{ marginBottom: 10 }} shadowless={true} color="#ce195f" ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1" }}> EDIT</Text></Button>
                </Block>
            </Block>
        )
    }

}   