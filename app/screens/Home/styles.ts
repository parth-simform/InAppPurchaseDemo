import { StyleSheet } from 'react-native';
import { Colors } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
  headerContainer: {
    flex: 0.6,
  },
  footerContainer: {
    flex: 0.4,
    justifyContent: 'space-evenly',
  },
});
