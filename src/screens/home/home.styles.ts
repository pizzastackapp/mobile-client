import { theme } from '@app/core/theme';
import { StyleSheet } from 'react-native';

export const homeScreenStyles = StyleSheet.create({
  container: {
    margin: 16,
  },
  categoriesTitle: {
    color: theme.colors.gray[900],
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 16,
  },
  categoriesBtnsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  categoryBtn: {
    marginRight: 4,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: theme.colors.slate[100],
    borderRadius: 20,
  },
  categoryBtnText: {
    fontSize: 14,
    color: theme.colors.gray[900],
  },
});
