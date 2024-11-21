import React, {RefObject} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import RBSheet, {RBSheetRef} from 'react-native-raw-bottom-sheet';
import {SCREEN_HEIGHT} from 'utilities/constants';

type DemoBottomSheetViewProps = {
  reff: RefObject<RBSheetRef>;
};

const DemoBottomSheetView: React.FC<DemoBottomSheetViewProps> = props => {
  const {reff} = props;
  return (
    <RBSheet
      ref={reff}
      height={SCREEN_HEIGHT * 0.85}
      draggable
      dragOnContent
      closeOnPressBack
      closeOnPressMask
      customStyles={{
        draggableIcon: {
          backgroundColor: '#000',
        },
      }}
      customModalProps={{
        collapsable: true,
      }}
      customAvoidingViewProps={{
        enabled: false,
      }}>
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'cyan',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{'HELLO BOTTOM SHEET'}</Text>
      </View>
    </RBSheet>
  );
};

export const DemoSheet = React.memo(DemoBottomSheetView);
