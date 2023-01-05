import { theme } from '@app/core/theme';
import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const pizzaCardWidth = windowWidth / 2 - 24;
const pizzaImageHeight = (105 / 163) * pizzaCardWidth;

export const categorySectionStyles = StyleSheet.create({
  categoryTitle: {
    fontSize: 14,
    color: theme.colors.gray[900],
    fontFamily: theme.fonts.roboto.medium,
    marginBottom: 16,
  },
  pizzaCard: {
    width: pizzaCardWidth,
    marginBottom: 16,
  },
  pizzaCardImage: {
    width: pizzaCardWidth,
    height: pizzaImageHeight,
    resizeMode: 'contain',
    borderRadius: 8,
    marginBottom: 6,
  },
  pizzaCardTitle: {
    color: theme.colors.gray[900],
    fontSize: 14,
    fontFamily: theme.fonts.roboto.medium,
    marginBottom: 4,
  },
  pizzaCardPriceWrapper: {
    backgroundColor: theme.colors.amber[400],
    alignSelf: 'baseline',
    borderRadius: 10,
  },
  pizzaCardPriceTag: {
    color: theme.colors.white,
    paddingHorizontal: 8,
    paddingVertical: 2,
    fontSize: 12,
  },
  pizzaCardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
