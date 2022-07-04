import React from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import CountryDetails from '../../components/live-countries-details/LiveCountryDetails';
import Loader from '../../components/loader/Loader';
import {useFetchCovidData} from '../../hooks/useFetchCovidData';

import styles from './HomePage-styles';

const HomePage = () => {
  const isFocused = useIsFocused();
  let apiData = useFetchCovidData();

  apiData = isFocused ? apiData : <Loader />;
  const isDataLoaded = () =>
    apiData.length ? (
      <FlatList
        showsVerticalScrollIndicator={false}
        data={apiData}
        renderItem={data => (
          <CountryDetails
            country={data.item.country}
            countryFlag={data.item.countryFlag}
            affected={data.item.affected}
            recovered={data.item.recovered}
          />
        )}
        keyExtractor={(item, index) => `key-${index}`}
      />
    ) : (
      <Loader />
    );

  return (
    <SafeAreaView style={styles.homePage}>
      <View style={styles.mainContainer}>
        <Text style={styles.liveReport}>Live Reports</Text>
        <Text style={styles.topCountries}>Top {apiData.length} countries</Text>
        {isDataLoaded()}
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
