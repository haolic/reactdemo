import React, { useEffect } from 'react';

const Promise错误 = () => {
  useEffect(() => {
    const p1 = new Promise((res, rej) => {
      setTimeout(() => {
        rej('hhh');
      }, 2000);
    });
    const p2 = new Promise((res, rej) => {
      setTimeout(() => {
        res('aaa');
      }, 1000);
    });
    const p3 = new Promise((res, rej) => {
      setTimeout(() => {
        res('mmm');
      }, 3000);
    });
    const arr = [p1, p2, p3];
    Promise.all(arr.map(el => el.catch(console.error)))
      
      .then(hh => {
        console.log(hh);
      }).catch(err => {
        console.error(err);
      });
  }, []);

  return <div></div>;
};

export default Promise错误;
