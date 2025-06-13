import React from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import {SCREEN_WIDTH} from 'utilities/constants';
import {style} from './style';

type OTPFieldProps = {
  otpLength: number;
  onOTPFilled: (value: string) => void;
  boxSize?: number;
};

export type OTPFieldRefProps = {
  clearOTPField: () => void;
};

const OTPField: React.ForwardRefRenderFunction<
  OTPFieldRefProps,
  OTPFieldProps
> = (props, forwardRef) => {
  const theme = useTheme();
  const viewStyle = style(theme);
  const {
    otpLength,
    onOTPFilled,
    boxSize = SCREEN_WIDTH / (otpLength + 1),
  } = props;
  const [otpValue, setOTPValue] = React.useState<string>('');
  const textInputsRef = React.useRef<TextInput[]>([]);

  React.useImperativeHandle(
    forwardRef,
    () => ({
      clearOTPField: () => {
        setOTPValue('');
        textInputsRef.current[0]?.blur();
        textInputsRef.current[0]?.focus();
      },
    }),
    [],
  );

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    const key = e.nativeEvent.key;
    if (key === 'Backspace') {
      setOTPValue(prev => {
        return prev.slice(0, index);
      });
      if (index !== 0) {
        textInputsRef?.current[index - 1]?.focus();
      }
    } else {
      setOTPValue(prev => {
        return prev.concat(key);
      });
      if (index !== otpLength - 1) {
        textInputsRef?.current[index + 1]?.focus();
      }
    }
  };

  React.useEffect(() => {
    if (otpValue.trim().length === otpLength) {
      onOTPFilled(otpValue);
    } else {
      onOTPFilled('');
    }
  }, [otpValue, otpLength]);

  return (
    <View style={viewStyle.otpMainContainer}>
      {[...Array(otpLength)].map((_, index) => {
        return (
          <TextInput
            ref={input => {
              if (input) {
                textInputsRef.current[index] = input!;
              }
            }}
            value={otpValue[index]}
            key={index}
            keyboardType={'number-pad'}
            placeholder={'-'}
            style={[
              theme.fonts.headlineMedium,
              viewStyle.boxContainer,
              {
                height: boxSize,
                width: boxSize,
                borderColor: otpValue[index]
                  ? theme.colors.borderColor.primary
                  : theme.colors.borderColor.regular,
              },
            ]}
            onFocus={() => {
              // Check if the length of otpValue is equal to the current index + 1
              // This means that the user is focusing on the last available field
              if (otpValue.length === index + 1) {
                // Focus on the current field if it's the last entered field
                textInputsRef.current[index]?.focus();
              } else {
                // If the field is not the last one, move focus to the last filled field
                textInputsRef.current[otpValue.length - 1]?.focus();
              }
            }}
            onKeyPress={e => {
              handleKeyPress(e, index);
            }}
            maxLength={1}
          />
        );
      })}
    </View>
  );
};

const OTPFieldView = React.memo(React.forwardRef(OTPField));
export default OTPFieldView;
