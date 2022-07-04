import {StyleSheet} from 'react-native';
import {PINK} from '../../theme/Color';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  covid: {
    paddingTop: 150,
  },
  covstats: {
    color: PINK,
    fontSize: 28,
    fontWeight: '600',
    marginLeft: 17,
    marginTop: 30,
  },
  copyright: {
    paddingBottom: 75,
  },
});

export default styles;
