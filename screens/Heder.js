

import React from 'react';
import { View, Text,Image,ImageBackground ,StyleSheet} from 'react-native';
const Heder = ({titel, subtitel}) => {
  return (
    <ImageBackground
    source={require('/Users/slmyahmd/login-app-signup/assets/Backgroundpatterndecorative.png')}
    style={styles.backgroundImage}>
    <View style={styles.view1}>
      <View style={styles.view2}>
      <Image source={ require('/Users/slmyahmd/login-app-signup/assets/Frame1.png')}></Image>
        <Text style={styles.text1}>{titel}</Text>
        <Text style={styles.text2}>{subtitel}</Text>
      </View>
    </View>
    </ImageBackground>
   
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    marginBottom:10,
    flex: 1,
    resizeMode: 'cover',
  },
view1 :{width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center', marginVertical: 24 },
view2:{ alignSelf: 'stretch', height: 32, flexDirection: 'column', alignItems: 'center', marginTop: 8 },
text1 : { textAlign: 'center',marginTop:5, color: '#101828', fontSize: 24, fontFamily: 'Cairo', fontWeight: '600', lineHeight: 32 },
text2 :{ textAlign: 'center',marginTop:5, color: '#101828', fontSize: 16, fontFamily: 'Cairo', fontWeight: '400', lineHeight: 24}
})


export default Heder