import React from 'react';

const CreateElement = () => {
  return React.createElement(
    'div',
    { style: { border: '1px solid #f90' } },
    '我是createElement创建的div',
  );
};

CreateElement.label = '创建元素';

export default CreateElement;