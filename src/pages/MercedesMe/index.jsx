import React, { useEffect } from 'react';
import qs from 'query-string';
import axios from 'axios';
import { Base64 } from 'js-base64';

const MercedesMe = () => {
  const getData = async () => {
    const { code } = qs.parse(window.location.search);
    if (!code) {
      return;
    }
    const res = await axios('/as/token.oauth2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Base64.encode(
            '8dd2266c-b9ca-4e40-9333-92e376cf7acb:todotodotodotodo',
          ),
      },
      data: qs.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: 'http://localhost:3000/MercedesMe',
      }),
    });

    console.log(res);
    const vehiclesRes = await axios(
      '/vehicledata/v2/vehicles/LE4ZG8DB0NL754335/resources',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + res.data.access_token,
        },
      },
    );
    console.log(vehiclesRes);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <a href="https://id.mercedes-benz.com/as/authorization.oauth2?response_type=code&client_id=8dd2266c-b9ca-4e40-9333-92e376cf7acb&redirect_uri=http://localhost:3000/MercedesMe&scope=mb:vehicle:mbdata:vehiclestatus offline_access">
        <button>点击请求数据</button>
      </a>
    </div>
  );
};

MercedesMe.label = '奔驰小程序调试';

export default MercedesMe;
