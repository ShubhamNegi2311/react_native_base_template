import BaseText from 'components/base_components/base_text';
import AnimatedLoaderButton from 'components/molecules/animated_loader_button';
import {useDialog} from 'context/app_dialog_provider';
import React from 'react';
import {View} from 'react-native';
import {MaterialBottomTabScreenProps, useTheme} from 'react-native-paper';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {TabBarParamList} from 'types/navigation_types';
import {logoutUser} from 'utilities/utils';

type HomeScreenProps = MaterialBottomTabScreenProps<
  TabBarParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const {showDialog, hideDialog} = useDialog();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.loginData.loginData);

  const handleLogoutClick = React.useCallback(() => {
    showDialog({
      message: 'Do you want to logout?',
      title: 'Logout',
      actionType: 'error',
      isConfirmDestructive: true,
      onConfirm: () => logoutUser(dispatch),
      onDismiss: hideDialog,
    });
  }, []);

  return (
    <View style={style.mainContainer}>
      <BaseText
        style={theme.fonts.displayLarge}
        children={`Welcome ${userData?.userName ?? ''}`}
      />
      <AnimatedLoaderButton
        isLoading={false}
        title={'Logout'}
        onPress={handleLogoutClick}
      />
    </View>
  );
};

export default HomeScreen;

const style = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    gap: vs(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
