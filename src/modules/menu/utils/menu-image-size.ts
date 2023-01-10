import { Dimensions } from 'react-native';

export const menuImageSize = () => {
  const windowWidth = Dimensions.get('window').width;

  const pizzaCardWidth = windowWidth / 2 - 24;
  const pizzaImageHeight = (105 / 163) * pizzaCardWidth;

  return {
    width: pizzaCardWidth,
    height: pizzaImageHeight,
  };
};
