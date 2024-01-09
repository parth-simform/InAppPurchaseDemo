import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import PriceCard from '../../components/PriceCard/PriceCard';
import { string } from '../../constants';

const Footer = () => {
  return (
    <>
      <View style={styles.priceContainer}>
        <PriceCard
          number={1}
          days={string.monthly}
          price={string.monthlyPrice}
        />
        <PriceCard
          number={1}
          days={string.yearly}
          price={string.yearlyPrice}
          isCenter
        />
        <PriceCard
          number={6}
          days={string.monthly}
          price={string.sixMonthlyPrice}
        />
      </View>
      <TouchableOpacity style={styles.upgradeButton}>
        <Text style={styles.upgradeTitle}>{string.upgradeToPro}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Footer;
