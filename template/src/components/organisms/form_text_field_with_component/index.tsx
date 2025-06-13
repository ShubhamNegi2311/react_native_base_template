import BaseText from 'components/base_components/base_text';
import {BaseTextInputProps} from 'components/base_components/base_text_input';
import {useThemeContext} from 'context/theme_provider';
import React from 'react';
import {View} from 'react-native';
import {TextInput as PaperTextInput, useTheme} from 'react-native-paper';
import {style} from './style';

type FormTextInputWithComponentProps = BaseTextInputProps & {
  leftComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
  disabled?: boolean;
  labelValue?: string;
  errorValue?: string;
  required?: boolean;
};

const FormTextInputWithComponentComp: React.FC<
  FormTextInputWithComponentProps
> = props => {
  const {
    disabled = false,
    labelValue = null,
    errorValue = null,
    required = false,
    leftComponent = null,
    rightComponent = null,
  } = props;
  const theme = useTheme();
  const viewStyle = style(theme);
  const {isDarkTheme} = useThemeContext();

  const [isTextInputFocused, setIsTextInputFocused] =
    React.useState<boolean>(false);

  const focusTextInput = () => setIsTextInputFocused(true);
  const blurTextInput = () => setIsTextInputFocused(false);

  const getBorderColor = () => {
    if (disabled) return theme.colors.textInput.border;
    if (errorValue) return theme.colors.textInput.errorBorder;
    return isTextInputFocused
      ? theme.colors.primary
      : theme.colors.textInput.border;
  };

  return (
    <View style={viewStyle.parentContainer}>
      {labelValue && (
        <BaseText style={viewStyle.label}>
          {labelValue}
          {required && (
            <BaseText style={viewStyle.requiredText}>{'*'}</BaseText>
          )}
        </BaseText>
      )}
      <View style={[viewStyle.mainContainer]}>
        {leftComponent && (
          <View style={viewStyle.leftRightComponentContainer}>
            {leftComponent}
          </View>
        )}
        <PaperTextInput
          style={viewStyle.textInput}
          contentStyle={theme.fonts.regular}
          outlineStyle={{
            borderBottomWidth: 0,
          }}
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
        {rightComponent && (
          <View style={viewStyle.leftRightComponentContainer}>
            {rightComponent}
          </View>
        )}
      </View>
      {errorValue && <BaseText style={viewStyle.error}>{errorValue}</BaseText>}
    </View>
  );
};

const FormTextInputWithComponent = React.memo(FormTextInputWithComponentComp);
export default FormTextInputWithComponent;
