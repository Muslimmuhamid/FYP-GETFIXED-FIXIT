import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Splash from '../screens/splash';
import Login from '../screens/login';
import Signup from '../screens/signup';
import SignupOptions from '../screens/signupOptions';
import PostDetail from '../screens/PostIssue';
import Notifications from '../screens/Notifications';
import CustomerRequest from '../screens/cutomerRequest';
import UnderProcess from '../screens/UnderProcess';
import Location from '../screens/locationScreen';
import EditProfile from '../screens/editProfile';
import ProgressArea from '../screens/ProgressArea';
import BiddingScreen from '../screens/biddingScreen';
import Biddingaccept from '../screens/biddingaccept';
import Workerbids from '../screens/workerbidshow';
import EquipmentArea from '../screens/EquipmetArea';
import Terms from '../screens/Termsandcon';

const Main = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Main.Navigator
      initialRouteName="Splash"
      headerMode="none"
      options={{
        animationEnabled: false,
      }}>
      <Main.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="CustomerRequest"
        component={CustomerRequest}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Biddingaccept"
        component={Biddingaccept}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="SignupOptions"
        component={SignupOptions}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="PostDetail"
        component={PostDetail}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="Terms"
        component={Terms}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Notifications"
        component={Notifications}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="UnderProcess"
        component={UnderProcess}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Location"
        component={Location}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
       <Main.Screen
        name="EquipmentArea"
        component={EquipmentArea}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="Workerbids"
        component={Workerbids}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="ProgressArea"
        component={ProgressArea}
        options={{headerShown: false}}
      />
      <Main.Screen
        name="BiddingScreen"
        component={BiddingScreen}
        options={{headerShown: false}}
      />
    </Main.Navigator>
  );
};

export default MainStack;
