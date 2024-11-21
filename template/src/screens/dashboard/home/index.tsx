import SpaceView from 'components/atoms/space_view';
import React from 'react';
import {View} from 'react-native';
import {Button, MaterialBottomTabScreenProps, Text} from 'react-native-paper';
import {ScaledSheet, vs} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'store';
import {updateCounter} from 'store/slices/counter_slice';
import {TabBarParamList} from 'types/navigation_types';

type HomeScreenProps = MaterialBottomTabScreenProps<
  TabBarParamList,
  'HomeScreen'
>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch();
  const countValue = useSelector((state: RootState) => state.counter.count);

  return (
    <View style={style.mainContainer}>
      <Text>{countValue}</Text>
      <SpaceView height={vs(20)} />
      <Button onPress={() => dispatch(updateCounter('increment'))}>
        {'Increment'}
      </Button>
      <SpaceView height={vs(20)} />
      <Button onPress={() => dispatch(updateCounter('decrement'))}>
        {'Decrement'}
      </Button>
    </View>
  );
};

export default HomeScreen;

const style = ScaledSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
