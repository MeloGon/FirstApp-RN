import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab';
export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.styleTitle}>
                Contador : {contador}
            </Text>
            <Fab
                title='-1'
                onPress={() => setContador(contador - 1)}
                position='bl'
            />
            <Fab
                title='+1'
                onPress={() => setContador(contador + 1)}
                position='br'
            />
            {/* <TouchableOpacity
                style={styles.fabLocationBl}
                onPress={() => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> -1 </Text>
                </View>
            </TouchableOpacity> */}

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    styleTitle: {
        textAlign: 'center',
        fontSize: 20,
        top: -15,
    },


})
