import React, { useEffect, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const worker = new Worker('/worker.js');
    const cb = e => {
      setCount(e.data.count);
    };
    worker.addEventListener('message', cb);
    const postMessageInterval = () => {
      setTimeout(() => {
        worker.postMessage({ count });
        postMessageInterval();
      }, 1000);
    };
    postMessageInterval();
    return () => {
      worker.removeEventListener('message', cb);
    };
  }, [count]);
  return (
    <div
      style={{
        textAlign: 'center',
        padding: 15,
        margin: '0px auto',
        width: '300px',
      }}
    >
      count: {count}
    </div>
  );
};
