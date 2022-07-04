import React from 'react';
import {DrawerActions} from '@react-navigation/native';

const navigationRef = React.createRef();

const openDrawer = () =>
  navigationRef.current.dispatch(DrawerActions.openDrawer());

export {navigationRef, openDrawer};
