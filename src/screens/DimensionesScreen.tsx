import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

//solo da la info una sola vez 
//const { width, height } = Dimensions.get('window');

export const DimensionesScreen = () => {

    //el hook muestra las dimensiones en tiempo real
    const {width,height} = useWindowDimensions();

    return (
        <View>
            <View style={styles.container}>
                <View style={{...styles.cajaMorada,width: width * .7}} />
                <View style={styles.cajaNaranja} />
            </View>

            <Text style={styles.title}>W: {width} , H: {height}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200,
        backgroundColor: 'red',
    },
    cajaMorada: {
        width: '20%',
        height: '50%',
        backgroundColor: '#5856D6',
    },
    cajaNaranja: {
        width: 50,
        height: 50,
        backgroundColor: '#F0A23B'
    },
    title:{
        fontSize:20,
        textAlign: 'center',
    }
});
