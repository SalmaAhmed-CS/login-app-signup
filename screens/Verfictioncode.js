import React from 'react';
import { View, Text, ImageBackground,StyleSheet ,Image,SafeAreaView} from 'react-native';
import  { useState } from 'react';
import Heder from './Heder';
import Linkcomponents from'./Linkcomponents'
import Custmbutton from './Custmbutton';
import { Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { CodeField } from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

const Verfictioncode = ({navigation}) => {
  const [value, setValue] = useState('');

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });



  const handleVerification = () => {

    const expectedCode = '3066'; // Replace with the actual expected verification code
    if (value === expectedCode) {
      console.log('Verification successful!');
      // Implement the logic you want to perform after successful verification
    } else {
      console.log('Verification failed. Please try again.');
      // Implement the logic for failed verification (e.g., show an error message)
    }
  };
  return (


    <View style={styles.container}>
       
      <View style={styles.mainContainer}>
  
        <View style={styles.circleContainer}>
        <ImageBackground
    source={require('/Users/slmyahmd/login-app-signup/assets/Backgroundpatterndecorative.png')}
    style={styles.backgroundImage}
    >
      <View style={{ width: '100%', height: '100%', flexDirection: 'column', alignItems: 'center', marginVertical: 24 }}>
      <View style={{ alignSelf: 'stretch', height: 32, flexDirection: 'column',  alignItems: 'center', marginTop: 8 }}>
      <Image source={ require('/Users/slmyahmd/login-app-signup/assets/Featured-icon.png')}></Image>
      <Text style={{ textAlign: 'center', color: '#101828', fontSize: 24, fontFamily: 'Cairo', fontWeight: '600', lineHeight: 32 }}>رمز التحقق</Text>
      <Text style={{ textAlign: 'center', color: '#101828', fontSize: 16, fontFamily: 'Cairo', fontWeight: '400', lineHeight: 24}}>دخل الرمز الذي قمنا بارساله على رقم الجوال من قبلنا</Text>
 
      </View>
    </View>
    </ImageBackground>
   
        </View>
     
        
        <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        caretHidden={false} 
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell,isFocused && styles.focusCell ,styles.textcell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
        )}
      />
    </SafeAreaView>

        <View style={styles.buttonContainer}>
          <Custmbutton
          name={"تحقق"}
         onPress={handleVerification}
         onpress={handleVerification}
          />
          <Linkcomponents
          onpress= {() => navigation.navigate('Login')} 
          text1={"لم يصلك الرمز؟"}
          text2={"طلب رمز جديد"}
          />
        </View>
     
      </View>
      <View style={styles.backgroundContainer}>
        {/* ... Background container */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 32,
  },
  circleContainer: {
    alignSelf: 'stretch',
    height: 178,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
  },
  inputContainer: {
    alignSelf: 'stretch',
    height: 98,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  buttonContainer: {
    alignSelf: 'stretch',
    height: 132,
    borderRadius: 12,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
  },
  linkContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
   marginTop:0,
    gap: 4,
  },
  backgroundContainer: {
    width: '100%',
    height: 309,
    position: 'absolute',
    top: 436,
    backgroundColor: '#D0D5DD',
    backdropFilter: 'blur(108.73px)',
    marginTop:10,
  },

  container_code: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 6,
  },
  innerContainer: {
    alignSelf: 'stretch',
    height: 64,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 6,
  },
  numberContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 8,
  },
  numberBox: {
    width: 64,
    height: 64,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 29,
    paddingBottom: 8,
    backgroundColor: 'white',
    shadowColor: 'rgba(16, 24, 40, 0.05)',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 2,
    shadowRadius: 2,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#4928FF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  numberBoxSpecial: {
    width: 64,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: 'white',
    shadowColor: 'rgba(158, 119, 237, 0.24)',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#4928FF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  numberText: {

    marginBottom:1,
    justifyContent: 'center',
    color: '#4928FF',
    fontSize: 48,
    fontFamily: 'Cairo',
    fontWeight: '500',
    lineHeight: 64,
   

  },
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 60,
    height: 60,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    textAlign: 'center',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 6,
    paddingBottom: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    overflow: 'hidden',
    borderColor: '#4928FF',
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8, 
    marginRight: 8,
    marginLeft: 8,
  },
  focusCell: {
    borderColor: '#4928FF',
  },
  textcell:{
    alignSelf: 'stretch',
    textAlign: 'center',
    color: '#4928FF',
    fontSize: 48,
    fontFamily: 'Cairo',
    fontWeight: '500',
    lineHeight: 60,
    textAlignVertical: 'center',
    color: '#4928FF',
    },
    focusCell: {
      borderColor:  '#4928FF',
    },
 
    input: {
        height: 40,
        width: 200,
        borderColor: '#4928FF',
        color: '#4928FF',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
      },

});

export default Verfictioncode;
