import { GetMenuQuery } from '@app/core/types';
import { categorySectionStyles } from '@app/modules/menu/components/category-section/category-section.styles';
import { MenuItem } from '@app/modules/menu/components/menu-item/menu-item.component';
import React, { forwardRef } from 'react';
import { View, Text } from 'react-native';

interface CategorySectionProps {
  category: GetMenuQuery['categories'][0];
}

export const CategorySection = forwardRef<View, CategorySectionProps>(
  ({ category }, ref) => {
    return (
      <View ref={ref}>
        <Text style={categorySectionStyles.categoryTitle}>
          {category.title}
        </Text>
        <View style={categorySectionStyles.pizzaCardWrapper}>
          {category.menu_items.map(menuItem => (
            <MenuItem key={`menuItem-${menuItem.id}`} item={menuItem} />
          ))}
        </View>
      </View>
    );
  },
);
