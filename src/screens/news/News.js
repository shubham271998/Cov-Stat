import React from 'react';

import WebViews from '../../components/webview/Webviews';

const News = () => {
  const url = 'https://coronavirus.medium.com/';

  return <WebViews url={url} />;
};

export default News;
