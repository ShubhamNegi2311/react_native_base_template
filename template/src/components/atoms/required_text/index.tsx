import BaseText, {
  BaseTextCompProps,
} from 'components/base_components/base_text';
import React from 'react';
import {useTheme} from 'react-native-paper';

type RequiredTextCompProps = BaseTextCompProps & {isRequired?: boolean};

const RequiredTextComp: React.FC<RequiredTextCompProps> = props => {
  const {isRequired = true} = props;
  const theme = useTheme();

  return (
    <BaseText {...props}>
      {props.children}
      {isRequired && (
        <BaseText {...props} style={{color: theme.colors.textColor.error}}>
          {'*'}
        </BaseText>
      )}
    </BaseText>
  );
};

const RequiredText = React.memo(RequiredTextComp);
export default RequiredText;
