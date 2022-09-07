import React, { Fragment } from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View, Platform } from 'react-native'

interface Props {
    title: string,
    position: 'br' | 'bl',
    onPress: () => void,

}

export const Fab = (props: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity style={[styles.fabLocation, props.position == 'br' ? styles.right : styles.left]} activeOpacity ={0.8}
                onPress = {props.onPress}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}> {props.title} </Text>
                </View>

            </TouchableOpacity>
        )

    }

    const android = () => {
        return (
            <View style={[styles.fabLocation, props.position == 'br' ? styles.right : styles.left]}
            >
                <TouchableNativeFeedback
                    onPress={props.onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', true, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}> {props.title} </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS == 'ios' ? ios() : android());


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
