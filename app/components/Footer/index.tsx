import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {
  Product,
  Purchase,
  Subscription,
  endConnection,
  flushFailedPurchasesCachedAsPendingAndroid,
  getAvailablePurchases,
  getProducts,
  getPurchaseHistory,
  getSubscriptions,
  initConnection,
  purchaseUpdatedListener,
  requestPurchase,
  requestSubscription,
} from 'react-native-iap';
import { images } from '../../assets';
import PriceCard from '../PriceCard';
import {
  isAndroid,
  productIds,
  string,
  subscriptionIds,
} from '../../constants';
import { Colors } from '../../theme';
import { styles } from './styles';

type FooterProps = {
  setIsLoading?: (value?: boolean) => void;
  isPurchased?: boolean;
  setIsPurchased?: (value?: boolean) => void;
};

const Footer = ({
  setIsLoading = () => {},
  isPurchased,
  setIsPurchased = () => {},
}: FooterProps) => {
  const [subscription, setSubscription] = useState<Subscription[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [connection, setConnection] = useState<boolean>(false);

  useEffect(() => {
    initializeIAP();

    return () => {
      endConnection();
    };
  }, []);

  useEffect(() => {
    if (connection) {
      getSubscriptionInfo();
      getPurchaseInfo();
      getPurchaseHistoryIap();
      getCurrentPurchases();
    }
  }, [connection]);

  useEffect(() => {
    const subscriptionListener = purchaseUpdatedListener(
      (purchase: Purchase) => {
        console.log(purchase, '<==purchase');
      },
    );

    return () => {
      subscriptionListener?.remove();
    };
  }, []);

  const initializeIAP = async () => {
    try {
      await initConnection().then(async (value: boolean) => {
        setConnection(value);
        isAndroid && (await flushFailedPurchasesCachedAsPendingAndroid());
      });
    } catch (err) {
      console.error('Error initializing IAP: ', err);
    }
  };

  const getCurrentPurchases = async () => {
    try {
      const purchases = await getAvailablePurchases();
      console.log(
        'Current Purchases:',
        purchases?.map(item => {
          return { productId: item?.productId, date: item?.transactionDate };
        }),
      );
    } catch (error) {
      console.error('Error getting purchases:', error);
    }
  };

  const getPurchaseInfo = async () => {
    try {
      const productsInfo = await getProducts({ skus: productIds });
      setProducts(productsInfo);
      console.log(productsInfo); // get products information
    } catch (err) {
      console.error('Error fetching products: ', err);
    }
  };

  const getSubscriptionInfo = async () => {
    try {
      const subscriptions = await getSubscriptions({
        skus: subscriptionIds,
      });

      // console.log(subscriptions);
      setSubscription(subscriptions);
    } catch (err) {
      console.error('Error fetching products: ', err);
    }
  };

  const getPurchaseHistoryIap = async () => {
    try {
      const purchaseHistory = await getPurchaseHistory();
      console.log('purchase history', purchaseHistory); // purchase history
    } catch (err) {
      console.error('Error fetching purchase history: ', err);
    }
  };

  const onSubscription = async (sku: Subscription) => {
    if (isPurchased) {
      return;
    }
    try {
      setIsLoading(true);
      const offerToken = isAndroid
        ? sku?.subscriptionOfferDetails[0]?.offerToken
        : null;

      const purchaseData = await requestSubscription({
        sku: sku?.productId,
        ...(offerToken && {
          subscriptionOffers: [{ sku: sku?.productId, offerToken }],
        }),
      });

      console.log(purchaseData, '<==purchaseData');

      if (purchaseData) {
        setIsPurchased(true);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log('Error subscription item: ', err);
    }
  };

  const onPurchase = async (sku: Product) => {
    try {
      await requestPurchase({
        sku: sku?.productId,
        andDangerouslyFinishTransactionAutomaticallyIOS: false,
        skus: productIds,
      });
    } catch (err) {
      console.log('Error purchasing item: ', err);
    }
  };

  return (
    <>
      <View style={styles.cardSuccessContainer}>
        {isPurchased ? (
          <View style={styles.purchaseContainer}>
            <Image source={images.circleCheck} style={styles.circleCheckImg} />
            <Text style={styles.unlockedMessage}>{string.proUnlocked}</Text>
          </View>
        ) : (
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
        )}
      </View>
      <View style={styles.upgradeContainer}>
        <TouchableOpacity
          style={[
            styles.upgradeButton,
            { backgroundColor: isPurchased ? Colors.green : Colors.gold },
          ]}
          onPress={() => onSubscription(subscription[0])}>
          <Text
            style={styles.upgradeTitle}
            numberOfLines={1}
            adjustsFontSizeToFit>
            {isPurchased ? string.musicZone : string.upgradeToPro}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Footer;
