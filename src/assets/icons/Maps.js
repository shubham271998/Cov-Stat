import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Maps = props => {
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
        d="M10 20.4556L3 24.4556V8.45557L10 4.45557M10 20.4556L18 24.4556M10 20.4556V4.45557M18 24.4556L25 20.4556V4.45557L18 8.45557M18 24.4556V8.45557M18 8.45557L10 4.45557"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Maps;
