import React from 'react';

import WebViews from '../../components/webview/Webviews';

const Education = () => {
  const url =
    'https://www.who.int/emergencies/diseases/novel-coronavirus-2019/question-and-answers-hub/q-a-detail/coronavirus-disease-%28covid-19%29-variants-of-sars-cov-2?gclid=Cj0KCQjw_4-SBhCgARIsAAlegrXuZO0e1SmF9TRXvkT__mUL_ykD_UcgpVHokRyBqsr2N1tA6MWGsxwaAo_hEALw_wcB';

  return <WebViews url={url} />;
};

export default Education;
