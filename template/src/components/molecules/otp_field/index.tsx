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
  const {otpLength, onOTPFilled, boxSize = SCREEN_WIDTH * 0.15} = props;
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
      if ((otpValue[index] ?? '') === '') {
        setOTPValue(prev => {
          return prev.slice(0, index);
        });
        if (index !== 0) {
          textInputsRef?.current[index]?.blur();
          textInputsRef?.current[index - 1]?.focus();
        }
      } else {
        setOTPValue(prev => {
          return prev.slice(0, index);
        });
        if (index !== 0) {
          textInputsRef?.current[index]?.blur();
          textInputsRef?.current[index]?.focus();
        }
      }
    } else {
      setOTPValue(prev => {
        return prev.concat(key);
      });
      if (index !== otpLength - 1) {
        textInputsRef?.current[index]?.blur();
        textInputsRef?.current[index + 1]?.focus();
      }
    }
  };

  React.useEffect(() => {
    if (otpValue.trim().length === otpLength) {
      onOTPFilled(otpValue);
    }
  }, [otpValue, otpLength]);

  return (
    <View style={viewStyle.otpMainContainer}>
      {[...Array(otpLength)].map((_, index) => {
        return (
          <TextInput
            ref={input => (textInputsRef.current[index] = input!)}
            value={otpValue[index]}
            key={index}
            keyboardType={'decimal-pad'}
            style={[
              theme.fonts.headlineMedium,
              viewStyle.boxContainer,
              {
                height: boxSize,
                width: boxSize,
              },
            ]}
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

export const OTPFieldView = React.forwardRef(OTPField);
