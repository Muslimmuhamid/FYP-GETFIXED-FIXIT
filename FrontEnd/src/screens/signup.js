import React, {useContext} from 'react'
import {
  View,
  Text,
  TextSimpleInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'
import {useNavigation, useRoute} from '@react-navigation/native'
import {ScrollView} from 'react-native'
import {PRIMARYCOLOR} from '../assets/colors'
import SimpleInput from '../components/input'
import LoginButton from '../components/button'
import Logo from '../assets/images'
import PostMethod from '../assets/Networkcalls/POST'
import {UserContext} from '../context/userAuthContext'

const Signup = ({navigation, route}) => {
  const {user, setUser,bidTask, setbidTask} = useContext(UserContext)
  const [Email, setEmail] = React.useState('')
  const [Password, setPassword] = React.useState('')
  const [ConfirmPassword, setConfirmPassword] = React.useState('')
  const [Username, setUsername] = React.useState('')
  const [WorkerProfession, setWorkerProfession] = React.useState('')
  const [loader, setLoader] = React.useState(false)
  const [googleLoader, setGoogleLoader] = React.useState(false)
  const [errors, setErrors] = React.useState({
    EmailError: '',
    PasswordError: '',
    ConfirmPasswordError: '',
    UsernameError: '',
  }) 
  const signupMethod = async () => {
    if (Email.length > 1 || Password.length > 1) {
      if (Password == ConfirmPassword) {
        const response = await PostMethod(
          {
            name: Username,
            email: Email,
            password: Password,
            geometry: {
              coordinates: [24.883789, 67.083987],
            },
            WorkerProfession: WorkerProfession,
            role: user,
          },
          'auth/signup',
        )

        if (response.data) {
          setUser(response.data)
          console.log('User',response.data)
          if (user == 'worker') {
            navigation.navigate('CustomerRequest')
          } else {
            navigation.navigate('Home')
          }
        } else {
          console.log('User',response)
          alert(response)
        }
      } else {
        alert('Password does not match with confirm password ')
      }
    } else {
      alert('Please Enter Correct Credentials')
    }
  }
  return (
    <>
      <ScrollView style={{backgroundColor: PRIMARYCOLOR}}>
        <ImageBackground
          style={{height: hp('35%'), width: '100%', alignItems: 'center'}}
        >
          <Image
            source={{
              uri:
                'https://cdni.iconscout.com/illustration/premium/thumb/plumber-3376659-4073174.png',
            }}
            style={{
              height: hp('25%'),
              width: hp('25%'),
              resizeMode: 'contain',

              marginTop: hp('3%'),
              backgroundColor: 'white',
              borderRadius: hp('25%'),
              padding: hp('10%'),
            }}
          />
        </ImageBackground>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <Text style={styles.textStylesMainHead}>Create Account</Text>
          <View style={{height: hp('1%')}}></View>
          <Text style={[styles.NormalSizeFont, {textAlign: 'left'}]}>
            Signup to get started !
          </Text>
          <View style={{height: hp('1%')}}></View>

          <SimpleInput
            placeholder={'Username'}
            value={Username}
            onChangeText={e => setUsername(e)}
            placeholderTextColor='#fff'
            error={errors.UsernameError}
          />
          <View style={{height: hp('1%')}}></View>
          <SimpleInput
            placeholder={'Email'}
            value={Email}
            onChangeText={e => setEmail(e)}
            placeholderTextColor='#fff'
            error={errors.EmailError}
          />
          <View style={{height: hp('1%')}}></View>
          <SimpleInput
            placeholder={'Password'}
            value={Password}
            onChangeText={e => setPassword(e)}
            placeholderTextColor='#fff'
            secureTextEntry={true}
            error={errors.PasswordError}
          />
          {/* {PasswordError ? (
            <></>
          ) : (
            <Text
              style={[
                styles.SmallSizeFont,
                {textAlign: 'left', fontSize: hp('1.8%')},
              ]}>
              *Minimum eight characters, at least one letter, one number and one
              special character
            </Text>
          )} */}
          <View style={{height: hp('1%')}}></View>
          <SimpleInput
            placeholder={'Confirm Password'}
            value={ConfirmPassword}
            onChangeText={e => setConfirmPassword(e)}
            placeholderTextColor='#fff'
            secureTextEntry={true}
            error={errors.ConfirmPasswordError}
          />
         {user=="worker"?<>
         <View style={{height: hp('1%')}}></View>
          <SimpleInput
            placeholder={'Worker Profession'}
            value={WorkerProfession}
            onChangeText={e => setWorkerProfession(e)}
            placeholderTextColor='#fff'
            secureTextEntry={true}
            error={errors.WorkerProfession}
          />
         </>:null}
          <View style={{height: hp('1%')}}></View>
          {/* {ConfirmPasswordError ? (
            <></>
          ) : (
            <Text
              style={[
                styles.SmallSizeFont,
                {textAlign: 'left', fontSize: hp('1.8%')},
              ]}>
              *Password should match
            </Text>
          )} */}

          <View style={{height: hp('2%')}}></View>
          <View style={{width: '40%', alignSelf: 'center'}}>
            <LoginButton
              isLoading={loader}
              title='Signup'
              //   onPress={() => Validate()}
              // onPress={testSignOut}
              onPress={() => {
                signupMethod()
              }}
            />
          </View>
          <View style={{height: hp('1%')}}></View>
          <View style={{height: hp('1%')}}></View>

          <View style={styles.footerView}>
            <Text style={styles.SmallSizeFont}>Already have account ? </Text>

            <TouchableOpacity
              onPress={() => {
                // signupMethod()
              }}
            >
              <Text style={[styles.SmallSizeFont, {color: 'blue'}]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  textStylesMainHead: {
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontSize: hp('3.5%'),
    marginBottom: hp('-1.5%'),
  },
  NormalSizeFont: {
    fontSize: hp('2.2%'),
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
  },
  SmallSizeFont: {
    fontSize: hp('2%'),
    textAlign: 'right',
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
  },
  footerView: {
    width: '100%',
    marginBottom: hp('2%'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
export default Signup
