import React from 'react';
import TCard from './TCard';
import './index.less';

const data = [
  {
    top: 50,
    left: 100,
    code: 'xxx1',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '启用',
  },
  {
    top: 100,
    left: 700,
    align: 'left',
    code: 'xxx2',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
];

const TransitionCard = () => {
  return (
    <div className="transition-card-page">
      {data.map((el) => {
        return (
          <TCard
            key={el.code}
            position={{
              x: el.left,
              y: el.top,
            }}
            value={el.value}
            name={el.name}
            unit={el.unit}
            status={el.status}
            align={el.align}
          />
        );
      })}
    </div>
  );
};

TransitionCard.title = '上升动效卡片';

export default TransitionCard;
