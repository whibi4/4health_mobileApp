import React from 'react';
import { Dimensions, Image, View, Text } from 'react-native'
import { Block, Input, Button } from 'galio-framework'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Alert from '../components/alert'
import * as URL from '../assets/const';
import { AsyncStorage } from 'react-native';


export default class LogIn extends React.Component {
    state = {
        isValid: true,
        userName: 'L',
        password: 'l'
    }
    async logIn() {
        try {
            let response = await fetch(URL.LOGIN, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.userName,
                    password: this.state.password
                }),
            });

            if (response.status == 200) {
                let res = await response.json();
                await AsyncStorage.setItem('TOKEN', res.token);
                this.setState({ isValid: true, userName: '', password: '' })
                this.props.navigation.navigate('Settings')
            } else {
                this.setState({ isValid: false, userName: '', password: '' })

            }
        } catch (error) {
            console.log(error)
            this.setState({ isValid: false, userName: '', password: '' })
        }
    }
    renderNotValid() {
        if (!this.state.isValid) {
            return <Alert alert="invalid credentials , please try again" />
        }
        return null
    }

    render() {
        return (
            <View>
                <Image source={require('../assets/HEADER.png')} style={{ width: Dimensions.get('screen').width * 0.8, height: Dimensions.get('screen').width * 0.21 }} />
                <KeyboardAwareScrollView>
                    <View style={{ margin: 20 }}>
                        <Image source={require('../assets/logo.png')} style={{ height: Dimensions.get('screen').width * 0.3, width: Dimensions.get('screen').width * 0.3, marginBottom: 5 }} />
                        <Text style={{ fontFamily: 'Montserrat-Bold', color: "#7652af" }}> HEALTHCARE </Text>
                        <Text style={{ fontFamily: 'Montserrat-LightItalic', color: "#7652af" }}>BY YOBITRUST </Text>
                    </View>
                    <Block space='between' middle={true} center={true} width={Dimensions.get('screen').width * 0.9} >
                        <Input style={{ borderColor: "#7652af", borderWidth: 2 }} color="#7652af" placeholder="Email" value={this.state.userName}
                            onChangeText={userName => this.setState({ userName })} />
                        <Input style={{ borderColor: "#7652af", borderWidth: 2, marginBottom: 10 }} password={true} color="#7652af" placeholder="Password" value={this.state.password}
                            onChangeText={password => this.setState({ password })} />
                        <Button style={{ marginBottom: 10 }} shadowless={true} color="#ce195f" onPress={() => this.logIn()}  ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1" }}> LOG IN</Text></Button>
                        <Button style={{ marginBottom: 10 }} shadowless={true} color="#7652af" onPress={() => { this.props.navigation.navigate('SignUp') }} ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1" }}> SIGN IN</Text></Button>
                        {this.renderNotValid()}
                    </Block>
                </KeyboardAwareScrollView>
            </View>
        )
    }

}