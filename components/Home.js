import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ValueProvider from './ValueContext';
import Profile from './Profile';
import BMI from './BMI';
import Age from './Age';

const Tab = createBottomTabNavigator();

const App = () => {

  const [profile, setProfile] = useState({ });

  return (
      <NavigationContainer>
        <ValueProvider value={profile}>
          <Tab.Navigator>
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Age" component={Age}/>
            <Tab.Screen name="BMI" component={BMI}/>
          </Tab.Navigator>
        </ValueProvider>
      </NavigationContainer>
  );
};

export default App;
