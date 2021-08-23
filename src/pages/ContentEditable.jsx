import React from 'react';

const ContentEditable = () => {
  const input = (e) => {
    e.persist();
    console.log(e.target.value);
    console.log(e.target.innerText);
    console.log(e.target.innerHTML);
  };
  return (
    <div
      style={{ background: '#b37feb', width: '100%', height: '100%' }}
      contentEditable
      onInput={input}
    >
      我不是输入框，但输入东西试试？
    </div>
  );
};

ContentEditable.label = '内容可编辑';

export default ContentEditable;
