import React from 'react';
import {Modal, Text, Pressable, View} from 'react-native';

import styles from './CustomModal-styles';

const CustomModal = props => {
  const {modalVisible, setModalVisible, data} = props;
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        presentationStyle="fullScreen"
        transparent={false}
        visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{data.country}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
