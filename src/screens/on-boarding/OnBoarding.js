import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ONBOARDING_DETAILS} from './OnBoarding.const';

import styles from './OnBoarding-styles';

import {PINK, GREY} from '../../theme/Color';

const Dots = props => {
  const {selected} = props;
  const backgroundColor = selected ? PINK : GREY;

  return <View style={[styles.dots, {backgroundColor}]} />;
};

const Finish = ({...props}) => (
  <TouchableOpacity style={styles.button} {...props}>
    <Text style={styles.buttonText}>Finish</Text>
  </TouchableOpacity>
);

const OnBoarding = props => {
  const {navigation} = props;
  const handleSkip = () => navigation.replace('Home.');
  const handleFinish = () => {
    AsyncStorage.setItem('alreadyLaunched', 'true');
    navigation.navigate('Home.');
  };

  return (
    <Onboarding
      DoneButtonComponent={Finish}
      DotComponent={Dots}
      onSkip={handleSkip}
      onDone={handleFinish}
      bottomBarHighlight={false}
      pages={ONBOARDING_DETAILS}
    />
  );
};

export default OnBoarding;
