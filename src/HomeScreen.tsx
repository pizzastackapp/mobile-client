import React, { FC } from 'react';
import { View, Text, useColorScheme } from 'react-native';

interface HomeScreenProps {}

export const HomeScreen: FC<HomeScreenProps> = ({}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={{ backgroundColor: isDark ? '#fff' : '#000' }}>
      <Text style={{ color: !isDark ? '#fff' : '#000' }}>123</Text>
    </View>
  );
};
