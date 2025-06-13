import React from 'react';
import {View} from 'react-native';
import {useTheme} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type FullScreenContainerCompProps = {
  children?: React.ReactNode;
  paddingBottom?: number;
  paddingTop?: number;
};

const FullScreenContainerComp: React.FC<
  FullScreenContainerCompProps
> = props => {
  const {children, paddingBottom, paddingTop} = props;
  const theme = useTheme();
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
      }}>
      <View
        style={{
          backgroundColor: theme.colors.statusBar.backgroundColor,
          width: '100%',
          paddingTop: top + (paddingTop ?? 0),
        }}
      />
      <View style={{flex: 1, width: '100%'}}>{children}</View>
      <View
        style={{
          backgroundColor: theme.colors.background,
          width: '100%',
          paddingBottom: paddingBottom ?? bottom,
        }}
      />
    </View>
  );
};

const FullScreenContainer = React.memo(FullScreenContainerComp);
export default FullScreenContainer;
