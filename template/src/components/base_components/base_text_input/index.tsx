import BaseText from 'components/base_components/base_text';
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
  const textInputRef = React.useRef<TextInput>(null);
  const theme = useTheme();
  const viewStyle = style(theme);

  const outlineColor = React.useMemo(() => {
    switch (status) {
      case 'success':
        return theme.colors.borderColor.success;
      case 'error':
        return theme.colors.borderColor.error;
      case 'empty': {
        if (textInputRef.current?.isFocused() ?? false) {
          return theme.colors.borderColor.regular;
        } else {
          return theme.colors.borderColor.transparent;
        }
      }
      default:
        return theme.colors.borderColor.regular;
    }
  }, [status, textInputRef]);

  return (
    <View style={viewStyle.mainContainer}>
      {labelValue && (
        <BaseText style={viewStyle.label}>
          {labelValue}
          {required && (
            <BaseText style={viewStyle.requiredText}>{'*'}</BaseText>
          )}
        </BaseText>
      )}
      <PaperTextInput
        ref={textInputRef}
        style={viewStyle.textInput}
        outlineColor={outlineColor}
        underlineColor={'transparent'}
        mode={'outlined'}
        placeholderTextColor={theme.colors.textColor.placeholder}
        outlineStyle={{
          borderRadius: theme.radius.buttonBorderRadius.small,
        }}
        error={errorValue ? true : false}
        autoCapitalize={'none'}
        {...props}
      />
      {errorValue && <BaseText style={viewStyle.error}>{errorValue}</BaseText>}
    </View>
  );
};

const BaseTextInput = React.memo(BaseTextInputComp);
export default BaseTextInput;
