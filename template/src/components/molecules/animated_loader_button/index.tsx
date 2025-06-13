import BaseText from 'components/base_components/base_text';
import BounceView from 'components/molecules/bounce_view';
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';
import {ms} from 'utilities/scale_utils';

type AnimatedLoaderButtonProps = {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  height?: number;
  width?: number;
  buttonColor?: string;
  textColor?: string;
  fontSize?: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  alignSelfCenter?: boolean;
  leftIcon?: React.ReactNode;
  disabled?: boolean;
  animate?: boolean;
};

const AnimatedLoaderButtonComp: React.FC<AnimatedLoaderButtonProps> = props => {
  const theme = useTheme();
  const {
    title,
    isLoading = false,
    height = SCREEN_HEIGHT * 0.055,
    width = SCREEN_WIDTH * 0.8,
    fontSize = ms(height * 0.3),
    borderWidth = 0,
    borderRadius = theme.radius.regular,
    borderColor = theme.colors.borderColor.regular,
    alignSelfCenter = false,
    onPress,
    leftIcon = null,
    disabled = false,
    animate = true,
  } = props;

  const buttonAnimatedWidth = useSharedValue(width);
  const shrinkButton = () =>
    (buttonAnimatedWidth.value = withSpring(width * 0.2, {
      damping: 50,
      overshootClamping: false,
    }));

  const expandButton = () =>
    (buttonAnimatedWidth.value = withSpring(width, {
      damping: 50,
      overshootClamping: false,
    }));

  React.useEffect(() => {
    if (isLoading) {
      shrinkButton();
    } else {
      expandButton();
    }
  }, [isLoading]);

  return (
    <BounceView onPress={onPress} disabled={isLoading || disabled}>
      <Animated.View
        style={[
          {
            height: height && height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:
              props?.buttonColor ?? theme.colors.buttonColor.regular,
            borderRadius: isLoading
              ? animate
                ? theme.radius.circle
                : borderRadius
              : borderRadius,
            width: animate ? buttonAnimatedWidth : width,
            borderWidth: borderWidth,
            borderColor: borderColor,
            alignSelf: alignSelfCenter ? 'center' : 'auto',
            minWidth: ms(50),
          },
        ]}>
        {isLoading ? (
          <View style={{transform: [{scale: height > ms(50) ? 1 : 0.7}]}}>
            <ActivityIndicator color={theme.colors.iconColor.white} />
          </View>
        ) : (
          <View
            style={{flexDirection: 'row', gap: ms(10), alignItems: 'center'}}>
            {leftIcon && leftIcon}
            <BaseText
              style={[
                theme.fonts.bold,
                {
                  color: props?.textColor ?? theme.colors.textColor.white,
                  fontSize: fontSize,
                  textAlign: 'center',
                },
              ]}>
              {title}
            </BaseText>
          </View>
        )}
      </Animated.View>
    </BounceView>
  );
};

const AnimatedLoaderButton = React.memo(AnimatedLoaderButtonComp);
export default AnimatedLoaderButton;
