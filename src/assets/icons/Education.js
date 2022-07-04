import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Education = props => {
  const {color} = props;
  return (
    <Svg
      width={28}
      height={29}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M22 23.4556V21.4556C22 20.3947 21.5786 19.3773 20.8284 18.6271C20.0783 17.877 19.0609 17.4556 18 17.4556H10C8.93913 17.4556 7.92172 17.877 7.17157 18.6271C6.42143 19.3773 6 20.3947 6 21.4556V23.4556M18 9.45557C18 11.6647 16.2091 13.4556 14 13.4556C11.7909 13.4556 10 11.6647 10 9.45557C10 7.24643 11.7909 5.45557 14 5.45557C16.2091 5.45557 18 7.24643 18 9.45557Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Education;
