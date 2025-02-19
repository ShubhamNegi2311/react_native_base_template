import React from 'react';
import {TextProps as NativeTextProps} from 'react-native';
import {Text as PaperText, TextProps} from 'react-native-paper';

export type BaseTextCompProps = TextProps<NativeTextProps>;

const BaseTextComp: React.FC<BaseTextCompProps> = props => {
  return <PaperText {...props} />;
};

const BaseText = React.memo(BaseTextComp);
export default BaseText;
