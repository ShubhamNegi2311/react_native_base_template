import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {TextProps as NativeTextProps, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Text as PaperText, TextProps} from 'react-native-paper';

type GradientTextProps = TextProps<NativeTextProps> & {
  gradientColors: string[]; // atleast 2 colors are required for gradient. for single color add same color two times.
};

const GradientText: React.FC<GradientTextProps> = props => {
  const {gradientColors} = props;
  return (
    <MaskedView
      maskElement={
        <PaperText
          style={[styles.maskedText, props?.style]}
          children={props?.children}
        />
      }>
      <LinearGradient
        colors={gradientColors}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <PaperText
          style={[styles.maskedText, props?.style, {opacity: 0}]}
          children={props?.children}
        />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;

const styles = StyleSheet.create({
  maskedText: {
    color: 'black', // Required for mask
    textAlign: 'center',
  },
});
