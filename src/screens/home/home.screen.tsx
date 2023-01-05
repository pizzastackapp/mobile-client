import { CategoriesSection } from '@app/modules/menu/components/categories-section/categories-section.component';
import { CategorySection } from '@app/modules/menu/components/category-section/category-section.component';
import { homeScreenStyles } from '@app/screens/home/home.styles';
import React, { FC } from 'react';
import { ScrollView } from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  return (
    <ScrollView contentContainerStyle={homeScreenStyles.container}>
      <CategoriesSection />
      <CategorySection />
      <CategorySection />
    </ScrollView>
  );
};
