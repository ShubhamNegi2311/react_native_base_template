import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {BaseImageView} from 'components/base_components/base_image_view';
import React from 'react';
import {View} from 'react-native';
import {
  Button,
  MaterialBottomTabScreenProps,
  useTheme,
} from 'react-native-paper';
import {Tabs, TabScreen, TabsProvider} from 'react-native-paper-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {AppStackParamList, TabBarParamList} from 'types/navigation_types';
import {FONT_BOLD, SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';
import {globalStyle} from 'utilities/global_styles';

type ProfileScreenProps = MaterialBottomTabScreenProps<
  TabBarParamList,
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
        imageURL={
          'https://upload.wikimedia.org/wikipedia/commons/e/e6/Clocktower_Panorama_20080622_20mb.jpg'
        }
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
      <SafeAreaView style={globalStyle.screenContainer}>
        <TabsProvider defaultIndex={1}>
          <Tabs
            mode={'fixed'}
            showLeadingSpace={false}
            tabLabelStyle={{fontFamily: FONT_BOLD}}>
            <TabScreen label="One">
              <DemoOne />
            </TabScreen>
            <TabScreen label="Two">
              <DemoTwo />
            </TabScreen>
            <TabScreen label="Three">
              <DemoThree />
            </TabScreen>
          </Tabs>
        </TabsProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default ProfileScreen;
