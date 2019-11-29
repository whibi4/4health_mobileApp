import React from 'react';
import { Dimensions, Text, Image , TouchableOpacity } from 'react-native'
import { Block, Input, Button, NavBar, Icon , Slider } from 'galio-framework'
import {Ionicons} from '@expo/vector-icons'

export default class SettingEditHeight extends React.Component {
    state = {
        val : 50
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
                titleStyle={{ fontFamily: 'Montserrat-Bold' }} title="EDIT WEIGHT" />
                <Block style={{ paddingTop: 20, }} width={Dimensions.get('screen').width} middle={true} center={true} >
                    <Block middle={true} row={true} width={Dimensions.get('screen').width * 0.9} style={{ margin: 10, marginBottom: 70, }} >
                        <Image source={require('../assets/icons/secure.png')} style={{ height: Dimensions.get('screen').width * 0.3, width: Dimensions.get('screen').width * 0.3 }} />
                        <Text style={{ width: Dimensions.get('screen').width * 0.6, marginLeft: 10, marginRight: 10, fontFamily: 'Montserrat-LightItalic', color: "#7652af" }}>Your personal information will be kept strictly confidential and will not be sold, reused, rented, loaned or otherwise disclosed</Text>
                    </Block>
                    <Icon name="ruler" family="Entypo" color="#2980b9" size={40} />
                    <Text style={{color: '#2980b9', fontFamily: 'Montserrat-Bold'}}>{this.state.val+' CM'}</Text>
                    <Block width={Dimensions.get('screen').width * 0.8}>
                        <Slider
                            activeColor = '#ce195f'
                            maximumValue={200}
                            value={this.state.val}
                            onValueChange={(a) => this.setState({val:Math.round(a)})}
                        />
                    </Block>
                    <Button style={{ marginBottom: 10 }} shadowless={true} color="#ce195f" ><Text style={{ fontFamily: 'Montserrat-Bold', color: "#ecf0f1" }}> EDIT</Text></Button>
                </Block>
            </Block>
        )
    }

}   