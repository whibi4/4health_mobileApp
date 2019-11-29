import * as React from 'react';
import { Dimensions, Text, Image } from 'react-native'
import { Block, Icon, Button, Slider } from 'galio-framework'

const feedback ={
    '1':' is high',
    '0':' is normal',
    '-1':' is low'
}

const color ={
    '1':'#c0392b',
    '0':'#27ae60',
    '-1':'#f39c12'
}

const icon = {
    '1':'upcircle',
    '0':'checkcircle',
    '-1':'downcircle'
}
export default ElementTestResult = (props) => {
    //  field , value thermometer.png
    return (
        <Block flex={1} width={Dimensions.get('screen').width} style={{ paddingRight: 10, paddingLeft: 10, borderBottomColor: '#bdc3c7', borderBottomWidth: 1 }} middle={true} row={true}>
            <Image source={props.icon} style={{ height: Dimensions.get('screen').width * 0.1, width: Dimensions.get('screen').width * 0.1, marginBottom: 5 }} />
            <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Bold', color: "#2c3e50", marginRight: 5, marginLeft:5 }}> {props.field} : </Text>
            <Text style={{ fontSize: 13, fontFamily: 'Montserrat-LightItalic', color: "#2c3e50", marginLeft: 'auto' }}> {props.value + feedback[props.state]}  </Text>
            <Icon name={icon[props.state]} family="AntDesign" color={color[props.state]} size={30} />
        </Block>
    )
}