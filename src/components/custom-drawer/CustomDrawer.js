import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import useFetchLocation from '../../hooks/useFetchLocation';

import styles from './CustomDrawer-styles';

import Avatar from '../../assets/images/Avatar.png';

function CustomDrawer(props) {
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.contentStyles}>
        <View style={styles.drawerHeader}>
          <Image source={Avatar} />
          <Text style={styles.name}>Rachel Brown</Text>
          <TouchableOpacity onPress={useFetchLocation}>
            <Text style={styles.location}>Location</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.itemsDetails}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

export default CustomDrawer;
