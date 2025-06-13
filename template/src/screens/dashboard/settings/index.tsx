import BottomSheet from '@gorhom/bottom-sheet';
import SpaceView from 'components/atoms/space_view';
import ChatBottomSheet from 'components/bottom_sheets/chat_sheet';
import ThemeSelectorDialog from 'components/modals/theme_selector_modal';
import AnimatedLoaderButton from 'components/molecules/animated_loader_button';
import React from 'react';
import {View} from 'react-native';
import {MaterialBottomTabScreenProps, useTheme} from 'react-native-paper';
import {DashbordBottomTabBarParamList} from 'types/navigation_types';

type SettingsScreenProps = MaterialBottomTabScreenProps<
  DashbordBottomTabBarParamList,
  'SettingsScreen'
>;

const SettingsScreen: React.FC<SettingsScreenProps> = props => {
  const theme = useTheme();
  const chatBottomSheetRef = React.useRef<BottomSheet | null>(null);
  const [showSelectThemeDialog, setShowSelectThemeDialog] =
    React.useState(false);

  const openBottomSheet = React.useCallback(() => {
    chatBottomSheetRef?.current?.expand();
  }, []);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AnimatedLoaderButton
        title={'Change Theme'}
        onPress={() => setShowSelectThemeDialog(true)}
      />
      <SpaceView height={20} />
      <AnimatedLoaderButton
        title={'Open Gorhom Bottom Sheet'}
        onPress={openBottomSheet}
      />
      <ChatBottomSheet reff={chatBottomSheetRef} />
      <ThemeSelectorDialog
        visible={showSelectThemeDialog}
        onClose={() => setShowSelectThemeDialog(false)}
      />
    </View>
  );
};

export default SettingsScreen;
