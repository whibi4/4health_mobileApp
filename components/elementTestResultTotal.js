import * as React from 'react';
import { Dimensions, Text, Image ,View } from 'react-native'
import { Block, Button, Slider } from 'galio-framework'
import { FontAwesome } from '@expo/vector-icons';

const feedback = [
    "All your vital signs are at the normal ranges",
    "take care of your health",
    "take care of your health",
    "most of your vital signs are at abnormal ranges",
    "most of your vital signs are at abnormal ranges",
    "you are not ok see doctor as soon as possible",
    "you are at a total system failure call doctor immediately"]
const color =[
    "#27ae60",
    "#f39c12",
    "#f39c12",
    "#e67e22",
    "#e67e22",
    "#e74c3c",
    "#c0392b"]

const icon = [
    "battery-4",
    "battery-3",
    "battery-3",
    "battery-2",
    "battery-2",
    "battery-1",
    "battery-0"]
export default ElementTestResultTotal = (props) => {
    //  field , value thermometer.png
    return (
        <Block flex={1} width={Dimensions.get('screen').width} style={{  backgroundColor: color[props.state],paddingRight: 10, paddingLeft: 10, borderBottomColor: '#bdc3c7', borderBottomWidth: 1 }} middle={true} row={true}>
            
            <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Bold', color: "#ecf0f1", marginRight: 5, marginLeft:5 }}> {feedback[props.state]} </Text>
            <FontAwesome style={{marginRight:5}} name={icon[props.state]} size={30} color="#ecf0f1" />
            
        </Block>
    )
}