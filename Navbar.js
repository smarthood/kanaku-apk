import React from 'react'
import {StyleSheet,Text, View} from 'react-native'

export default function Navbar() {
  return (
    <View style={styles.navbar}>
        <Text style={styles.navtext}>பால் கணக்கு</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    navbar: {
        alignItems: 'flex-start',
        paddingVertical: 10,
        marginBottom: 14,
    },
    navtext: {
        color: 'black',
        fontSize: 20
        
    }
})