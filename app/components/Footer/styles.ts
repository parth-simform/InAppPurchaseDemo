import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  upgradeButton: {
    backgroundColor: Colors.gold,
    width: scale(300),
    alignSelf: 'center',
    marginTop: verticalScale(20),
    padding: moderateScale(10),
    borderRadius: 10,
  },
  upgradeTitle: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
});
