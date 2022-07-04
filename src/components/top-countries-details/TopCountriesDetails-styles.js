import {StyleSheet} from 'react-native';
import {BLACK, GREY, WHITE, DIM_GREY} from '../../theme/Color';

const styles = StyleSheet.create({
  mainContainer: {
    borderColor: DIM_GREY,
    borderRadius: 10,
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    paddingHorizontal: 10,
  },
  circularProgressTitle: {
    fontWeight: 'bold',
  },
  country: {
    color: BLACK,
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 22,
  },
  countryData: {
    marginHorizontal: 10,
    marginTop: 7,
  },
  bellIcon: {
    alignItems: 'flex-end',
    flex: 1,
    marginTop: 7,
  },
  affected: {
    marginTop: 10,
  },
  circleContainer: {
    backgroundColor: WHITE,
    borderColor: GREY,
    borderRadius: 50,
    borderWidth: 1,
    height: 100,
    marginLeft: 15,
    marginVertical: -10,
    width: 100,
  },

  rectangleContainer: {
    alignItems: 'center',
    backgroundColor: WHITE,
    borderRadius: 10,
    height: 80,
    justifyContent: 'center',
    marginLeft: -105,
    width: 110,
  },
});

export default styles;
