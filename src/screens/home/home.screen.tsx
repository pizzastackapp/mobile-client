import { useGetMenuQuery } from '@app/core/types';
import { CategoriesSection } from '@app/modules/menu/components/categories-section/categories-section.component';
import {
  CategorySection,
  CategorySectionViewRef,
} from '@app/modules/menu/components/category-section/category-section.component';
import { homeScreenStyles } from '@app/screens/home/home.styles';
import React, { FC, useRef } from 'react';
import { ScrollView } from 'react-native';
import useDynamicRefs from 'use-dynamic-refs';

interface HomeScreenProps {}

export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const { data } = useGetMenuQuery();
  const [getRef, setRef] = useDynamicRefs<CategorySectionViewRef>();
  const scrollViewRef = useRef<ScrollView>(null);

  return (
    <ScrollView
      contentContainerStyle={homeScreenStyles.container}
      ref={scrollViewRef}>
      <CategoriesSection categories={data?.categories || []} getRef={getRef} />
      {data?.categories.map(category => (
        <CategorySection
          key={`category-${category.id}`}
          category={category}
          ref={setRef(`category-${category.id}`)}
          scrollViewRef={scrollViewRef}
        />
      ))}
    </ScrollView>
  );
};
