import { Image, Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { images } from '../../assets';

const CheckWithTitle = ({ title }: { title?: string }) => {
  return (
    <View style={styles.importantContainer}>
      <Image source={images.correct} style={styles.correctImage} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default CheckWithTitle;
