import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { images } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import CheckWithTitle from '../CheckWithTitle';
import { Colors } from '../../theme';
import { string } from '../../constants';

const Header = ({ isPurchased }: { isPurchased?: boolean }) => (
  <>
    <ImageBackground
      source={images.music}
      style={styles.imageBackground}
      resizeMode={'cover'}>
      <LinearGradient
        colors={[Colors.gradientBlack, Colors.black]}
        style={styles.linerGradient}>
        <View style={styles.tryContainer}>
          <View style={styles.tryProFlexContainer}>
            <Text style={styles.tryText}>
              {isPurchased ? string.musicAccess : string.tryMusic}
            </Text>
            <View
              style={[
                styles.proContainer,
                { backgroundColor: isPurchased ? Colors.green : Colors.gold },
              ]}>
              <Text style={styles.tryText}>{string.pro}</Text>
            </View>
          </View>
          <Text style={styles.subTitle}>
            {isPurchased ? string.unlockAccess : string.accessUnlimited}
          </Text>
        </View>
      </LinearGradient>
    </ImageBackground>
    <View style={styles.pointsContainer}>
      <CheckWithTitle title={string.checkMarkOne} {...{ isPurchased }} />
      <CheckWithTitle title={string.checkMarkTwo} {...{ isPurchased }} />
      <CheckWithTitle title={string.checkMarkThree} {...{ isPurchased }} />
    </View>
  </>
);

export default Header;
