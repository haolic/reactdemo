import React, { useEffect } from 'react';

const Suanfa = () => {
  useEffect(() => {
    const address = [
      {
        addRessId: 1,
        addressName: '北京市',
        subDistrict: [
          {
            addressId: 11,
            addressName: '海淀区',
            subDistrict: [
              {
                addressId: 111,
                addressName: '中关村',
              },
            ],
          },
          {
            addressId: 12,
            addressName: '朝阳区',
          },
        ],
      },
      {
        addressId: 2,
        addressName: '河北省',
      },
    ];

    const cover = (arr) => {
      const obj = {};
      arr.forEach(el => {
        for(const key in el) {
          const _key = key.replace(/([A-Z])/g, '_$1').toLowerCase();
          if (Array.isArray(el[key])) {
            obj[_key] = cover(el[key]);
          } else {
            obj[_key] = el[key]
          }
        }
      });
      return obj;
    }
    console.log(cover(address));
  }, [])
  return <div>
    <div>
      对象key大写字母换成_小写
    </div>
    <pre>
      {`
const address = [
  {
    addressId: 1,
    addressName: '北京市',
    subDistrict: [
      {
        addressId: 11,
        addressName: '海淀区',
        subDistrict: [
          {
            addressId: 111,
            addressName: '中关村',
          },
        ],
      },
      {
        addressId: 12,
        addressName: '朝阳区',
      },
    ],
  },
  {
    addressId: 2,
    addressName: '河北省',
  },
];

const cover = (arr) => {
  const obj = {};
  arr.forEach(el => {
    for(const key in el) {
      const _key = key.replace(/([A-Z])/g, '_$1').toLowerCase();
      if (Array.isArray(el[key])) {
        obj[_key] = cover(el[key]);
      } else {
        obj[_key] = el[key]
      }
    }
  });
  return obj;
}
console.log(cover(address));
      `}
    </pre>
  </div>;
};

Suanfa.title = '算法-大写字母换成_小写'

export default Suanfa;
