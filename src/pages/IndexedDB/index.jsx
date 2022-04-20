import React, { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';

const IndexedDB = () => {
  const IDB = useRef(null);
  const inputRef = useRef(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    IDB.current = window.indexedDB.open('todoList', 1);
    IDB.current.onsuccess = (e) => {
      console.log('success');
      IDB.current = e.target.result;
    };

    IDB.current.onupgradeneeded = (e) => {
      IDB.current = e.target.result;
      IDB.current
        .createObjectStore('todos', { keyPath: 'nickName' })
        .createIndex('nickName', 'nickName', { unique: true });
    };
  }, []);

  const searchData = () => {
    if (inputRef.current.value) {
      const object = IDB.current
        .transaction(['todos'], 'readwrite')
        .objectStore('todos');
      const res = object.index('nickName').get(inputRef.current.value);
      res.onsuccess = (e) => {
        console.log('success', e);
        setList(e.target.result || []);
      };
      res.onerror = (e) => {
        console.error('error', e.target.error.message);
      };
    } else {
      const res = IDB.current.transaction(['todos']).objectStore('todos');
      let i = 0;
      const resList = [];
      res.openCursor(null, 'next').onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor && i < 10) {
          resList.push(cursor.value);
          cursor.continue();
        } else {
          setList(
            resList.sort((a, b) => {
              return b.create - a.create;
            }),
          );
        }
      };
    }
  };
  return (
    <div>
      <div>IndexedDb</div>
      <div>
        <input ref={inputRef}></input>
        <button onClick={searchData} style={{ marginLeft: 5 }}>
          点击搜索数据
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <li key={item.nickName}>
            <span>{item.nickName}</span>
            <span style={{ marginLeft: 5, color: '#f90' }}>
              {item.create && dayjs(item.create).format('YYYY-MM-DD HH:mm:ss')}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

IndexedDB.label = '浏览器数据库';

export default IndexedDB;
