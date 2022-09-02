import React, { useState } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
export const ContadorScreen = () => {

    const [contador, setContador] = useState(10);

    return (
        <View style={styles.container}>
            <Text style={styles.styleTitle}>
                Contador : {contador}
            </Text>
            <TouchableOpacity
                style={styles.fabLocationBr}
                onPress={() => setContador(contador + 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> +1 </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.fabLocationBl}
                onPress={() => setContador(contador - 1)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> -1 </Text>
                </View>
            </TouchableOpacity>

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
    fabLocationBr: {
        position: 'absolute',
        bottom: 70,
        right: 20,
    },
    fabLocationBl: {
        position: 'absolute',
        bottom: 70,
        left: 20,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center'
    },
    fabText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    }

})
