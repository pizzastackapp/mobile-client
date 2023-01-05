import { homeScreenStyles } from '@app/screens/home/home.styles';
import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  return (
    <View style={homeScreenStyles.container}>
      <Text style={homeScreenStyles.categoriesTitle}>Категорії</Text>
      <View style={homeScreenStyles.categoriesBtnsContainer}>
        <TouchableOpacity style={homeScreenStyles.categoryBtn}>
          <Text style={homeScreenStyles.categoryBtnText}>🍕 Піца</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeScreenStyles.categoryBtn}>
          <Text style={homeScreenStyles.categoryBtnText}>🥤 Напої</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
