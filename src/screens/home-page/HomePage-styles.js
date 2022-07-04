import {StyleSheet} from 'react-native';

import {BLACK, GREY, WHITE} from '../../theme/Color';

const styles = StyleSheet.create({
  homePage: {
    backgroundColor: WHITE,
    flex: 1,
  },
  mainContainer: {
    borderColor: GREY,
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    marginHorizontal: 19,
    marginTop: 41,
    marginVertical: 20,
    padding: 3,
  },
  liveReport: {
    color: BLACK,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    marginLeft: 17,
    marginTop: 21,
  },
  topCountries: {
    color: GREY,
    fontSize: 13,
    lineHeight: 18,
    marginLeft: 17,
    marginVertical: 5,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
