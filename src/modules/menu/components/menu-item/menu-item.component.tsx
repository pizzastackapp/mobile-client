import { useCloudinaryImage } from '@app/common/hooks/use-cloudinary-image.hook';
import { GetMenuQuery } from '@app/core/types';
import { menuItemStyles } from '@app/modules/menu/components/menu-item/menu-item.styles';
import { menuImageSize } from '@app/modules/menu/utils/menu-image-size';
import React, { FC } from 'react';
import { View, Image, Text } from 'react-native';

interface MenuItemProps {
  item: GetMenuQuery['categories'][0]['menu_items'][0];
}

export const MenuItem: FC<MenuItemProps> = ({ item }) => {
  const { width, height } = menuImageSize();

  const transformations = [`w_${width}`, `h_${height}`];

  const image = useCloudinaryImage(item.image, transformations);

  return (
    <View style={menuItemStyles.pizzaCard}>
      <Image
        style={menuItemStyles.pizzaCardImage}
        source={{
          uri: image.createCloudinaryURL(),
        }}
      />
      <Text style={menuItemStyles.pizzaCardTitle}>{item.title}</Text>
      <View style={menuItemStyles.pizzaCardPriceWrapper}>
        <Text style={menuItemStyles.pizzaCardPriceTag}>{item.price} грн.</Text>
      </View>
    </View>
  );
};
