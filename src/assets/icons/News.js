import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const News = props => {
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
        d="M14 9.45557C14 8.3947 13.5786 7.37728 12.8284 6.62714C12.0783 5.87699 11.0609 5.45557 10 5.45557H4V20.4556H11C11.7956 20.4556 12.5587 20.7716 13.1213 21.3342C13.6839 21.8969 14 22.6599 14 23.4556M14 9.45557V23.4556M14 9.45557C14 8.3947 14.4214 7.37728 15.1716 6.62714C15.9217 5.87699 16.9391 5.45557 18 5.45557H24V20.4556H17C16.2044 20.4556 15.4413 20.7716 14.8787 21.3342C14.3161 21.8969 14 22.6599 14 23.4556"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default News;
