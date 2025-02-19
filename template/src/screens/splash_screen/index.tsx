import {NativeStackScreenProps} from '@react-navigation/native-stack';
import BaseText from 'components/base_components/base_text';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ms} from 'react-native-size-matters';
import Svg, {Defs, LinearGradient, Rect, Stop} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {TValidateLoginDetailResponse} from 'types/api_response_data_models';
import {AuthenticationStackParamList} from 'types/navigation_types';
import {AsyncStorageKeys} from 'utilities/async_storage_keys';
import {ReadDataFromAsyncStorage} from 'utilities/async_storage_utils';
import {FONT_BOLD, SCREEN_WIDTH} from 'utilities/constants';
import {loginUser} from 'utilities/utils';

type SplashScreenProps = NativeStackScreenProps<
  AuthenticationStackParamList,
  'SplashScreen'
>;

const FROM_COLOR = 'rgb(193, 202, 195)';
const TO_COLOR = 'rgb(44, 86, 30)';

const SplashScreen: React.FC<SplashScreenProps> = props => {
  const dispatch = useDispatch();
  const scaleValue = useSharedValue(0);
  const lineWidthValue = useSharedValue(0);
  const bottomTextFadeValue = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scaleValue.value}],
  }));

  const lineAnimatedStyle = useAnimatedStyle(() => ({
    width: lineWidthValue.value,
  }));

  const bottomTextAnimationStyle = useAnimatedStyle(() => ({
    opacity: bottomTextFadeValue.value,
  }));

  React.useEffect(() => {
    // Start the scaling animation after a short delay
    scaleValue.value = withTiming(1, {duration: 1500}, () => {
      lineWidthValue.value = withTiming(
        SCREEN_WIDTH * 0.5,
        {duration: 500},
        () => {
          bottomTextFadeValue.value = withTiming(1, {duration: 500});
        },
      );
    });

    const timeOut = setTimeout(() => {
      checkUserLoginStatus();
    }, 2500);

    return () => clearTimeout(timeOut);
  }, []);

  // handle this part insdie splash screen to avoid screen flicker/ change.
  const checkUserLoginStatus = async () => {
    // check for user login status.
    // Please Note: For now this key is acting as marking login status key but
    // in future we can use this key in case we have to introduce guest user or some other user type.
    const userLoginStatus = await ReadDataFromAsyncStorage(
      AsyncStorageKeys.LOGIN_STATUS,
    );

    // check for user login data
    const data = await ReadDataFromAsyncStorage(
      AsyncStorageKeys.USER_LOGIN_DATA,
    );

    // if user login status is available & user login data
    // is also available then move user to dashboard.
    if (userLoginStatus && data) {
      const loginData: TValidateLoginDetailResponse = JSON.parse(data);
      loginUser(dispatch, loginData);
    } else {
      // by default move user to login screen and remove splash screen from stack
      // so that when user press back button it will not go back to splash screen.
      props?.navigation?.reset({
        index: 0,
        routes: [{name: 'LoginScreen', params: {resetScreen: false}}],
      });
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: ms(5),
      }}>
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={FROM_COLOR} />
            <Stop offset="1" stopColor={TO_COLOR} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      <Animated.View style={animatedStyle}>
        <BaseText
          style={{
            color: TO_COLOR,
            fontSize: ms(50),
            fontFamily: FONT_BOLD,
            fontWeight: 'bold',
          }}
          children={'My App'}
        />
      </Animated.View>
      <Animated.View
        style={[
          {
            height: ms(7),
            backgroundColor: TO_COLOR,
          },
          lineAnimatedStyle,
        ]}
      />
      <Animated.View style={bottomTextAnimationStyle}>
        <BaseText
          style={{
            color: TO_COLOR,
            fontSize: ms(25),
            fontFamily: FONT_BOLD,
            fontWeight: 'bold',
          }}
          children={'A Demo App'}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
