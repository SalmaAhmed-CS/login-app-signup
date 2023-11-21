import React from 'react'
import { View, Text , TouchableOpacity, Image, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
function Custmbutton({name ,onpress}) {
  return (
   
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText} onPress={onpress}> {name}</Text>
      </TouchableOpacity>
    
  )
}

const styles = StyleSheet.create({
signup: {
    alignSelf: 'stretch',
    height: 379,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 16,
  },
  loginButton: {
    alignSelf: 'stretch',
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#160E41',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#160E41',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },

})
export default Custmbutton