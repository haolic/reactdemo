import React, { useState } from 'react';

const list = [
  { label: '数字', ins: 123 },
  { label: '字符串', ins: '123' },
  { label: '对象', ins: {} },
  { label: '数组', ins: [] },
  { label: '函数', ins: () => {} },
  { label: 'undefined', ins: undefined },
  { label: 'null', ins: null },
  { label: 'NaN', ins: NaN },
  { label: 'Symbol', ins: Symbol() },
  { label: 'es6 Map', ins: new Map() },
];

const DataPropType = () => {
  const [type, setType] = useState('');

  const click = item => {
    setType(Object.prototype.toString.call(item));
  };

  return (
    <div>
      <div>
        {list.map(el => (
          <span
            key={el.label}
            onClick={() => click(el.ins)}
            style={{
              marginLeft: 15,
              cursor: 'pointer',
            }}
          >
            {el.label}
          </span>
        ))}
      </div>
      <div>{type}</div>
    </div>
  );
};

export default DataPropType;
