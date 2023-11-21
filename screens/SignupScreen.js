// screens/SignScreen.js
import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput,Button, TouchableOpacity, StyleSheet } from 'react-native';
import Heder from './Heder';
import Custmbutton from "./Custmbutton.js"
import Linkcomponents from './Linkcomponents';

export default function SignScreen({ navigation }) {

  const [phonenum, setPhonenum] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [id, setId] = useState('');
  const [bdate, setBdate] = useState('');

  const handleRegistration = () => {

    if (password === confirmPassword) {
      console.log('confirmPassword successful!');
      navigation.navigate('Vcode');
    } else {
      console.log('confirmPassword failed. Please try again.');
    }
  };



  return (
  
   
< View style={styles.container}>
      <View style={styles.header}>
      <Heder titel={"التسجيل"}
       
      ></Heder>
      </View>
      <View style={styles.container_2}>
      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <View style={styles.labelContainer}>
              <TextInput style={styles.labelText}
               placeholder="رقم الجوال"
               keyboardType='number-pad'
              value={phonenum}
             onChangeText={(phonenum)=>setPhonenum(phonenum)}>
             
             </TextInput>
            </View>
    
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <View style={styles.labelContainer}>
              <TextInput style={styles.labelText}
               placeholder="رقم الهوية"
               keyboardType='number-pad'
              value={id}
             onChangeText={(id)=>setId(id)}>
             
             </TextInput>
            </View>
    
          </View>
        </View>
        
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <View style={styles.labelContainer}>
              <TextInput style={styles.labelText}
               placeholder="تاريخ الميلاد "
               keyboardType='number-pad'
              value={bdate}
              onChangeText={(bdate)=>setBdate(bdate)}>
             
             </TextInput>
            
            </View>
    
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <View style={styles.labelContainer}>
              <TextInput style={styles.labelText}
               placeholder="كلمة المرور"
            
              secureTextEntry
              value={password}
              onChangeText={(password)=>setPassword(password)}

              />
            </View>
            <View style={styles.passwordInputBox}>
          
              <View style={styles.passwordIcon} />
            </View>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.inputWrapper}>
            <View style={styles.labelContainer}>
              <TextInput style={styles.labelText}
               placeholder="تأكيد كلمة المرور"
              secureTextEntry
              value={confirmPassword}
              onChangeText={(confirmPassword)=> setConfirmPassword(confirmPassword) }
      
              />
            </View>
           

            <View style={styles.passwordInputBox}>
          
              <View style={styles.passwordIcon} />
            </View>
          </View>
        </View>
      </View>

    </View>
 


    <View style={styles.signup}>
    <View >
      <Text style={styles.signupText_2}>
        بالاستمرار أنت موافق على إقرار
      </Text>
      <Text style={styles.signupLink_2}>
        الموافقة العامة وحقوق المستفيد
      </Text>
    </View>
    <TouchableOpacity style={styles.loginButton}>
        <Custmbutton
        name={"تسجيل "}
        onpress={handleRegistration} 
            
        />
        </TouchableOpacity>
    
        <Linkcomponents
          onpress= {() => navigation.navigate('Login')} 
          text1={"لديك حساب؟"}
          text2={ "تسجيل دخول"}
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
    marginBottom:0.2,
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
  icon: {
    // Your icon styles
  },
  notification: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  innerCircle: {
    // Styles for the inner circle
  },
  notificationIcon: {
    width: 60,
    height: 11,
   
   

  },
  error: {
    color: 'red',
    marginBottom: 10,
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
    wordWrap: 'break-word',
  },
  subText: {
    color: '#475467',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 24,
    wordWrap: 'break-word',
  },
  form: {
    color: '#667085',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 24,
    wordWrap: 'break-word',
  },

textInput:{
    color: '#667085',
    fontSize: 16,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 24,
    wordWrap: 'break-word',
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
    wordWrap: 'break-word',
  },
  signupText_2: {
    color: '#545F71', fontSize: 14, fontFamily: 'Cairo', fontWeight: '400', lineHeight: 20 }
  ,
  signupLink: {
    color: '#475467',
    fontSize: 14,
    fontFamily: 'Cairo',
    fontWeight: '400',
    lineHeight: 20,
    wordWrap: 'break-word',

  },
  signupLink_2: 
    { color: '#3F1DE5', fontSize: 14, fontFamily: 'Cairo', fontWeight: '400', lineHeight: 20 },

  container_2: {
    flex: 1,
    width: '100%',
    borderRadius: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 16,
    marginTop: 69, 
    backgroundColor: 'white',
    elevation: 2, 
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
  inputBox: {
    width: '100%',
    height: '100%',
    // Add styles for your input component
  },
  passwordInputBox: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // Add styles for your password input component
  },
  passwordIcon: {
    width: 16,
    height: 16,
    marginLeft: 8,
    // Add styles for your password icon
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
  







