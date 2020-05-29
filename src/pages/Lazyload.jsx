import React, { useState, useRef } from 'react';
import _ from 'lodash';

const Lazyload = () => {
  const wrap = useRef();
  const inner = useRef();
  const [list, setList] = useState(new Array(30).fill('').map((el, idx) => idx));
  const scroll = () => {
    const wrapDom = wrap.current;
    const { clientHeight, scrollHeight, scrollTop } = wrapDom;
    if (clientHeight + scrollTop >= scrollHeight) {
      const addItem = new Array(10).fill('').map((el, idx) => {
        return idx + list.length;
      });
      setList([...list, ...addItem]);
    }
  };
  return (
    <div
      style={{
        height: '100%',
        overflow: 'auto',
      }}
      ref={wrap}
      onScroll={_.debounce(scroll, 300)}
    >
      <div ref={inner}>
        {list.map(el => {
          return (
            <div
              key={el.toString()}
              style={{
                border: '1px solid #f90',
                padding: 5,
                width: 200,
                margin: '5px auto',
              }}
            >
              {el}
            </div>
          );
        })}
        <div
          style={{
            padding: 5,
            width: 200,
            margin: '5px auto',
            textAlign: 'center',
          }}
        >
          loading...
        </div>
      </div>
    </div>
  );
};

export default Lazyload;
