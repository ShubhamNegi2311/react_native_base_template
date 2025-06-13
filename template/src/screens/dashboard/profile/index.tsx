import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import BaseImageView from 'components/base_components/base_image_view';
import React from 'react';
import {View} from 'react-native';
import {
  Button,
  MaterialBottomTabScreenProps,
  useTheme,
} from 'react-native-paper';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {
  AppStackParamList,
  DashbordBottomTabBarParamList,
} from 'types/navigation_types';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';
import {globalStyle} from 'utilities/global_styles';

type ProfileScreenProps = MaterialBottomTabScreenProps<
  DashbordBottomTabBarParamList,
  'ProfileScreen'
>;

const DemoOne: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <BaseImageView
        height={SCREEN_HEIGHT * 0.5}
        width={SCREEN_WIDTH * 0.5}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Clocktower_Panorama_20080622_20mb.jpg',
        }}
        borderRadius={14}
      />
    </View>
  );
};

const DemoTwo: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <Button
        children={'Recepies Screen'}
        onPress={() => {
          navigation.navigate('RecipesScreen');
        }}
      />
    </View>
  );
};

const DemoThree: React.FC = () => {
  return <View style={{flex: 1, backgroundColor: 'blue'}}></View>;
};

const ProfileScreen: React.FC<ProfileScreenProps> = props => {
  const theme = useTheme();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyle.screenContainer}></SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;
