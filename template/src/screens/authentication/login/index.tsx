import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BaseTextInput from 'components/base_components/base_text_input';
import AnimatedLoaderButton from 'components/molecules/animated_loader_button';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { TextInput, useTheme } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { TValidateLoginDetailResponse } from 'types/api_response_data_models';
import { AuthenticationStackParamList } from 'types/navigation_types';
import { ms, vs } from 'utilities/scale_utils';
import { loginUser } from 'utilities/utils';

type LoginScreenProps = NativeStackScreenProps<
  AuthenticationStackParamList,
  'LoginScreen'
>;

type TFormData = {
  email: string;
  password: string;
};

const LoginScreen: React.FC<LoginScreenProps> = props => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const {
    control,
    reset,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<TFormData>();

  const dispatch = useDispatch();

  const submitClickHandler: SubmitHandler<TFormData> = React.useCallback(
    values => {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);
        const loginResponse: TValidateLoginDetailResponse = {
          success: false,
          message: 'Login Success!',
          responseData: {
            userName: values?.email ?? '',
            token: (values?.email ?? '') + (values?.password ?? ''),
            refreshToken: (values?.email ?? '') + (values?.password ?? ''),
          },
        };
        loginUser(dispatch, loginResponse);
      }, 2500);
    },
    [],
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <KeyboardAvoidingView
        behavior={'padding'}
        keyboardVerticalOffset={vs(30)}
        style={{
          width: '100%',
          paddingHorizontal: ms(15),
          gap: ms(10),
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Controller
          control={control}
          name={'email'}
          rules={{ required: 'Email cannot be empty!' }}
          render={({ field: { onBlur, value } }) => (
            <BaseTextInput
              value={value}
              onChangeText={text => {
                setValue('email', text);
                setError('email', { message: '' });
              }}
              onBlur={onBlur}
              outlineColor={theme.colors.borderColor.regular}
              labelValue={'Email'}
              placeholder={'Enter Email...'}
              errorValue={errors?.email?.message ?? ''}
            />
          )}
        />

        <Controller
          control={control}
          name={'password'}
          rules={{ required: 'Password cannot be empty!' }}
          render={({ field: { onBlur, value } }) => (
            <BaseTextInput
              value={value}
              onChangeText={text => {
                setValue('password', text);
                setError('password', { message: '' });
              }}
              onBlur={onBlur}
              outlineColor={theme.colors.borderColor.regular}
              labelValue={'Password'}
              placeholder={'Enter Password...'}
              secureTextEntry={!showPassword}
              right={
                <TextInput.Icon
                  icon={showPassword ? 'eye-off' : 'eye'}
                  onPress={() => setShowPassword(prev => !prev)}
                />
              }
              errorValue={errors?.password?.message ?? ''}
            />
          )}
        />

        <AnimatedLoaderButton
          isLoading={isLoading}
          title={'Login'}
          onPress={handleSubmit(submitClickHandler)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
