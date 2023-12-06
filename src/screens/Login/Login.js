import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {Image, TextInput, Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PrimaryButton from '../../components/PrimaryButton';
import {globalStyles} from '../../styles/globalStyles';
// import {} from '../Redux/Actions/AuthAction';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {API_KEY} from "@env"

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('test12345');
  const submitLogin = () => {
    const newObj = {
      email,
      password,
    };
    dispatch({
      type: 'USER_FETCH_REQUESTED',
      action: {email: 'Developer5@gmail.com', password: 123456},
    });
  };
  const data = useSelector(store => store.auth.user);
  console.log('55 ---- ', API_KEY);
  return (
    <View
      style={[
        globalStyles.container,
        {
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <View style={globalStyles.innerView}>
        <Text style={globalStyles.large}>
          The Future to Real Estate Education
        </Text>
        <View style={{height: hp('4%')}} />
        <Text style={globalStyles.headline}>Login</Text>
        <View style={globalStyles.spaceHeight} />
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            onChangeText={setEmail}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={globalStyles.inputField}
            onChangeText={setPassword}
            value={password}
            placeholder="Password"
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>
        <View style={globalStyles.forgotWidth}>
          <Text style={{color: 'white'}}>Do not have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>Signup </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: hp('4%')}} />
        <View style={{width: wp('70%')}}>
          <PrimaryButton title="Login" onPress={submitLogin} />
        </View>
      </View>
    </View>
  );
};

export default Login;
