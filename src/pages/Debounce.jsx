import React, { useState, useEffect, useRef } from 'react';

export default () => {
  const [value, setValue] = useState('');
  const [text, setText] = useState('');
  const tid = useRef();
  useEffect(() => {
    tid.current = setTimeout(() => {
      setText(value);
    }, 500);
    return () => {
      clearTimeout(tid.current);
    };
  }, [value]);
  const inputChange = ev => {
    setValue(ev.target.value);
  };
  return (
    <div
      style={{
        textAlign: 'center',
        padding: 15,
        margin: '0px auto',
        width: '300px',
      }}
    >
      <div>
        useEffect + setTimeout:{' '}
        <input
          style={{ width: '100%', height: 32 }}
          type="text"
          value={value}
          onChange={inputChange}
        />
        <div style={{ textAlign: 'center' }}>{text}</div>
      </div>
    </div>
  );
};
