import BaseModal from 'components/base_components/base_modal';
import BaseText from 'components/base_components/base_text';
import {useThemeContext} from 'context/theme_provider';
import React from 'react';
import {Appearance, Pressable, View} from 'react-native';
import {RadioButton, useTheme} from 'react-native-paper';
import {style} from './style';

export type ThemeOption = 'light' | 'dark' | 'system';

interface ThemeSelectorDialogProps {
  visible: boolean;
  onClose: () => void;
  selectedTheme?: ThemeOption;
}

const ThemeSelectorDialogModal: React.FC<ThemeSelectorDialogProps> = props => {
  const {visible, onClose, selectedTheme = 'light'} = props;
  const theme = useTheme();
  const viewStyle = style(theme);
  const {setDarkTheme, setLightTheme} = useThemeContext();
  const [value, setValue] = React.useState<ThemeOption>(selectedTheme);

  const handleSelect = React.useCallback((newValue: ThemeOption) => {
    setValue(newValue);
    switch (newValue) {
      case 'light': {
        setLightTheme();
        break;
      }
      case 'dark': {
        setDarkTheme();
        break;
      }
      case 'system': {
        const colorScheme = Appearance.getColorScheme();
        if (colorScheme === 'dark') {
          setDarkTheme();
        } else {
          setLightTheme();
        }
        break;
      }
      default: {
        setLightTheme();
        break;
      }
    }

    onClose();
  }, []);

  return (
    <BaseModal visible={visible} onClose={onClose}>
      <View style={viewStyle.dialog}>
        <BaseText style={viewStyle.title}>{'Select Theme'}</BaseText>
        <RadioButton.Group
          onValueChange={val => handleSelect(val as ThemeOption)}
          value={value}>
          <View style={viewStyle.option}>
            <RadioButton.Android value={'light'} />
            <BaseText style={viewStyle.label}>{'Light'}</BaseText>
          </View>
          <View style={viewStyle.option}>
            <RadioButton.Android value={'dark'} />
            <BaseText style={viewStyle.label}>{'Dark'}</BaseText>
          </View>
          <View style={viewStyle.option}>
            <RadioButton.Android value={'system'} />
            <BaseText style={viewStyle.label}>{'System Default'}</BaseText>
          </View>
        </RadioButton.Group>

        <Pressable style={viewStyle.closeButton} onPress={onClose}>
          <BaseText
            style={[theme.fonts.bold, {color: theme.colors.textColor.white}]}
            children={'Close'}
          />
        </Pressable>
      </View>
    </BaseModal>
  );
};

const ThemeSelectorDialog = React.memo(ThemeSelectorDialogModal);
export default ThemeSelectorDialog;
