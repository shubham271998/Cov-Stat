import {StyleSheet} from 'react-native';

import {BLACK, GREY} from '../../theme/Color';

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    borderColor: GREY,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    margin: 5,
  },
  imageCountry: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  country: {
    color: BLACK,
    fontSize: 22,
    fontWeight: '300',
    lineHeight: 28,
    marginHorizontal: 18,
  },
  numberImage: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  number: {
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 22,
    marginRight: 10,
  },
  flagContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
});
export default styles;
