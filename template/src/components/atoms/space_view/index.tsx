import React from 'react';
import {View} from 'react-native';

type SpaceViewCompProps = {
  height?: number;
  width?: number;
};

const SpaceViewComp: React.FC<SpaceViewCompProps> = props => {
  const {height = 0, width = 0} = props;
  return <View style={{height, width}} />;
};

const SpaceView = React.memo(SpaceViewComp);
export default SpaceView;
