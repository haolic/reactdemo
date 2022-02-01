import React, { useState, useEffect } from 'react';
let i = 0;

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span>{`${++i} - ${count}`}</span>;
};

Test.label="test"

export default Test;
