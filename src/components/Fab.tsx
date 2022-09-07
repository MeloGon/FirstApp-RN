import React, { Fragment } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string,
    position: 'br' | 'bl',
    onPress: () => void,

}

export const Fab = (props: Props) => {
    return (
        <View style={[styles.fabLocation, props.position == 'br' ? styles.right : styles.left]}
        >

            <TouchableNativeFeedback
                onPress={props.onPress}
                background ={TouchableNativeFeedback.Ripple('#28425B',true,30)}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {props.title} </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 70,

    },
    right: {
        right: 20,
    }, left: {
        left: 20,
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    fabText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
    }
});
