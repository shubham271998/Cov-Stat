import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Shop = props => {
  const {color} = props;
  return (
    <Svg
      width={23}
      height={21}
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.5 11.5V20.5H19.5V11.5"
        stroke={color}
        strokeLinecap="square"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.5 0.5L0.5 5.5C0.49689 6.8884 1.44932 8.09653 2.8001 8.4176C4.15087 8.73867 5.54505 8.08831 6.167 6.847C6.66976 7.85974 7.70283 8.50025 8.8335 8.50025C9.96417 8.50025 10.9972 7.85974 11.5 6.847C12.0028 7.85974 13.0358 8.50025 14.1665 8.50025C15.2972 8.50025 16.3302 7.85974 16.833 6.847C17.455 8.08831 18.8491 8.73867 20.1999 8.4176C21.5507 8.09653 22.5031 6.8884 22.5 5.5L19.5 0.5H3.5Z"
        stroke={color}
        strokeLinecap="square"
      />
      <Path d="M9.5 20.5V14.5H13.5V20.5" stroke={color} />
    </Svg>
  );
};

export default Shop;
