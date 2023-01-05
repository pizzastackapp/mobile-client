import { categorySectionStyles } from '@app/modules/menu/components/category-section/category-section.styles';
import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';

interface CategorySectionProps {}

export const CategorySection: FC<CategorySectionProps> = ({}) => {
  return (
    <View>
      <Text style={categorySectionStyles.categoryTitle}>🍕 Піца</Text>
      <View style={categorySectionStyles.pizzaCardWrapper}>
        <View style={categorySectionStyles.pizzaCard}>
          <Image
            style={categorySectionStyles.pizzaCardImage}
            source={{
              uri: 'https://res.cloudinary.com/pizzastack/image/upload/w_384,h_240,dpr_2.0/v1/menu/menu-1660636947?_a=AJE+xWI0',
            }}
          />
          <Text style={categorySectionStyles.pizzaCardTitle}>
            Піца карбонара
          </Text>
          <View style={categorySectionStyles.pizzaCardPriceWrapper}>
            <Text style={categorySectionStyles.pizzaCardPriceTag}>
              255 грн.
            </Text>
          </View>
        </View>
        <View style={categorySectionStyles.pizzaCard}>
          <Image
            style={categorySectionStyles.pizzaCardImage}
            source={{
              uri: 'https://res.cloudinary.com/pizzastack/image/upload/w_384,h_240,dpr_2.0/v1/menu/menu-1660636947?_a=AJE+xWI0',
            }}
          />
          <Text style={categorySectionStyles.pizzaCardTitle}>
            Піца карбонара
          </Text>
          <View style={categorySectionStyles.pizzaCardPriceWrapper}>
            <Text style={categorySectionStyles.pizzaCardPriceTag}>
              255 грн.
            </Text>
          </View>
        </View>
        <View style={categorySectionStyles.pizzaCard}>
          <Image
            style={categorySectionStyles.pizzaCardImage}
            source={{
              uri: 'https://res.cloudinary.com/pizzastack/image/upload/w_384,h_240,dpr_2.0/v1/menu/menu-1660636947?_a=AJE+xWI0',
            }}
          />
          <Text style={categorySectionStyles.pizzaCardTitle}>
            Піца карбонара
          </Text>
          <View style={categorySectionStyles.pizzaCardPriceWrapper}>
            <Text style={categorySectionStyles.pizzaCardPriceTag}>
              255 грн.
            </Text>
          </View>
        </View>
        <View style={categorySectionStyles.pizzaCard}>
          <Image
            style={categorySectionStyles.pizzaCardImage}
            source={{
              uri: 'https://res.cloudinary.com/pizzastack/image/upload/w_384,h_240,dpr_2.0/v1/menu/menu-1660636947?_a=AJE+xWI0',
            }}
          />
          <Text style={categorySectionStyles.pizzaCardTitle}>
            Піца карбонара
          </Text>
          <View style={categorySectionStyles.pizzaCardPriceWrapper}>
            <Text style={categorySectionStyles.pizzaCardPriceTag}>
              255 грн.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
