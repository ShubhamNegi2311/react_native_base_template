import React from 'react';
import {useTheme} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type MaterialCommunityIconsCompProps = {
  name: string;
  size?: number;
  color?: string;
  onPress?: () => void;
};

const MaterialIconComp: React.FC<MaterialCommunityIconsCompProps> = props => {
  const theme = useTheme();
  const {name, size = 25, color = theme.colors.iconColor.regular} = props;
  return (
    <MaterialCommunityIcons
      name={name}
      size={size}
      color={color}
      onPress={props?.onPress}
    />
  );
};

const MaterialIcon = React.memo(MaterialIconComp);
export default MaterialIcon;
