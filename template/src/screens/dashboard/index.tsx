import {NativeStackScreenProps} from '@react-navigation/native-stack';
import DashboardNavigator from 'navigation/dashboard_navigator';
import React from 'react';
import {AppStackParamList} from 'types/navigation_types';

type DashboardScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'DashBoardScreen'
>;

const DashboardScreen: React.FC<DashboardScreenProps> = props => {
  return <DashboardNavigator />;
};

export default DashboardScreen;
