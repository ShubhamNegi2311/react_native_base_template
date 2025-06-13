import BaseText from 'components/base_components/base_text';
import {useThemeContext} from 'context/theme_provider';
import React from 'react';
import {TextInput, View} from 'react-native';
import {
  TextInput as PaperTextInput,
  TextInputProps,
  useTheme,
} from 'react-native-paper';
import {style} from './style';

export type BaseTextInputProps = TextInputProps & {
  status?: 'success' | 'error' | 'empty';
  labelValue?: string;
  errorValue?: string;
  required?: boolean;
};

const BaseTextInputComp: React.FC<BaseTextInputProps> = props => {
  const {
    labelValue = null,
    errorValue = null,
    status = 'empty',
    required = false,
  } = props;
  const {isDarkTheme} = useThemeContext();
  const textInputRef = React.useRef<TextInput>(null);
  const theme = useTheme();
  const viewStyle = style(theme);

  return (
    <View style={viewStyle.mainContainer}>
      <PaperTextInput
        ref={textInputRef}
        style={viewStyle.textInput}
        contentStyle={theme.fonts.regular}
        placeholderTextColor={theme.colors.textInput.placeholder}
        error={errorValue ? true : false}
        autoCapitalize={'none'}
        outlineColor={'transparent'}
        underlineColor={'transparent'}
        underlineStyle={{width: 0}}
        mode={'flat'}
        {...props}
        keyboardAppearance={isDarkTheme ? 'dark' : 'light'}
      />
      {errorValue && <BaseText style={viewStyle.error}>{errorValue}</BaseText>}
    </View>
  );
};

const BaseTextInput = React.memo(BaseTextInputComp);
export default BaseTextInput;
