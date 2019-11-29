import * as React from 'react';
import { Dimensions, Text, Image } from 'react-native'
import { Block, Icon, Button, Slider } from 'galio-framework'

const cst ={
    heart:'../assets/icons/heart.png',
    temp:'../assets/icons/heart.png'
}

export default ElementTest = (props) => {
    //  field , value thermometer.png
    return (
        <Block flex={1} width={Dimensions.get('screen').width} style={{ paddingRight: 10, paddingLeft: 10, borderBottomColor: '#bdc3c7', borderBottomWidth: 1 }} middle={true} row={true}>
            <Image source={props.icon} style={{ height: Dimensions.get('screen').width * 0.1, width: Dimensions.get('screen').width * 0.1, marginBottom: 5 }} />
            <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Bold', color: "#2c3e50", marginRight: 5, marginLeft:5 }}> {props.field} : </Text>
            <Block style={{marginRight:5, marginLeft:'auto'}} width={Dimensions.get('screen').width * 0.35}>
                <Slider
                    activeColor='#ce195f'
                    maximumValue={props.max}
                    value={props.val}
                    onValueChange={(a) => props.onChangeHandler(props.prec?Math.round(a*10)/10+props.min:Math.round(a)+props.min) }
                />
            </Block>
            <Text style={{ fontSize: 13, fontFamily: 'Montserrat-Bold', color: "#2c3e50", marginLeft: 'auto' }}> {props.value}  </Text>
        </Block>
    )
}