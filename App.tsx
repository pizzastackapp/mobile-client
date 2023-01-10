import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@app/core/apollo-client';
import { HomeScreen } from '@app/screens/home/home.screen';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </ApolloProvider>
  );
};

export default App;
