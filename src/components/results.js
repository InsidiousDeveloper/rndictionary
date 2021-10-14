import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Sound from 'react-native-sound'

export const Results = () => {

    Sound.setCategory('Playback')

    const result = useSelector(state => state.dictionary.result)
    console.log(result)

    const playAudio = (track) => {
        var audioTrack = new Sound(`https://${track}`, Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                return;
            }

            audioTrack.play();
        });

        audioTrack.setVolume(1);
    }

    // if result is empty display nothing
    if (!result) {
        return <View style={styles.wrapper}></View>
    }

    return (
        <ScrollView style={styles.wrapper}>
            <View style={styles.phoneticAndSound}>
                <View style={styles.childOne}>
                    <Text style={styles.headOne}>
                        {
                            result[0].word
                        }
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        {
                            result[0].meanings.map((item, index) => {
                                return (
                                    <Text style={styles.paragraph} key={index}>
                                        {item.partOfSpeech} |
                                    </Text>
                                )
                            })
                        }
                        <Text style={{ marginLeft: 5 }}>
                            {
                                result[0].phonetic
                            }
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{ marginRight: 10 }}
                    onPress={() => playAudio(result[0].phonetics[0].audio)}
                >
                    <Icon name="volume-up" size={25} />
                </TouchableOpacity>
            </View>

            <View style={styles.bubble}>
                <Text style={styles.title}>Meaning</Text>
                {
                    result[0].meanings.map((item, index) => {
                        return (
                            <Text style={styles.paragraph} key={index}>
                                - {item.definitions[0].definition}
                            </Text>
                        )
                    })
                }
            </View>
            <View style={styles.bubble}>
                <Text style={styles.title}>Example</Text>
                {
                    result[0].meanings.map((item, index) => {
                        return (
                            <Text style={styles.paragraph} key={index}>
                                - {item.definitions[0].example}
                            </Text>
                        )
                    })
                }
            </View>
            <View style={styles.bubble}>
                <Text style={styles.title}>Origin</Text>
                    {
                        (() => {
                            if (!!result[0].origin) {
                                return (
                                    <Text style={styles.paragraph}>
                                        - {result[0].origin}
                                    </Text>
                                )
                            } else {
                                return (
                                    <Text style={styles.paragraph}>
                                        - Unknown
                                    </Text>
                                )
                            }
                        }) ()
                    }
            </View>
            <View style={styles.bubble}>
                <Text style={styles.title}>Synonyms</Text>
                {
                    result[0].meanings.map((item, index) => {
                        return (
                            <View style={styles.twoColumns} key={index}>
                                {item.definitions[0].synonyms.map((word, index) => {
                                    return (
                                        <View style={styles.column} key={index} >
                                            <Text>
                                                - {word}
                                            </Text>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })
                }
            </View>
            <View style={styles.bubble}>
                <Text style={styles.title}>Antonyms</Text>
                {
                    result[0].meanings.map((item, index) => {
                        return (
                            <View style={styles.twoColumns} key={index}>
                                {item.definitions[0].antonyms.map((word, index) => {
                                    return (
                                        <View style={styles.column} key={index} >
                                            <Text>
                                                - {word}
                                            </Text>
                                        </View>
                                    )
                                })}
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    )
}
//e0e5ec
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        minHeight: 200,
        borderTopRightRadius: 50,
        backgroundColor: '#e0e5ec',
        paddingLeft: 15,
        paddingRight: 15,
        zIndex: 53,
    },
    twoColumns: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    column: {
        width: '50%'
    },
    phoneticAndSound: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 7,
        padding: 15
    },
    bubble: {
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 7,
        padding: 15,
    },
    childOne: {
        flexDirection: 'column',
        marginRight: 10
    },
    headOne: {
        fontSize: 25
    },
    title: {
        fontSize: 20,
    },
    paragraph: {
        fontSize: 15,
        marginLeft: 5,
        color: 'gray',
    }
})