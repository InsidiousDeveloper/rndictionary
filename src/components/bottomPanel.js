import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const BottomPanel = () => {
    return (
        <View style={styles.signature}>
            <Text style={styles.textSignature}>Made by Asilbek & Karen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    signature: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSignature: {
        color: '#444',
        fontSize: 17
    }
})