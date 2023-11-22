// screens/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Heder from './Heder';
import Custmbutton from "./Custmbutton.js"
import Linkcomponents from './Linkcomponents';

export default function LoginScreen({ navigation }) {
 


  const [phonenum, setPhonenum] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 

  const handleLogin = () => {

    if (phonenum === "0555215037" && password === "123" ) {
      console.log('login successful!');
      navigation.navigate('Vcode');
    } else {
      console.log('  Please try again.');
    }
  };

  return (

<View style={styles.container}>
      <View style={styles.header}>
      <Heder titel={"أهلا بك"}
      subtitel={"تسجيل دخول"}
    
      />
      
      </View>

     
      <View style={styles.container_2}>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <View style={styles.labelContainer}>
              <TextInput style={styles.labelText}
               placeholder="رقم الجوال"
              value={Number}
             onChangeText={setPhonenum}>
             
             </TextInput>
            </View>
    
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <View style={styles.labelContainer}>
              <TextInput style={styles.labelText}
               placeholder="كلمة المرور"
               secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              />
               <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image
                source={
                  showPassword
                    ? require('/Users/slmyahmd/login-app-signup/assets/eye-off.png')
                    : require('/Users/slmyahmd/login-app-signup/assets/eye-off.png')
                }
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </View>

      <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>نسيت كلمة المرور؟</Text>
        </TouchableOpacity>
      </View>
    </View>
        
      <View style={styles.signup}>
      <TouchableOpacity style={styles.loginButton}>
        <Custmbutton
        name={"تسجيل دخول"}
        onpress = {handleLogin} 
        
     
        />
        </TouchableOpacity>
       

         <Linkcomponents
          onpress= {() => navigation.navigate('Signup')} 
          text1={"ليس لديك حساب؟"}
          text2={"تسجيل"}
          />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 32,
  },
  header: {
    width: '100%',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    width: 28.43,
    height: 11.09,
    backgroundColor: 'black',
  },
  icons: {
    width: 66.66,
    height: 11.34,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  notification: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },

  notificationIcon: {
    width: 60,
    height: 11,
   
   
  },
  notificationIcon: {
    width: 17,
    height: 11,
 
   
  },
  welcome: {
    alignSelf: 'stretch',
    height: 145.50,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 24,
  },
  welcomeText: {
    color: '#101828',
    fontSize: 24,
    fontFamily: 'Cairo' ,
    fontWeight: '600',
    lineHeight: 32,

  },
  subText: {
    color: '#475467',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 24,
  },
  form: {
    color: '#667085',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 24,
  },

textInput:{
    color: '#667085',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 24,
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
  signup: {
    alignSelf: 'stretch',
    height: 379,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 16,
  },
  signupText: {
    color: '#3F1DE5',
    fontSize: 14,
    fontFamily: 'Cairo',
    fontWeight: '600',
    lineHeight: 20,
  },
  signupLink: {
    color: '#475467',
    fontSize: 14,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 20,

  },


  container_2: {
    flex: 1,
    width: '100%',
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 16,
    marginTop: 69, // Adjust this based on your layout
    backgroundColor: 'white',
    elevation: 2, // Android shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  formContainer: {
    alignSelf: 'stretch',
    height: 108,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },
  inputGroup: {
    alignSelf: 'stretch',
    height: 44,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  inputWrapper: {
    alignSelf: 'stretch',
    height: 44,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginBottom: 6,
  },
  labelContainer: {
    alignSelf: 'stretch',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    transform: [{ rotate: '180deg' }],
    transformOrigin: '0 0',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    gap: 8,
  },
  labelText: {
    flex: 1,
    transform: [{ rotate: '180deg' }],
    transformOrigin: '0 0',
    textAlign: 'right',
    color: '#667085',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 24,
  },

  passwordIcon: {
    width: 16,
    height: 16,
    position: 'relative',
    alignItems: 'left',
   
 
  },
  forgotPasswordContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'right',
    marginBottom: 20
  
  },
  forgotPasswordText: {
    color: '#3F1DE5',
    fontSize: 14,
    fontFamily: 'Cairo',
    fontWeight: '600',
    lineHeight: 20,
    textDecorationLine: 'underline',
    alignItems:'right',
  },
});
  







