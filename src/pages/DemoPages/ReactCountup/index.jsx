import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import { useCountUp } from 'react-countup';

const ReactCountup = (props) => {
  const { value } = props;
  const countUpRef = useRef(null);

  const { update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 0,
    duration: 0.5,
    separator: ',',
    decimals: 2,
    decimal: '.',
  });

  useEffect(() => {
    const v = Number(value);
    update(v);
  }, [update, value]);

  return (
    <div>
      <span ref={countUpRef} className={styles.number} />
      <span>￥</span>
    </div>
  );
};

const ReactCountupUse = () => {
  const [v, setV] = useState(0);
  const tid = useRef();

  useEffect(() => {
    const change = () => {
      setV(Number((Math.random() * 1000000).toFixed(2)));
      tid.current = setTimeout(() => {
        change();
      }, 1500);
    };
    change();
    return () => {
      clearTimeout(tid.current);
    };
  }, []);

  return <ReactCountup value={v} />;
};

ReactCountupUse.label = '翻牌器';

export default ReactCountupUse;
