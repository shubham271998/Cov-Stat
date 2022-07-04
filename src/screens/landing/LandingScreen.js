import React from 'react';
import {View, Text} from 'react-native';

import {COVSTATS, COPYRIGHT} from './LandingScreen.const';

import styles from './LandingScreen-styles';

import Covid from '../../assets/images/Covid.svg';

function LandingScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.covid}>
        <Covid />
        <Text style={styles.covstats}>{COVSTATS}</Text>
      </View>

      <Text style={styles.copyright}>{COPYRIGHT}</Text>
    </View>
  );
}

export default LandingScreen;
