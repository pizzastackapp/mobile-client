import { GetMenuQuery } from '@app/core/types';
import { categoriesSectionStyles } from '@app/modules/menu/components/categories-section/categories-section.styles';
import React, { FC, RefObject } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useScrollIntoView } from 'react-native-scroll-into-view';

interface CategoriesSectionProps {
  categories: GetMenuQuery['categories'];
  getRef: (key: string) => void | React.RefObject<unknown>;
}

export const CategoriesSection: FC<CategoriesSectionProps> = ({
  categories,
  getRef,
}) => {
  const scrollIntoView = useScrollIntoView();

  const handleTouchCategoryButton = (id: string) => {
    const currentRef = getRef(`category-${id}`);
    scrollIntoView((currentRef as RefObject<View>).current);
  };

  return (
    <View>
      <Text style={categoriesSectionStyles.categoriesTitle}>Категорії</Text>
      <View style={categoriesSectionStyles.categoriesBtnsContainer}>
        {categories.map(category => (
          <TouchableOpacity
            style={categoriesSectionStyles.categoryBtn}
            key={`category-btn-${category.id}`}
            onPress={() => handleTouchCategoryButton(category.id)}>
            <Text style={categoriesSectionStyles.categoryBtnText}>
              {category.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
