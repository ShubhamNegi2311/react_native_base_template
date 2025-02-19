import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import React, {RefObject} from 'react';
import {BackHandler} from 'react-native';
import {style} from './style';

type ChatSheetProps = {
  reff: RefObject<BottomSheet>;
};

const ChatSheet: React.FC<ChatSheetProps> = props => {
  const {reff} = props;
  const [value, setValue] = React.useState<string>('');
  // variables
  const snapPoints = React.useMemo(() => ['80%'], []);
  const [currentIndex, setCurrentIndex] = React.useState<number>(-1);

  const onBackPress = () => {
    if (reff !== null) {
      reff.current?.close();
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
    <BottomSheetModalProvider>
      <BottomSheet
        ref={reff}
        snapPoints={snapPoints}
        index={-1}
        onChange={setCurrentIndex}
        keyboardBehavior={'extend'}
        animateOnMount
        backdropComponent={props => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            onPress={() => reff?.current?.collapse()}
          />
        )}
        backgroundStyle={{backgroundColor: '#ADADAD'}}
        enablePanDownToClose>
        <BottomSheetView style={style.contentContainer}>
          <BottomSheetTextInput
            value={value}
            style={style.textInput}
            onChangeText={setValue}
          />
        </BottomSheetView>
      </BottomSheet>
    </BottomSheetModalProvider>
  );
};

const ChatBottomSheet = React.memo(ChatSheet);
export default ChatBottomSheet;
