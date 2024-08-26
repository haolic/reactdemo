import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import ToString from './ToString';

const RenderToString = () => {
  const [str, setStr] = useState('');
  const renderStr = () => {
    const newStr = ReactDOMServer.renderToStaticMarkup(<ToString />);
    setStr(newStr);
  };

  return (
    <div>
      <button onClick={renderStr}>render</button>
      <div dangerouslySetInnerHTML={{ __html: str }}></div>
      <div>{str}</div>
    </div>
  );
};

RenderToString.label = '渲染成HTML';
export default RenderToString;
