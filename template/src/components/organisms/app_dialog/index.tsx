import MaterialIcon from '@react-native-vector-icons/material-design-icons';
import BaseModal from 'components/base_components/base_modal';
import BaseText from 'components/base_components/base_text';
import BounceView from 'components/molecules/bounce_view';
import {useDialog} from 'context/app_dialog_provider';
import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';
import {TDialogOptions} from 'types/app_data_models';
import {SCREEN_WIDTH} from 'utilities/constants';
import {ms, vs} from 'utilities/scale_utils';

type TDialogColors = {
  iconBackgroundSmall: string;
  iconBackgroundLarge: string;
  iconColor: string;
  iconName: string;
};

const AppDialogComp: React.FC<TDialogOptions> = props => {
  const {
    title,
    message,
    onConfirm = null,
    onDismiss,
    isConfirmDestructive = false,
    isDismissDestructive = false,
    actionType = 'success',
  } = props;
  const theme = useTheme();

  const {hideDialog} = useDialog();

  const getColors = (
    actionType: 'success' | 'error' | 'info' | 'warning',
  ): TDialogColors => {
    switch (actionType) {
      case 'success':
        return {
          iconColor: theme.colors.iconColor.white,
          iconBackgroundLarge: theme.colors.successContainer,
          iconBackgroundSmall: theme.colors.success,
          iconName: 'tick',
        };
      case 'error':
        return {
          iconColor: theme.colors.iconColor.white,
          iconBackgroundLarge: theme.colors.errorContainer,
          iconBackgroundSmall: theme.colors.error,
          iconName: 'alert-circle-outline',
        };
      case 'info':
        return {
          iconColor: theme.colors.iconColor.white,
          iconBackgroundLarge: theme.colors.infoContainer,
          iconBackgroundSmall: theme.colors.info,
          iconName: 'info',
        };
      case 'warning':
        return {
          iconColor: theme.colors.iconColor.white,
          iconBackgroundLarge: theme.colors.warningContainer,
          iconBackgroundSmall: theme.colors.warning,
          iconName: 'alert-circle-outline',
        };
      default:
        return {
          iconColor: theme.colors.iconColor.white,
          iconBackgroundLarge: theme.colors.successContainer,
          iconBackgroundSmall: theme.colors.success,
          iconName: 'tick',
        };
    }
  };

  return (
    <BaseModal visible={true} onClose={() => onDismiss && onDismiss()}>
      <Animated.View
        entering={ZoomIn}
        exiting={ZoomOut}
        style={{
          width: SCREEN_WIDTH * 0.9,
          alignSelf: 'center',
          borderRadius: theme.radius.regular,
          backgroundColor: theme.colors.background,
          gap: vs(10),
          paddingTop: ms(20),
          alignItems: 'center',
        }}>
        <View
          style={{
            height: SCREEN_WIDTH * 0.2,
            width: SCREEN_WIDTH * 0.2,
            borderRadius: theme.radius.circle,
            backgroundColor: getColors(actionType).iconBackgroundLarge,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: SCREEN_WIDTH * 0.15,
              width: SCREEN_WIDTH * 0.15,
              borderRadius: theme.radius.circle,
              backgroundColor: getColors(actionType).iconBackgroundSmall,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialIcon
              name={getColors(actionType).iconName as any}
              size={ms(30)}
              color={getColors(actionType).iconColor}
            />
          </View>
        </View>
        <BaseText style={theme.fonts.displayLarge} children={title ?? ''} />
        <BaseText style={theme.fonts.labelLarge} children={message ?? ''} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: ms(10),
            width: '100%',
            alignItems: 'center',
            paddingVertical: ms(20),
          }}>
          <BounceView
            style={{
              width: '40%',
              padding: ms(10),
              backgroundColor: isDismissDestructive
                ? theme.colors.error
                : theme.colors.primary,
              borderRadius: theme.radius.small,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={onDismiss}>
            <BaseText
              style={{color: theme.colors.textColor.white}}
              children={'No'}
            />
          </BounceView>

          <BounceView
            style={{
              width: '40%',
              padding: ms(10),
              backgroundColor: isConfirmDestructive
                ? theme.colors.error
                : theme.colors.primary,
              borderRadius: theme.radius.small,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              onConfirm && onConfirm();
              hideDialog();
            }}>
            <BaseText
              style={{color: theme.colors.textColor.white}}
              children={'Yes'}
            />
          </BounceView>
        </View>
      </Animated.View>
    </BaseModal>
  );
};

const AppDialog = React.memo(AppDialogComp);
export default AppDialog;
