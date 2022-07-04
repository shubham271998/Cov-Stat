import React from 'react';
import {Image} from 'react-native';

import {Cough, Fever, BreathingDifficulty} from '../../assets';
import {WHITE} from '../../theme/Color';

const ONBOARDING_DETAILS = [
  {
    backgroundColor: WHITE,
    image: <Image source={Fever} />,
    title: 'Fever',
    subtitle:
      'He severity of COVID-19 symptoms can range from very mild to severe. Some people have no symptoms. People who are older or have existing chronic medical conditions.',
  },
  {
    backgroundColor: WHITE,
    image: <Image source={Cough} />,
    title: 'Cough',
    subtitle:
      'Such as heart or lung disease or diabetis, may be at higher risk of serious illness. This is similar to what is seen with other respiratory illnesses, such influenza.',
  },
  {
    backgroundColor: WHITE,
    image: <Image source={BreathingDifficulty} />,
    title: 'Breathing Difficulty',
    subtitle:
      'Contact your doctor or clinic right away if you have COVID-19 symptoms, you’ve been exposed to someone with COVID-19, or you live in or have traveled from an area with ongoing community spread of COVID-19.',
  },
];

export {ONBOARDING_DETAILS};
