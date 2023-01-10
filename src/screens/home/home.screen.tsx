import { useGetMenuQuery } from '@app/core/types';
import { CategoriesSection } from '@app/modules/menu/components/categories-section/categories-section.component';
import { CategorySection } from '@app/modules/menu/components/category-section/category-section.component';
import { homeScreenStyles } from '@app/screens/home/home.styles';
import React, { FC, RefObject } from 'react';
import { ScrollView, View } from 'react-native';
import { wrapScrollView } from 'react-native-scroll-into-view';
import useDynamicRefs from 'use-dynamic-refs';

interface HomeScreenProps {}

const CustomScrollView = wrapScrollView(ScrollView);

export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const { data } = useGetMenuQuery();
  const [getRef, setRef] = useDynamicRefs();

  return (
    <CustomScrollView contentContainerStyle={homeScreenStyles.container}>
      <CategoriesSection categories={data?.categories || []} getRef={getRef} />
      {data?.categories.map(category => (
        <CategorySection
          key={`category-${category.id}`}
          category={category}
          ref={setRef(`category-${category.id}`) as RefObject<View>}
        />
      ))}
    </CustomScrollView>
  );
};
