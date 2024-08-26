import React from 'react';

const Pattern = () => {

  return (
    <div>
      <form action="/Pattern">
        <input pattern="\d+" title="请输入数字"></input>
        <input pattern="\d+" title="请输入wewertert数字"></input>
        <input pattern="\d+" title="请输werw入数字"></input>
        <input pattern="\d+" title="请输入werwe数字"></input>
        <input pattern="\d+" title="请输入werwer数字"></input>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

Pattern.label = 'pattern校验';
export default Pattern;
