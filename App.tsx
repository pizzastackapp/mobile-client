import { HomeScreen } from '@app/HomeScreen';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <SafeAreaView>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
