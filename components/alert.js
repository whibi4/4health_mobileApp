import * as React from 'react';
import { Text, View } from 'react-native'

export default Alert = (props) => {
    return (
        <View style={{ backgroundColor: "rgba(206, 25, 95,0.6 )", width:'100%', padding:20, borderRadius: 5, alignItems: 'center', }}>
            <Text style={{ fontFamily: 'Montserrat-LightItalic', color: "#ecf0f1" }}>{props.alert}</Text>
        </View>
    )
}