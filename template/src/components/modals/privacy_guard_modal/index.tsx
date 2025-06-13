import MaterialIcon from '@react-native-vector-icons/material-design-icons';
import React from 'react';
import { Modal, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'utilities/constants';
import { ms } from 'utilities/scale_utils';

type PrivacyGuardModalProps = {
  visible: boolean;
};

const PrivacyGuardModalComp: React.FC<PrivacyGuardModalProps> = props => {
  const { visible } = props;
  const theme = useTheme();
  return (
    <Modal visible={visible}>
      <View
        style={{
          height: SCREEN_HEIGHT,
          width: SCREEN_WIDTH,
          backgroundColor: theme.colors.background,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 999,
        }}
      >
        <MaterialIcon name={'eye-off'} size={ms(75)} />
      </View>
    </Modal>
  );
};
const PrivacyGuardModal = React.memo(PrivacyGuardModalComp);
export default PrivacyGuardModal;
