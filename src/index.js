import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import logo from './logo.png';
import './index.css';

const api =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const getAndSetData = async () => {
    setLoading(true);
    await axios.get(api).then((res) => {
      const tmp = res.data;

      tmp.map((i) => {
        if (i.symbol === 'bat') {
          return setData(i);
        } else return null;
      });
    });
    setLoading(false);
  };

  useEffect(() => {
    getAndSetData();
  }, []);

  if (loading) {
    return (
      <div className='app'>
        <img className='loading' src={logo} alt='Loading' />
      </div>
    );
  } else {
    return (
      <div className='app'>
        <img className='icon' src={data.image} alt='Icon' />
        <span className='price'>{data.current_price}</span>
      </div>
    );
  }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app'),
);
