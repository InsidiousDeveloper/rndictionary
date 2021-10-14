import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import { Navbar } from './navbar'
import { Results } from './results'
import { BottomPanel } from './bottomPanel'

const RootElement = () => {
    return (
        <View style={styles.container}>
            <Navbar />
            <View style={styles.wrapper}>
                <Results />
            </View>
            <BottomPanel />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingTop: 50,
        flex: 1,
        backgroundColor: '#e0e5ec'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default RootElement