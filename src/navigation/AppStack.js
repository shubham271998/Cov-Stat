import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import {APPSTACK_DRAWER_DETAILS} from './AppStack.const';

import CustomDrawer from '../components/custom-drawer/CustomDrawer';
import {openDrawer} from './RefNavigationService';

import {User} from '../assets';

import {WHITE, PINK, BLACK} from '../theme/Color';

const Drawer = createDrawerNavigator();

function AppStack() {
  const renderDrawerDetails = () =>
    APPSTACK_DRAWER_DETAILS.map(drawerDetails => {
      const {name, component, icon, headerTitle, headerShown} = drawerDetails;

      return (
        <Drawer.Screen
          key={name}
          name={name}
          component={component}
          options={{
            headerStyle: {
              shadowColor: BLACK,
              shadowOpacity: 0.4,
              shadowRadius: 10,
            },
            drawerIcon: icon,
            headerTitle: headerTitle,
            headerShown: headerShown,
            headerRight: User,
            headerRightContainerStyle: {padding: 20},
            headerLeft: () => (
              <Icon name="ios-menu-outline" size={24} onPress={openDrawer} />
            ),
            headerLeftContainerStyle: {padding: 10},
          }}
        />
      );
    });
  return (
    <Drawer.Navigator
      drawerContent={prop => <CustomDrawer {...prop} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'front',
        drawerActiveBackgroundColor: PINK,
        drawerActiveTintColor: WHITE,
      }}>
      {renderDrawerDetails()}
    </Drawer.Navigator>
  );
}

export default AppStack;
