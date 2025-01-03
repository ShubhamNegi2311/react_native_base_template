import React from 'react';
import {ActivityIndicator, Pressable, Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {ms} from 'react-native-size-matters';
import {SCREEN_WIDTH} from 'utilities/constants';

type AnimatedLoaderButtonProps = {
  title: string;
  isLoading: boolean;
  onPress: () => void;
  height?: number;
  width?: number;
  buttonColor?: string;
  textColor?: string;
};

const AnimatedLoaderButtonComp: React.FC<AnimatedLoaderButtonProps> = props => {
  const {title, isLoading, height, width = SCREEN_WIDTH * 0.8, onPress} = props;
  const theme = useTheme();
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
    <Pressable onPress={onPress} disabled={isLoading}>
      <Animated.View
        style={[
          {
            height: height && height,
            paddingVertical: ms(15),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:
              props?.buttonColor ?? theme.colors.buttonColor.regular,
            borderRadius: isLoading ? 100 : theme.roundness,
            width: buttonAnimatedWidth,
          },
        ]}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text
            style={[
              {
                color: props?.textColor ?? theme.colors.textColor.regular,
              },
              theme.fonts.labelMedium,
            ]}>
            {title}
          </Text>
        )}
      </Animated.View>
    </Pressable>
  );
};

const AnimatedLoaderButton = React.memo(AnimatedLoaderButtonComp);
export default AnimatedLoaderButton;
