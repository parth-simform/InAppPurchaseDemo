import { ActivityIndicator, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Colors } from '../../theme';

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean | undefined>(false);
  const [isPurchased, setIsPurchased] = useState<boolean | undefined>(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header {...{ isPurchased }} />
      </View>
      <View style={styles.footerContainer}>
        <Footer {...{ isPurchased, setIsPurchased, setIsLoading }} />
      </View>
      {isLoading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={Colors.gold} />
        </View>
      )}
    </View>
  );
};

export default Home;
