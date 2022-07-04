import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {BOTTOMTABNAVIGATOR_DETAILS} from './BottomTabNavigator.const';

import {LIGHT_RED, BLACK} from '../theme/Color';

import {Burger, User} from '../assets';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = props => {
  const {navigation} = props;
  const handlePress = () => navigation.toggleDrawer;
  const renderTabScreenDetails = () =>
    BOTTOMTABNAVIGATOR_DETAILS.map(details => {
      const {name, component, icon, headerTitle} = details;
      return (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerStyle: {
              shadowColor: BLACK,
              shadowOpacity: 0.4,
              shadowRadius: 10,
            },
            tabBarIcon: icon,
            headerTitle: headerTitle,
            headerRight: User,
            headerRightContainerStyle: {padding: 20},
            headerLeft: () => (
              <Icon name="ios-menu-outline" size={24} onPress={handlePress()} />
            ),
            headerLeftContainerStyle: {padding: 10},
          }}
        />
      );
    });
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: LIGHT_RED,
        headerLeft: () => <Burger navigation={navigation} />,
      }}>
      {renderTabScreenDetails()}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
