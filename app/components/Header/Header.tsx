import { ImageBackground, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { images } from '../../assets';
import LinearGradient from 'react-native-linear-gradient';
import CheckWithTitle from '../../components/CheckWithTitle/CheckWithTitle';
import { Colors } from '../../theme';
import { string } from '../../constants';

const Header = () => {
  return (
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
              <Text style={styles.tryText}>{string.tryMusic}</Text>
              <View style={styles.proContainer}>
                <Text style={styles.tryText}>{string.pro}</Text>
              </View>
            </View>
            <Text style={styles.subTitle}>{string.accessUnlimited}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.pointsContainer}>
        <CheckWithTitle title={string.checkMarkOne} />
        <CheckWithTitle title={string.checkMarkTwo} />
        <CheckWithTitle title={string.checkMarkThree} />
      </View>
    </>
  );
};

export default Header;
