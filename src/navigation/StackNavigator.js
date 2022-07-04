import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppStack from './AppStack';
import OnBoarding from '../screens/on-boarding/OnBoarding';
import LandingScreen from '../screens/landing/LandingScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const [isInitialLaunch, setIsInitialLaunch] = useState(null);
  const [isLandingScreenActive, setIsLandingScreenActive] = useState(true);

  const handleLandingScreen = isLandingScreenActive && (
    <Stack.Screen name="Landing" component={LandingScreen} />
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLandingScreenActive(false);
    }, 3000);
  });

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        setIsInitialLaunch(true);
      } else {
        setIsInitialLaunch(false);
      }
    });
  }, []);

  if (isInitialLaunch === true) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {handleLandingScreen}
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen
          name="Home."
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {handleLandingScreen}
        <Stack.Screen
          name="Home."
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
};

export default StackNavigator;
