import * as React from 'react';
import {Dimensions,Text} from 'react-native'
import {Block, Icon , Button} from 'galio-framework'

export default Element = (props) => {
    // icon , iconFamily , iconColor , field , value
    return (
        <Block width={Dimensions.get('screen').width} style={{paddingRight: 20 ,paddingLeft: 20, borderBottomColor: '#bdc3c7' , borderBottomWidth: 1}} middle={true} row={true}>
            <Icon name={props.icon} family={props.iconFamily} color={props.iconColor} size={30} />
            <Text style={{ fontSize:13 , fontFamily: 'Montserrat-Bold', color: "#2c3e50" , marginRight:5 , marginLeft: 5}}> {props.field} : </Text>
            <Text style={{ fontSize:13 , fontFamily: 'Montserrat-LightItalic', color: "#2c3e50" , marginRight:'auto' }}> {props.value} </Text>
            <Button onlyIcon={true} color='transparent' iconColor='#27ae60' icon='edit' iconFamily='Feather' iconSize={25} onPress={()=>{props.nav.navigate(props.route)}}  ></Button>
        </Block>
    )
}