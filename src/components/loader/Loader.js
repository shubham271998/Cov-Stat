import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import {PINK} from '../../theme/Color';

import styles from './Loader-styles';

function Loader() {
  return (
    <View style={styles.loader}>
      <ActivityIndicator color={PINK} size="large" hidesWhenStopped={true} />
    </View>
  );
}

export default Loader;
