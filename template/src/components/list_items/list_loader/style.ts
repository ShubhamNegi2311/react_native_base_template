import { StyleSheet } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'utilities/constants';

export const style = StyleSheet.create({
  loaderContainer: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
