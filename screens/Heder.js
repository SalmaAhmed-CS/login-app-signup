

import React from 'react';
import { View, Text,Image,ImageBackground ,StyleSheet} from 'react-native';

const Heder = ({titel, subtitel,url}) => {
  return (
  
    <ImageBackground
    source={require('/Users/slmyahmd/login-app-signup/assets/Backgroundpatterndecorative.png')}
    style={styles.backgroundImage}
    >
    <View style={{ width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center', marginVertical: 24 }}>
      <View style={{ alignSelf: 'stretch', height: 32, flexDirection: 'column', alignItems: 'center', marginTop: 8 }}>
      <Image source={ require('/Users/slmyahmd/login-app-signup/assets/Frame1.png')}></Image>
        <Text style={{ textAlign: 'center',marginTop:5, color: '#101828', fontSize: 24, fontFamily: 'Cairo', fontWeight: '600', lineHeight: 32 }}>{titel}</Text>
        <Text style={{ textAlign: 'center',marginTop:5, color: '#101828', fontSize: 16, fontFamily: 'Cairo', fontWeight: '400', lineHeight: 24}}>{subtitel}</Text>

      </View>

    </View>
    </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    marginBottom:10,
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
  },

})


export default Heder