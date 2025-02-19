import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';
import {useTheme} from 'react-native-paper';
import Skeleton from 'react-native-reanimated-skeleton';
import {ScaledSheet} from 'react-native-size-matters';

type BaseImageProps = {
  source: ImageSourcePropType;
  height: number;
  width: number;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: string;
  topBorderOnly?: boolean;
  containImage?: boolean;
};

const BaseImage: React.FC<BaseImageProps> = props => {
  const theme = useTheme();
  const {
    height,
    width,
    source,
    borderRadius = 0,
    topBorderOnly = false,
    borderWidth = 0,
    borderColor = 'transparent',
    containImage = false,
  } = props;
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const stopImageLoading = () => setIsLoading(false);
  const onImageLoadingError = () => setIsLoading(false);

  return (
    <View>
      {isLoading && (
        <View style={style.shimmerViewContainer}>
          <Skeleton
            isLoading={true}
            animationType={'shiver'}
            animationDirection={'diagonalDownRight'}
            duration={2000}
            boneColor={theme.colors.loader.shimmerBone}
            highlightColor={theme.colors.loader.shimmerHighlight}>
            <View
              style={{
                width,
                height,
                padding: borderWidth ? width * 0.1 : 0,
                ...(topBorderOnly
                  ? {
                      borderTopLeftRadius: borderRadius,
                      borderTopRightRadius: borderRadius,
                    }
                  : {borderRadius}),
              }}
            />
          </Skeleton>
        </View>
      )}

      <Image
        style={{
          width,
          height,
          padding: borderWidth ? width * 0.1 : 0,
          ...(topBorderOnly
            ? {
                borderTopLeftRadius: borderRadius,
                borderTopRightRadius: borderRadius,
              }
            : {borderRadius}),
          borderWidth,
          borderColor,
        }}
        source={source}
        resizeMethod={'resize'}
        resizeMode={containImage ? 'contain' : 'cover'}
        onLoadEnd={stopImageLoading}
        onError={onImageLoadingError}
      />
    </View>
  );
};

const BaseImageView = React.memo(BaseImage);
export default BaseImageView;

const style = ScaledSheet.create({
  shimmerViewContainer: {position: 'absolute', zIndex: 1},
});
