import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchApi } from '../redux/action'
import { SET_DICTIONARY_RESULT } from '../redux/types'
import LinearGradient from 'react-native-linear-gradient'
import {
    View,
    Text,
    Button,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
export const Navbar = () => {

    const dispatch = useDispatch()
    const [word, setWord] = useState('')

    const clearEverything = () => {
        setWord('')
        dispatch({ type: SET_DICTIONARY_RESULT, payload: null })
    }

    const searchWord = () => {
        if (word) {
            dispatch(fetchApi(word))
        }
    }

    return (
        <LinearGradient style={styles.nav} colors={['rgba(49, 53, 100, 1)', 'rgba(19, 20, 38, 1)']}>
            <View style={styles.tools}>
                <View style={styles.inputWrapper}>
                    <Icon name="search" size={20} color="#ccc" style={styles.iconOne}/>
                    <TextInput
                        style={styles.searchInput}
                        onChangeText={setWord}
                        inlineImageLeft='search_icon'
                        placeholder="Search ..."
                        placeholderTextColor="#ccc"
                        value={word}
                    />
                    <TouchableOpacity onPress={clearEverything}>
                        <Icon name="times" size={20} color="#ccc" style={styles.iconTwo}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={searchWord}>
                    <Icon name="search" size={40} color="#fff" style={{marginLeft: 10}}/>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <View>
                    <Icon name="feather-alt" size={35} color="#ccc"/>
                </View>
                <View style={styles.hintwrapper}>
                    <Text style={styles.hint}>Type a word and then hit enter to search the meaning, examples, pronunciation</Text>
                    <Text style={{color: '#aaa', marginTop: 5}}>60.000+ words....</Text>
                </View>
            </View>
            <View style={styles.rightCircle}></View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    nav: {
        position: 'relative',
        backgroundColor: '#391d69',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 230,
        // backgroundColor: 'red',
        borderBottomLeftRadius: 50,
        zIndex: 52,
    },
    inputWrapper: {
        position: 'relative',
        borderColor: 'royalblue',
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        flexDirection: 'row',
        height: 50
    },
    iconOne: {
        left: -5
    },
    iconTwo: {
        right: -3
    },
    gradient: {
        padding: 10,
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderBottomLeftRadius: 50
    },
    tools: {
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rightCircle: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 100,
        height: 100,
        backgroundColor: 'rgba(19, 20, 38, 1)',
        transform: [{ translateY: 50 }, { translateX: 50 }],
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'white',
        zIndex: 50
    },
    searchInput: {
        fontSize: 18,
        width: '78%',
        padding: 10,
        color: 'white',
    },
    center: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 2,
        borderRightWidth: 2,
        borderTopRightRadius: 50,
        borderTopColor: 'white',
        borderRightColor: 'white',
        padding: 15
    },
    searchBtn: {
        borderRadius: 15
    },
    hintwrapper: {
        flexDirection: 'column'
    },
    hint: {
        paddingRight: 10,
        paddingLeft: 10,
        marginLeft: 15,
        textAlign: 'left',
        color: '#fff',
        fontSize: 20
    }
})