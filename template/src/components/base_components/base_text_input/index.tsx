import React from 'react';
import {TextInput, View} from 'react-native';
import {
  TextInput as PaperTextInput,
  Text,
  TextInputProps,
  useTheme,
} from 'react-native-paper';
import {style} from './style';

type BaseTextInputProps = TextInputProps & {
  status: 'success' | 'error' | 'empty';
  labelValue?: string;
  errorValue?: string;
  required?: boolean;
};

const BaseTextInputComp: React.FC<BaseTextInputProps> = props => {
  const {
    labelValue = null,
    errorValue = null,
    status,
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
        <Text style={viewStyle.label}>
          {labelValue}
          {required && <Text style={viewStyle.requiredText}>{'*'}</Text>}
        </Text>
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
      {errorValue && <Text style={viewStyle.error}>{errorValue}</Text>}
    </View>
  );
};

export const BaseTextInput = React.memo(BaseTextInputComp);
