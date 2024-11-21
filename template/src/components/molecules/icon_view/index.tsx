import React from 'react';
import {useTheme} from 'react-native-paper';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import IonicIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {IconType} from 'utilities/enums';

type IconViewProps = {
  iconName: string;
  iconSize: number;
  iconType: IconType;
  iconColor?: string;
};

const IconViewComp: React.FC<IconViewProps> = props => {
  const {iconName, iconSize, iconType} = props;
  const theme = useTheme();

  const getIconView = React.useCallback((type: IconType) => {
    switch (type) {
      case IconType.Ionic: {
        return (
          <IonicIcons
            name={iconName}
            color={props?.iconColor ?? theme.colors.buttonColor.regular}
            size={iconSize}
          />
        );
      }
      case IconType.AntDesign: {
        return (
          <AntDesignIcons
            name={iconName}
            color={props?.iconColor ?? theme.colors.buttonColor.regular}
            size={iconSize}
          />
        );
      }
      case IconType.Material: {
        return (
          <MaterialIcons
            name={iconName}
            color={props?.iconColor ?? theme.colors.buttonColor.regular}
            size={iconSize}
          />
        );
      }
      case IconType.MaterialCommunity: {
        return (
          <MaterialCommunityIcons
            name={iconName}
            color={props?.iconColor ?? theme.colors.buttonColor.regular}
            size={iconSize}
          />
        );
      }
      default: {
        return (
          <MaterialCommunityIcons
            name={iconName}
            color={props?.iconColor ?? theme.colors.buttonColor.regular}
            size={iconSize}
          />
        );
      }
    }
  }, []);

  return getIconView(iconType);
};

export const IconView = React.memo(IconViewComp);
