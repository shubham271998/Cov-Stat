import {useState, useEffect} from 'react';
import axios from 'axios';

import {COVID_DATA_URL} from '../common/Constant';

const useFetchCovidData = () => {
  const [apiData, setApiData] = useState({});

  const fetchData = async () => {
    try {
      const covid = await axios.get(COVID_DATA_URL);
      setApiData(covid.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return apiData;
};

export {useFetchCovidData};
