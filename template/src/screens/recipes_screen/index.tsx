import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useInfiniteQuery} from '@tanstack/react-query';
import {getRecipes} from 'api';
import {BaseImageView} from 'components/base_components/base_image_view';
import {ListLoader} from 'components/molecules/list_loader';
import React from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Text, useTheme} from 'react-native-paper';
import {AppStackParamList} from 'types/navigation_types';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'utilities/constants';
import {style} from './style';

type RecipesScreenProps = NativeStackScreenProps<
  AppStackParamList,
  'RecipesScreen'
>;

const RecipesScreen: React.FC<RecipesScreenProps> = props => {
  const theme = useTheme();
  const themedStyle = style(theme);

  const {isFetching, data, hasNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: ['getRecipes'],
    queryFn: ({pageParam}) => {
      return getRecipes(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if ((lastPage?.results ?? []).length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
  });

  console.log('IS_FETCHING_VALUE ==>', isFetching);

  return (
    <SafeAreaView style={themedStyle.mainContainer}>
      <FlatList
        data={
          data?.pages?.map(pageData => pageData?.results ?? [])?.flat() ?? []
        }
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(item, index) => item?.name + index}
        renderItem={({item}) => (
          <View
            style={{
              width: SCREEN_WIDTH - 40,
              marginVertical: 20,
              borderRadius: 14,
              backgroundColor: '#F1F1F1',
            }}>
            <BaseImageView
              height={SCREEN_HEIGHT * 0.25}
              width={SCREEN_WIDTH - 40}
              imageURL={item?.thumbnail_url ?? ''}
              borderRadius={14}
              topBorderOnly={true}
            />
            <View style={{width: SCREEN_WIDTH - 40, padding: 20}}>
              <Text>{item?.name ?? ''}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => {
          return isFetching ? <ListLoader /> : false;
        }}
        ListEmptyComponent={() => {
          return !isFetching ? (
            <Text style={{marginTop: 50}}>{'No Data Available!'}</Text>
          ) : (
            false
          );
        }}
        onEndReached={({distanceFromEnd}) => {
          if (distanceFromEnd > 0 && !isFetching && hasNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.3}
      />
    </SafeAreaView>
  );
};

export default RecipesScreen;
