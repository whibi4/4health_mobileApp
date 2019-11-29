import * as React from 'react';
import { Dimensions, Text, Image ,TouchableOpacity } from 'react-native'
import { Block, Icon, Button, Slider } from 'galio-framework'


const feedback = {
    '1': ' is high',
    '0': ' is normal',
    '-1': ' is low'
}

const color = {
    '1': '#c0392b',
    '0': '#27ae60',
    '-1': '#f39c12'
}

const icon = {
    '1': 'archive',
    '0': 'archive',
    '-1': 'archive'
}
export default ElementHealthRecord = (props) => {
    //  field , value thermometer.png
    return (
        <Block flex={1} width={Dimensions.get('screen').width} style={{ paddingRight: 10, paddingLeft: 10, borderBottomColor: '#bdc3c7', borderBottomWidth: 1 }} middle={true} row={true}>
            <Image source={props.icon} style={{ height: Dimensions.get('screen').width * 0.1, width: Dimensions.get('screen').width * 0.1, marginBottom: 5 }} />
            <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Bold', color: "#2c3e50", marginRight: 5, marginLeft: 5 }}>Average {props.field} : </Text>
            <Text style={{ fontSize: 13, fontFamily: 'Montserrat-LightItalic', color: "#ce195f", marginLeft: 'auto' }}> {props.value}  </Text>
            <TouchableOpacity onPress={() => console.log('hio')}>
                <Icon name='archive' family="Entypo" color='#27ae60' size={30} />
            </TouchableOpacity>
        </Block>
    )
}