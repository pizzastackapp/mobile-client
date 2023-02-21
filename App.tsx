import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@app/core/apollo-client';
import { HomeScreen } from '@app/screens/home/home.screen';
import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, StatusBar } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Toast from 'react-native-toast-message';

const appScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar barStyle="dark-content" />
      <View style={appScreenStyles.container}>
        <SafeAreaView>
          <HomeScreen />
        </SafeAreaView>
      </View>
      <Toast />
    </ApolloProvider>
  );
};

export default App;
