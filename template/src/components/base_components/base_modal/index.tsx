import React from 'react';
import {StyleSheet} from 'react-native';
import {Modal, Portal, useTheme} from 'react-native-paper';
import Toast, {
  ErrorToast,
  SuccessToast,
  ToastConfig,
} from 'react-native-toast-message';
import {ms} from 'utilities/scale_utils';
import {style} from './style';

type BaseModalProps = {
  visible: boolean;
  children: React.ReactNode;
  onClose: () => void;
  avoidKeyboard?: boolean;
};

const toastConfig: ToastConfig = {
  // Overwrite 'success' type, by modifying the existing `SuccessToast` component
  success: props => (
    <SuccessToast
      {...props}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      text1Style={{
        fontSize: ms(14),
      }}
      text2Style={{
        fontSize: ms(14),
      }}
    />
  ),

  //  Overwrite 'error' type, by modifying the existing `ErrorToast` component
  error: props => (
    <ErrorToast
      {...props}
      text1NumberOfLines={2}
      text2NumberOfLines={2}
      text1Style={{
        fontSize: ms(14),
      }}
      text2Style={{
        fontSize: ms(14),
      }}
    />
  ),
};

const BaseModalComp: React.FC<BaseModalProps> = props => {
  const {visible, children, onClose} = props;
  const theme = useTheme();

  return (
    <Portal theme={theme}>
      <Modal
        visible={visible}
        dismissable
        onDismiss={onClose}
        style={[StyleSheet.absoluteFill, style(theme).modalView]}
        dismissableBackButton
        theme={theme}>
        {children}
        <Toast config={toastConfig} />
      </Modal>
    </Portal>
  );
};
const BaseModal = React.memo(BaseModalComp);
export default BaseModal;
