import React from 'react';
import { Block, Input, Button, NavBar, Icon } from 'galio-framework'
import { Text ,TouchableOpacity } from 'react-native'
import Element from '../components/elementSettings'
import Alert from '../components/alert'
import * as URL from '../assets/const';
import { AsyncStorage } from 'react-native';
import {Ionicons} from '@expo/vector-icons'
export default class Settings extends React.Component {

    state = {
        name: 'Mouhamed ouhibi',
        blood_type: 'O+',
        weight: '82 kg',
        height: '188 cm',
        birthdate: '1996-08-16',
        gender: 'Male',
    }

    async getData() {
        let token = await AsyncStorage.getItem('TOKEN');
        let response = await fetch(URL.EDIT, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        });
        let res = await response.json();
        
            this.state.name = res.name;
        this.state.birthdate = res.birthdate;
        this.state.blood_type = res.blood_type;
        this.state.gender = res.gender;
        this.state.height = res.height;
        this.state.weight = res.weight ;
        this.forceUpdate()
        



    }

    render() {
        //this.getData();
        return (
            <Block>
                <NavBar 
                left={(
                    <TouchableOpacity onPress={() => console.log('hio')}>
                        <Ionicons name="ios-menu" size={25} color="#2c3e50" />
                    </TouchableOpacity>
                )}
                titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="SETTINGS" />
                <Block >
                    <Element nav={this.props.navigation} route='SettingEditName' icon="user" iconFamily="Feather" iconColor="#8e44ad" field="Name" value={this.state.name} />
                    <Element nav={this.props.navigation} route='SettingEditBloodType' icon="droplet" iconFamily="Feather" iconColor="#c0392b" field="Blood type" value={this.state.blood_type} />
                    <Element nav={this.props.navigation} route='SettingEditWeight' icon="dashboard" iconFamily="AntDesign" iconColor="#2c3e50" field="Weight" value={this.state.weight} />
                    <Element nav={this.props.navigation} route='SettingEditHeight' icon="ruler" iconFamily="Entypo" iconColor="#2980b9" field="Height" value={this.state.height} />
                    <Element nav={this.props.navigation} route='SettingEditBirthDate' icon="calendar" iconFamily="AntDesign" iconColor="#27ae60" field="birthdate" value={this.state.birthdate} />
                    <Element nav={this.props.navigation} route='SettingEditGender' icon="male-female" iconFamily="Foundation" iconColor="#f39c12" field="Gender" value={this.state.gender} />
                    <Block center={true} style={{ marginTop: 40 }}>
                        <Button style={{ marginBottom: 10 }} shadowless={true} color="#8e44ad" >
                            <Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1" }}> LOG OUT</Text>
                        </Button>
                    </Block>
                </Block>
            </Block>
        )
    }

}   