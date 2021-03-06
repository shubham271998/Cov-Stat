import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Discovery = props => {
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
        d="M23 12.4556C23 19.4556 14 25.4556 14 25.4556C14 25.4556 5 19.4556 5 12.4556C5 10.0686 5.94821 7.77943 7.63604 6.09161C9.32387 4.40378 11.6131 3.45557 14 3.45557C16.3869 3.45557 18.6761 4.40378 20.364 6.09161C22.0518 7.77943 23 10.0686 23 12.4556Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 15.4556C15.6569 15.4556 17 14.1124 17 12.4556C17 10.7987 15.6569 9.45557 14 9.45557C12.3431 9.45557 11 10.7987 11 12.4556C11 14.1124 12.3431 15.4556 14 15.4556Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Discovery;
