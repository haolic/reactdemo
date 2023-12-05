import { useState } from 'react';
import './index.css';
import { v4 as uuidv4 } from 'uuid';

const StartingStyle = () => {
  const [list, setList] = useState([uuidv4()]);

  const add = () => {
    setList([...list, uuidv4()]);
  };
  return (
    <div>
      <h1>Starting Style</h1>
      <div style={{ marginBlock: 24 }}>
        通过添加@starting-style来实现元素起始就有过渡效果
      </div>
      <button
        style={{ width: 80, height: 40, position: 'sticky', top: 0, zIndex: 1 }}
        onClick={add}
      >
        添加元素
      </button>

      <div className="starting-wrap">
        {list.map((el) => {
          return (
            <div className="starting-block" key={el}>
              {el}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartingStyle;
