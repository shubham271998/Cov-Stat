import React from 'react';
import {Text, View, ScrollView, ActivityIndicator} from 'react-native';

import TopCountriesDetails from '../../components/top-countries-details/TopCountriesDetails';

import {useFetchCovidData} from '../../hooks/useFetchCovidData';

import styles from './MapPage-styles';

import {Map} from '../../assets';

import {PINK} from '../../theme/Color';
import Loader from '../../components/loader/Loader';

const MapPage = () => {
  const completeApiData = useFetchCovidData();
  const apiData = completeApiData.length ? completeApiData.slice(0, 3) : '';
  const renderTopCountriesDetails = () =>
    apiData.length ? (
      apiData.map(props => {
        const {affected, recovered, id, country} = props;

        return (
          <TopCountriesDetails
            key={id}
            country={country}
            affected={affected}
            recovered={recovered}
          />
        );
      })
    ) : (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={PINK} />
      </View>
    );

  return apiData.length ? (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <View style={styles.covidMap}>
        <Text style={styles.covid}>COVID - 19 Affected Areas</Text>
        <View style={styles.affectedData}>
          <View style={styles.moreAffectedColor} />
          <Text style={styles.moreAffectedText}>More Affected</Text>
          <View style={styles.lessAffectedColor} />
          <Text style={styles.lessAffectedText}>Less Affected</Text>
        </View>
        <Map style={styles.map} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.topCountries}>Top {apiData.length} Countries</Text>
        {renderTopCountriesDetails()}
      </View>
    </ScrollView>
  ) : (
    <Loader />
  );
};

export default MapPage;
