import { Image, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { images } from '../../assets';
import { Colors } from '../../theme';

type CheckWithTitleProps = {
  title?: string;
  isPurchased?: boolean;
};

const CheckWithTitle = ({ title, isPurchased }: CheckWithTitleProps) => (
  <View style={styles.importantContainer}>
    <Image
      source={images.correct}
      style={[
        styles.correctImage,
        { tintColor: isPurchased ? Colors.green : Colors.gold },
      ]}
    />
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default CheckWithTitle;
