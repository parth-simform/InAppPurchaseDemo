import { StyleSheet } from 'react-native';
import { Colors, moderateScale, scale, verticalScale } from '../../theme';

export const styles = StyleSheet.create({
  cardSuccessContainer: {
    flex: 0.7,
    justifyContent: 'center',
  },
  purchaseContainer: {
    alignItems: 'center',
  },
  unlockedMessage: {
    color: Colors.white,
    marginTop: verticalScale(10),
    fontSize: moderateScale(20),
    textAlign: 'center',
  },
  circleCheckImg: {
    width: moderateScale(60),
    height: moderateScale(60),
    resizeMode: 'contain',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  upgradeContainer: {
    flex: 0.3,
    justifyContent: 'flex-start',
  },
  upgradeButton: {
    width: scale(300),
    alignSelf: 'center',
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
