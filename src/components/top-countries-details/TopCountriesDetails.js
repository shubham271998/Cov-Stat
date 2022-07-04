import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import {
  kFormatter,
  divisor,
  colorGenerator,
  checkNameLength,
} from '../../common/Utilities/';

import {BLACK, GREEN, LIGHT_GREY, PINK, WHITE} from '../../theme/Color';

import styles from './TopCountriesDetails-styles';

import {RedBell, GreenBell} from '../../assets/';

function TopCountriesDetails(props) {
  const {country, affected, recovered} = props;
  const [isGreenBellPress, setIsGreenBellPress] = useState(false);
  const [isRedBellPress, setIsRedBellPress] = useState(false);

  const greenFill = isGreenBellPress ? GREEN : WHITE;
  const redFill = isRedBellPress ? PINK : WHITE;
  const handleGreenPress = () => setIsGreenBellPress(!isGreenBellPress);
  const handleRedPress = () => setIsRedBellPress(!isRedBellPress);

  const toggleBellIcon = () =>
    divisor(affected, recovered) > 10 ? (
      <RedBell fill={redFill} onPress={handleRedPress} />
    ) : (
      <GreenBell fill={greenFill} onPress={handleGreenPress} />
    );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.circleContainer} />
      <View style={styles.rectangleContainer}>
        <CircularProgress
          value={divisor(affected, recovered)}
          radius={40}
          duration={200}
          textColor={BLACK}
          valueSuffix={'%'}
          titleStyle={styles.circularProgressTitle}
          activeStrokeColor={colorGenerator(divisor(affected, recovered))}
          inActiveStrokeColor={LIGHT_GREY}
        />
      </View>
      <View style={styles.countryData}>
        <Text style={styles.country}>{checkNameLength(country)}</Text>
        <Text style={styles.affected}>Affected - {kFormatter(affected)}</Text>
        <Text style={styles.recovered}>
          Recovered - {kFormatter(recovered)}
        </Text>
      </View>

      <View style={styles.bellIcon}>{toggleBellIcon()}</View>
    </View>
  );
}

export default TopCountriesDetails;
