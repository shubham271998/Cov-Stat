import {StyleSheet} from 'react-native';

import {WHITE, RED, LIGHT_YELLOW, GREY, PINK, BLACK} from '../../theme/Color';

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
  },
  contentStyles: {
    backgroundColor: PINK,
  },
  drawerHeader: {
    flex: 1,
    paddingLeft: 28,
    paddingTop: 39,
  },

  name: {
    color: BLACK,
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 26,
    paddingTop: 18,
  },
  location: {
    color: BLACK,
    fontSize: 22,
    fontWeight: '500',
    lineHeight: 26,
    paddingBottom: 18,
    paddingTop: 3,
  },

  userDetails: {
    alignContent: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },

  infoDetails: {backgroundColor: RED, borderRadius: 4},

  pro: {
    color: WHITE,
    fontSize: 16,
    lineHeight: 19,
    paddingHorizontal: 5,
  },

  sellerText: {
    color: GREY,
    paddingHorizontal: 10,
  },
  number: {
    color: LIGHT_YELLOW,
    fontSize: 16,
    lineHeight: 19,
  },

  itemsDetails: {flex: 1, paddingVertical: 10, backgroundColor: WHITE},
});

export default styles;
