import React from 'react';
import {View} from 'react-native';
import {
  Menu,
  Text,
  TextInput,
  TextInputProps,
  useTheme,
} from 'react-native-paper';
import {ms} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TLoginType} from 'types/app_data_models';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';
import BounceView from '../bounce_view';

type TextInputWithLoginSelectorViewCompProps = TextInputProps & {
  affixTitle: string;
  menuList: TLoginType[];
  selectedMenu: TLoginType;
  onMenuSelected: (menu: TLoginType) => void;
};

const TextInputWithLoginSelectorViewComp: React.FC<
  TextInputWithLoginSelectorViewCompProps
> = props => {
  const theme = useTheme();
  const {affixTitle, menuList, selectedMenu, onMenuSelected} = props;
  const [isTextInputFocused, setIsTextInputFocused] =
    React.useState<boolean>(false);
  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);
  const focusTextInput = () => setIsTextInputFocused(true);
  const blurTextInput = () => setIsTextInputFocused(false);

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        borderRadius: theme.radius.buttonBorderRadius.small,
        borderColor: isTextInputFocused
          ? theme.colors.borderColor.regular
          : theme.colors.borderColor.regular,
        borderWidth: isTextInputFocused ? ms(2) : ms(1),
      }}>
      {(menuList?.length ?? 0) > 0 && (
        <Menu
          visible={showMenu}
          onDismiss={closeMenu}
          anchorPosition={'bottom'}
          anchor={
            <BounceView
              style={{
                width: SCREEN_WIDTH * 0.25,
                flex: 1,
                backgroundColor: theme.colors.surface,
                borderRadius: theme.radius.buttonBorderRadius.small,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
              }}
              onPress={openMenu}>
              <Text>{affixTitle}</Text>
              <MaterialCommunityIcons name={'chevron-down'} size={ms(20)} />
            </BounceView>
          }>
          {menuList.map(item => {
            return (
              <Menu.Item
                key={item.id}
                title={item.name}
                onPress={() => {
                  onMenuSelected(item);
                  closeMenu();
                }}
              />
            );
          })}
        </Menu>
      )}
      {selectedMenu.id === 2 && (
        <Text
          style={{
            color: theme.colors.textColor.placeholder,
            alignSelf: 'center',
            paddingStart: ms(5),
          }}>
          {'+91'}
        </Text>
      )}
      <TextInput
        style={{flex: 1, height: SCREEN_HEIGHT * 0.06}}
        outlineColor={theme.colors.borderColor.transparent}
        underlineColor={'transparent'}
        mode={'outlined'}
        placeholderTextColor={theme.colors.textColor.placeholder}
        outlineStyle={{
          borderRadius: theme.radius.buttonBorderRadius.small,
          borderWidth: 0,
        }}
        onFocus={focusTextInput}
        onBlur={blurTextInput}
        error={false}
        autoCapitalize={'none'}
        maxLength={selectedMenu.id === 2 ? 10 : undefined}
        keyboardType={selectedMenu.id === 1 ? 'email-address' : 'decimal-pad'}
        {...props}
      />
    </View>
  );
};

export const TextInputWithLoginSelectorView = React.memo(
  TextInputWithLoginSelectorViewComp,
);
