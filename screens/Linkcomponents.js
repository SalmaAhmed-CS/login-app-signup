import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function Linkcomponents({text1,text2,onpress}) {
  return (
    <View style={styles.contaner}>
        <Text style={styles.signupLink}>{text1}<Text style={styles.signupText} onPress={onpress}>{text2} </Text>
         </Text>
    </View>
  )
}


const styles = StyleSheet.create({

    contaner:{
        alignItems: 'center',

    },
signupText: {
    color: '#3F1DE5',
    fontSize: 14,
    fontFamily: 'Cairo',
    fontWeight: '600',
    lineHeight: 20,
    alignItems: 'center',
  },
  signupLink: {
    color: '#475467',
    fontSize: 14,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 20,
    alignItems: 'center',

  },
})
export default Linkcomponents