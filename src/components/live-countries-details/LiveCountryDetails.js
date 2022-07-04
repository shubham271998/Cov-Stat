import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SvgUri} from 'react-native-svg';

import {checkNameLength} from '../../common/Utilities';
import CustomModal from '../custom-modal/CustomModal';

import {Red, Green} from '../../assets';

import styles from './LiveCountryDetails-styles';

function CountryDetails(props) {
  const {country, affected, countryFlag, recovered} = props;
  const [openModal, setOpenModal] = useState(false);

  const toggleRedGreen = () => (recovered < 10000000 ? <Red /> : <Green />);

  return (
    <TouchableOpacity onPress={() => setOpenModal(true)}>
      <View style={styles.mainContainer}>
        <View style={styles.imageCountry}>
          <View style={styles.flagContainer}>
            <SvgUri uri={countryFlag} height="34" width="47" />
          </View>
          <Text style={styles.country}>{checkNameLength(country)}</Text>
        </View>
        <View style={styles.numberImage}>
          <Text style={styles.number}>{affected.toLocaleString()}</Text>
          <View style={styles.image}>{toggleRedGreen()}</View>
        </View>
      </View>
      {openModal ? (
        <CustomModal
          modalVisible={openModal}
          setModalVisible={setOpenModal}
          data={props}
        />
      ) : null}
    </TouchableOpacity>
  );
}

export default CountryDetails;
