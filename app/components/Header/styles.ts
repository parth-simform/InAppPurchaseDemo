import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  imageBackground: {
    flex: 0.8,
    justifyContent: 'flex-end',
  },
  tryText: {
    color: Colors.white,
    fontSize: moderateScale(20),
    fontWeight: '500',
  },
  tryProFlexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tryContainer: {
    alignItems: 'center',
    marginBottom: verticalScale(10),
  },
  proContainer: {
    backgroundColor: Colors.gold,
    borderRadius: 5,
    paddingHorizontal: scale(5),
    marginLeft: scale(5),
  },
  subTitle: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    fontWeight: '300',
    color: Colors.white,
    marginTop: verticalScale(8),
  },
  pointsContainer: {
    flex: 0.2,
    alignItems: 'center',
  },
  priceCardContainer: {
    backgroundColor: Colors.gold,
    maxWidth: 100,
    marginLeft: scale(10),
    width: moderateScale(85),
    height: verticalScale(85),
    borderRadius: 5,
    justifyContent: 'center',
  },
  linerGradient: {
    height: '80%',
    width: '100%',
    justifyContent: 'flex-end',
  },
});
