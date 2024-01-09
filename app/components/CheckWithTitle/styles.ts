import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  importantContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: scale(2),
    width: moderateScale(240),
  },
  title: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    color: Colors.white,
  },
  correctImage: {
    width: moderateScale(32),
    height: verticalScale(27),
    resizeMode: 'contain',
    tintColor: Colors.gold,
  },
});
