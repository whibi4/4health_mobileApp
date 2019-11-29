import React from 'react';
import { Dimensions, Image, View, Text } from 'react-native'
import { Block, Input, Button } from 'galio-framework'
import Alert from '../components/alert'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as URL from '../assets/const';
import { AsyncStorage } from 'react-native';
export default class SignUp extends React.Component {
    state = {
        notValid: false,
        email: '',
        password1: '',
        password2: ''
    }

    renderNotValid() {
        if (this.state.notValid) {
            return <Alert alert='Error SignUp , please try again'/>
        }
        return null
    }
    async signUp() {

        if(this.state.password1==this.state.password2){
            try {
                let response = await fetch(URL.SIGNUP, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: this.state.email,
                        password: this.state.password1
                    }),
                });

                if (response.status == 201) {
                    this.props.navigation.goBack();
                } else {
                    this.setState({ notValid: true, email: '', password1: '', password2: '' });
                }
    
    
            } catch (error) {
                console.log(error)
                this.setState({ notValid: true, email: '', password1: '', password2: '' });
            }
        }else{
            this.setState({ notValid: true, email: '', password1: '', password2: '' });
        }
    }

    render() {
        return (
            
            <View>
                <Image source={require('../assets/HEADER.png')} style={{ width: Dimensions.get('screen').width * 0.8, height: Dimensions.get('screen').width * 0.21 }} />
                <KeyboardAwareScrollView>
                <View style={{ margin: 20 }}>
                    <Image source={require('../assets/icons/smile.png')} style={{ height: Dimensions.get('screen').width * 0.3, width: Dimensions.get('screen').width * 0.3, marginBottom: 5 }} />
                    <Text style={{ fontFamily: 'Montserrat-Bold', color: "#7652af" }}> WELCOME TO HEALTHCARE </Text>
                    <Text style={{ fontFamily: 'Montserrat-LightItalic', color: "#7652af" }}>Please make sure to fill out all the required fields correctly </Text>
                </View>
                <Block space='between' middle={true} center={true} width={Dimensions.get('screen').width*0.9} >
                    <Input style={{borderColor:"#7652af" , borderWidth: 2}} color="#7652af" placeholder="Email" value={this.state.email}
                    onChangeText={email => this.setState({ email })}/>
                    <Input style={{borderColor:"#7652af" , borderWidth: 2}} password={true} color="#7652af" placeholder="Password " value={this.state.password1}
                    onChangeText={password1 => this.setState({ password1 })}/>
                    <Input style={{borderColor:"#7652af" , borderWidth: 2 , marginBottom:10}} password={true} color="#7652af" placeholder="Retype password"  value={this.state.password2}
                    onChangeText={password2 => this.setState({ password2 })}/>
                    <Button style={{ marginBottom:10}} shadowless={true} color="#ce195f" ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1"  }} onPress={() => this.signUp()}> CONTINUE </Text></Button>
                    {this.renderNotValid()}
                </Block> 
                </KeyboardAwareScrollView>
            </View>
            
        )
    }

}   