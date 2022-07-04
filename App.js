import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import StackNavigation from './src/navigation/StackNavigator';
import {navigationRef} from './src/navigation/RefNavigationService';

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
