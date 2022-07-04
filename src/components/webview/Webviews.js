import React, {useState} from 'react';
import {WebView} from 'react-native-webview';

import Loader from '../loader/Loader';

const WebViews = props => {
  const [isLoading, setIsLoading] = useState(true);
  const {url} = props;

  const onLoadEnd = () => setIsLoading(false);

  return (
    <>
      <WebView
        onLoadEnd={onLoadEnd}
        source={{uri: url}}
        startInLoadingState={true}
      />
      {isLoading && <Loader />}
    </>
  );
};

export default WebViews;
