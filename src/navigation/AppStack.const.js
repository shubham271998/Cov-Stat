import React from 'react';

import {Discovery, Education, News, MapPage} from '../screens';
import BottomTabNavigator from './BottomTabNavigator';

import {
  DiscoveryIcon,
  EducationIcon,
  NewsIcon,
  ShopIcon,
  MapIcon,
} from '../assets';

const APPSTACK_DRAWER_DETAILS = [
  {
    name: 'Home',
    component: BottomTabNavigator,
    icon: ({color}) => <ShopIcon color={color} />,
    headerTitle: 'COVID - 19',
    headerShown: false,
  },
  {
    name: 'Map',
    component: MapPage,
    icon: ({color}) => <MapIcon color={color} />,
    headerTitle: 'World Wide map',
    headerShown: true,
  },
  {
    name: 'Education',
    component: Education,
    icon: ({color}) => <EducationIcon color={color} />,
    headerTitle: 'Education',
    headerShown: true,
  },
  {
    name: 'Discovery',
    component: Discovery,
    icon: ({color}) => <DiscoveryIcon color={color} />,
    headerTitle: 'Discovery',
    headerShown: true,
  },
  {
    name: 'News',
    component: News,
    icon: ({color}) => <NewsIcon color={color} />,
    headerTitle: 'News',
    headerShown: true,
  },
];

export {APPSTACK_DRAWER_DETAILS};
