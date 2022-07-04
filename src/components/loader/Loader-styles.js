import {StyleSheet} from 'react-native';

import {WHITE} from '../../theme/Color';

const styles = StyleSheet.create({
  loader: {
    alignItems: 'center',
    backgroundColor: WHITE,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
    zIndex: 99,
  },
});

export default styles;
