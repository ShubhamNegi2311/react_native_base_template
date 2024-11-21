import React from 'react';
import {Image, View} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';

type BaseImageProps = {
  imageURL: string;
  height: number;
  width: number;
  borderRadius?: number;
  topBorderOnly?: boolean;
};

const BaseImage: React.FC<BaseImageProps> = props => {
  const {height, width, imageURL, topBorderOnly = false} = props;
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const handleImageLoading = (value: boolean, label: string) =>
    setIsLoading(value);

  return (
    <>
      {isLoading ? (
        <View style={{position: 'absolute', zIndex: 1}}>
          <Skeleton
            isLoading={true}
            animationType={'shiver'}
            animationDirection={'horizontalRight'}
            duration={2000}
            boneColor={'#787878'}
            highlightColor={'#999999'}>
            <Image
              style={{
                width: width,
                height: height,
                ...(topBorderOnly
                  ? {
                      borderTopLeftRadius: props?.borderRadius ?? 0,
                      borderTopRightRadius: props?.borderRadius ?? 0,
                    }
                  : {borderRadius: props?.borderRadius ?? 0}),
              }}
            />
          </Skeleton>
        </View>
      ) : (
        false
      )}

      <Image
        style={{
          width: width,
          height: height,
          ...(topBorderOnly
            ? {
                borderTopLeftRadius: props?.borderRadius ?? 0,
                borderTopRightRadius: props?.borderRadius ?? 0,
              }
            : {borderRadius: props?.borderRadius ?? 0}),
        }}
        source={{
          uri: imageURL,
        }}
        resizeMethod={'resize'}
        resizeMode={'cover'}
        onLoadStart={() => handleImageLoading(true, 'onLoadStart')}
        onLoadEnd={() => handleImageLoading(false, 'onLoadStart')}
      />
    </>
  );
};

export const BaseImageView = React.memo(BaseImage);
