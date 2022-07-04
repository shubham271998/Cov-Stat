import React from 'react';

import {HomePage, MapPage, News, Education, Discovery} from '../screens';

import {
  DiscoveryIcon,
  EducationIcon,
  NewsIcon,
  ShopIcon,
  MapIcon,
} from '../assets';

const BOTTOMTABNAVIGATOR_DETAILS = [
  {
    name: 'Home.',
    component: HomePage,
    icon: ({color}) => <ShopIcon color={color} />,
    headerTitle: 'COVID - 19',
  },

  {
    name: 'Map',
    component: MapPage,
    icon: ({color}) => <MapIcon color={color} />,
    headerTitle: 'World Wide map',
  },
  {
    name: 'Education',
    component: Education,
    icon: ({color}) => <EducationIcon color={color} />,
    headerTitle: 'Education',
  },
  {
    name: 'Discovery',
    component: Discovery,
    icon: ({color}) => <DiscoveryIcon color={color} />,
    headerTitle: 'Discovery',
  },
  {
    name: 'News',
    component: News,
    icon: ({color}) => <NewsIcon color={color} />,
    headerTitle: 'News',
  },
];

export {BOTTOMTABNAVIGATOR_DETAILS};
