import { categoriesSectionStyles } from '@app/modules/menu/components/categories-section/categories-section.styles';
import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface CategoriesSectionProps {}

export const CategoriesSection: FC<CategoriesSectionProps> = ({}) => {
  return (
    <View>
      <Text style={categoriesSectionStyles.categoriesTitle}>Категорії</Text>
      <View style={categoriesSectionStyles.categoriesBtnsContainer}>
        <TouchableOpacity style={categoriesSectionStyles.categoryBtn}>
          <Text style={categoriesSectionStyles.categoryBtnText}>🍕 Піца</Text>
        </TouchableOpacity>
        <TouchableOpacity style={categoriesSectionStyles.categoryBtn}>
          <Text style={categoriesSectionStyles.categoryBtnText}>🥤 Напої</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
