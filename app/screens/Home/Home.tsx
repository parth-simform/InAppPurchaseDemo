import { View } from 'react-native';
import React from 'react';
import { styles } from './styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

export default Home;
