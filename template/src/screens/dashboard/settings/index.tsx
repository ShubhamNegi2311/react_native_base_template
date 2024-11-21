import BottomSheet from '@gorhom/bottom-sheet';
import SpaceView from 'components/atoms/space_view';
import ChatBottomSheet from 'components/bottom_sheets/chat_sheet';
import {useThemeContext} from 'context/theme_provider';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  Button,
  MaterialBottomTabScreenProps,
  useTheme,
} from 'react-native-paper';
import {RBSheetRef} from 'react-native-raw-bottom-sheet';
import {TabBarParamList} from 'types/navigation_types';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';

type SettingsScreenProps = MaterialBottomTabScreenProps<
  TabBarParamList,
  'SettingsScreen'
>;

const SettingsScreen: React.FC<SettingsScreenProps> = props => {
  const {toggleTheme} = useThemeContext();
  const theme = useTheme();
  const chatBottomSheetRef = React.useRef<BottomSheet>(null);
  const sheetRef = React.useRef<RBSheetRef>(null);

  const openBottomSheet = React.useCallback(() => {
    chatBottomSheetRef?.current?.expand();
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        children={'Change Theme'}
        contentStyle={{
          height: SCREEN_HEIGHT * 0.075,
          width: SCREEN_WIDTH * 0.8,
          borderRadius: 12,
          backgroundColor: theme.colors.buttonColor.regular,
        }}
        labelStyle={{
          color: theme.colors.textColor.regular,
        }}
        onPress={toggleTheme}
      />
      <SpaceView height={20} />
      <Button
        children={'Open Gorhom Bottom Sheet'}
        contentStyle={{
          height: SCREEN_HEIGHT * 0.075,
          width: SCREEN_WIDTH * 0.8,
          borderRadius: 12,
          backgroundColor: theme.colors.buttonColor.regular,
        }}
        labelStyle={{
          color: theme.colors.textColor.regular,
        }}
        onPress={openBottomSheet}
      />

      <SpaceView height={20} />
      <Button
        children={'Open Raw Bottom Sheet'}
        contentStyle={{
          height: SCREEN_HEIGHT * 0.075,
          width: SCREEN_WIDTH * 0.8,
          borderRadius: 12,
          backgroundColor: theme.colors.buttonColor.regular,
        }}
        labelStyle={{
          color: theme.colors.textColor.regular,
        }}
        onPress={() => sheetRef?.current?.open()}
      />

      <ChatBottomSheet reff={chatBottomSheetRef} />
    </SafeAreaView>
  );
};

export default SettingsScreen;
