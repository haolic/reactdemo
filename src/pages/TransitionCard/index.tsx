import React, { useEffect, useRef, useState } from 'react';
import TCard from './TCard';
import './index.less';

const data = [
  {
    top: 350,
    left: 500,
    code: 'xxx1',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '启用',
  },
  {
    top: 100,
    left: 800,
    align: 'left',
    code: 'xxx662',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
  {
    top: 100,
    left: 900,
    align: 'right',
    code: 'xx555x2',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
  {
    top: 400,
    left: 700,
    align: 'left',
    code: 'xxx442',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
  {
    top: 600,
    left: 700,
    align: 'left',
    code: 'xxx2333',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
];
const data2 = [
  {
    top: 150,
    left: 50,
    code: '222',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '启用',
  },
  {
    top: 200,
    left: 600,
    align: 'left',
    code: '33312323',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
  {
    top: 430,
    left: 900,
    align: 'right',
    code: 'dddweda',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
  {
    top: 450,
    left: 700,
    align: 'left',
    code: 'fllsaf',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
  {
    top: 650,
    left: 700,
    align: 'left',
    code: 'weterwe',
    unit: '减碳量tCO₂',
    format: 'int',
    name: 'xxx园区',
    value: 72500,
    status: '建设中',
  },
];

const TransitionCard = () => {
  const tid = useRef<NodeJS.Timeout>();
  const [renderData, setRenderData] = useState(data);
  useEffect(() => {
    const arr = [data, data2];
    let i = 0;

    const loop = () => {
      tid.current = setTimeout(() => {
        if (i) {
          i = 0;
        } else {
          i = 1;
        }
        setRenderData(arr[i]);
        loop();
      }, 3000);
    };

    loop();
  }, []);
  return (
    <div className="transition-card-page">
      {renderData.map((el, idx) => {
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
            delayRatio={idx * 0.3 + 1}
          />
        );
      })}
    </div>
  );
};

TransitionCard.title = '上升动效卡片';

export default TransitionCard;
