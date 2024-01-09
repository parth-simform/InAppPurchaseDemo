import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  priceCardContainer: {
    backgroundColor: Colors.gold,
    width: moderateScale(110),
    height: verticalScale(110),
    borderRadius: 5,
    justifyContent: 'center',
  },
  priceCenterContainer: {
    width: moderateScale(125),
    height: verticalScale(125),
    backgroundColor: Colors.paleYellow,
  },
  number: {
    fontSize: moderateScale(26),
    textAlign: 'center',
    color: Colors.black,
    fontWeight: '600',
  },
  days: {
    fontSize: moderateScale(22),
    textAlign: 'center',
    color: Colors.black,
    fontWeight: '500',
    marginVertical: verticalScale(4),
  },
  price: {
    fontSize: moderateScale(20),
    textAlign: 'center',
    color: Colors.black,
  },
  centerProContainer: {
    backgroundColor: Colors.gold,
    position: 'absolute',
    top: verticalScale(-10),
    paddingHorizontal: scale(10),
    borderRadius: 5,
    alignSelf: 'center',
    paddingVertical: verticalScale(2),
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  pro: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: '700',
  },
});
