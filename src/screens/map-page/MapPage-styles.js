import {StyleSheet} from 'react-native';

import {WHITE, GREY, LIGHT_PINK, PINK, BLACK} from '../../theme/Color';

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: WHITE,
    flex: 1,
  },
  covidMap: {
    borderColor: GREY,
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 14,
    marginTop: 41,
  },
  covid: {
    color: BLACK,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    margin: 17,
  },
  map: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    margin: 15,
  },
  affectedData: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  moreAffectedColor: {
    backgroundColor: PINK,
    height: 11.5,
    marginLeft: 17,
    marginRight: 13,
    width: 11.5,
  },
  lessAffectedColor: {
    backgroundColor: LIGHT_PINK,
    height: 11.5,
    marginLeft: 17,
    marginRight: 13,
    width: 11.5,
  },
  moreAffectedText: {
    color: BLACK,
    fontWeight: '400',
    lineHeight: 18,
  },
  lessAffectedText: {
    color: BLACK,
    fontWeight: '400',
    lineHeight: 18,
  },
  bottomContainer: {
    borderColor: GREY,
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    margin: 14,
    marginTop: 20,
  },
  topCountries: {
    color: BLACK,
    fontWeight: '600',
    margin: 10,
  },
  activity: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  loader: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export default styles;
