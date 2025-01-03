import {ScaledSheet} from 'react-native-size-matters';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';

export const style = ScaledSheet.create({
  loaderContainer: {
    height: SCREEN_HEIGHT * 0.1,
    width: SCREEN_WIDTH * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
