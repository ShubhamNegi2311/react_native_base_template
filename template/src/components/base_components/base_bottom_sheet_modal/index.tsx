import {
  BottomSheetBackdrop,
  BottomSheetHandle,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import React from 'react';
import {BackHandler} from 'react-native';
import {useTheme} from 'react-native-paper';

type BaseBottomSheetModalCompProps = {
  reff: React.RefObject<BottomSheetModal | null>;
  dismissable?: boolean;
  children?: React.ReactNode | null;
  onBackdropPress?: () => void;
  bottomSheetHeight?: number;
  showHeader?: boolean;
  onDismiss?: () => void;
};

const BaseBottomSheetModalComp: React.FC<
  BaseBottomSheetModalCompProps
> = props => {
  const {
    reff,
    dismissable = true,
    children = null,
    bottomSheetHeight = undefined,
    showHeader = true,
    onBackdropPress,
    onDismiss,
  } = props;
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = React.useState<number>(-1);

  const onBackPress = () => {
    if (reff !== null) {
      reff?.current?.dismiss();
      return true;
    }
  };

  React.useEffect(() => {
    if (currentIndex !== -1) {
      const handler = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => {
        handler.remove();
      };
    }
  }, [currentIndex]);

  return (
    <BottomSheetModal
      ref={reff}
      animateOnMount
      stackBehavior={'push'}
      keyboardBehavior={'interactive'}
      keyboardBlurBehavior={'restore'}
      android_keyboardInputMode={'adjustPan'}
      enableContentPanningGesture={false}
      onChange={index => setCurrentIndex(index)}
      onDismiss={onDismiss}
      backdropComponent={props => (
        <BottomSheetBackdrop
          {...props}
          style={{backgroundColor: theme.colors.backdrop}}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior={dismissable ? 'close' : 'none'}
          onPress={onBackdropPress}
        />
      )}
      backgroundStyle={{backgroundColor: theme.colors.background}}
      handleComponent={props =>
        showHeader ? <BottomSheetHandle {...props} /> : null
      }
      enablePanDownToClose={dismissable}>
      {children}
    </BottomSheetModal>
  );
};

const BaseBottomSheetModal = React.memo(BaseBottomSheetModalComp);
export default BaseBottomSheetModal;
