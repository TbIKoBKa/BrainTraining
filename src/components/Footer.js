import React from 'react'
import { StyleSheet, View } from 'react-native'
import { MyText } from './Text'

const Footer = ({ result }) => {
    return (
        <View style={styles.footer}>
            <MyText>{result.message ? `${result.message}!` : ``}{result.combo > 0 ? ` x${result.combo}` : ``}</MyText>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    }
})

export default Footer