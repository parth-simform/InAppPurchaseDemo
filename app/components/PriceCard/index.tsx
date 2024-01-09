import { Text, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { string } from '../../constants';

type PriceCardType = {
  number?: number;
  price?: string;
  days?: string;
  isCenter?: boolean;
};

const PriceCard = ({ number, price, days, isCenter }: PriceCardType) => (
  <View
    style={[
      styles.priceCardContainer,
      isCenter ? styles.priceCenterContainer : null,
    ]}>
    {isCenter && (
      <View style={styles.centerProContainer}>
        <Text style={styles.pro}>{string.pro}</Text>
      </View>
    )}
    <Text style={styles.number}>{number}</Text>
    <Text style={styles.days}>{days}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

export default PriceCard;
