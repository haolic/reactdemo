import React, { useRef, useState } from 'react';
import ContentEditable from 'react-contenteditable';
import { Select } from 'antd';

const MyComponent = () => {
  const contentEditable = useRef();
  const [html, setHtml] = useState('');
  const rangeInfo = useRef();

  const getValueInfo = () => {
    return contentEditable.current.childNodes;
  };

  const handleChange = (evt) => {
    setHtml(evt.target.value);
    // console.log(evt.target.value);
    // const div = document.createElement('div');
    // div.innerHTML = evt.target.value;
    // // 获取子元素们
    // console.log(div.childNodes);
    const childNodes = getValueInfo();
    console.log(childNodes);
  };
  const saveRangeInfo = () => {
    contentEditable.current.focus();
    let sel, range;

    if (window.getSelection) {
      // IE9 and non-IE
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        rangeInfo.current = {
          range,
          sel,
        };
      }
    }
  };

  const insertWord = (word) => {
    contentEditable.current.focus();
    const el = document.createElement('div');
    el.innerHTML = `<span style="display: inline-block; background: #f90;" contentEditable="false">${word}</span>`;
    var frag = document.createDocumentFragment(),
      node,
      lastNode;
    while ((node = el.firstChild)) {
      lastNode = frag.appendChild(node);
    }
    if (!contentEditable.current.innerHTML) {
      contentEditable.current.appendChild(lastNode);
      return;
    }

    if (!rangeInfo.current) {
      saveRangeInfo();
    }
    let { range, sel } = rangeInfo.current;

    range.insertNode(frag);
    // Preserve the selection
    if (lastNode) {
      range = range.cloneRange();
      range.setStartAfter(lastNode);
      range.collapse(true);
      sel.removeAllRanges();

      sel.addRange(range);
    }
  };

  const onSelect = (v) => {
    insertWord(v);
    console.log(getValueInfo());
  };

  const blur = () => {
    saveRangeInfo();
  };
  return (
    <div>
      <ContentEditable
        innerRef={contentEditable}
        html={html} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={handleChange} // handle innerHTML change
        tagName="div" // Use a custom HTML tag (uses a div by default)
        onBlur={blur}
      />

      <button
        onClick={() => {
          setHtml('112234');
          contentEditable.current.innerHTML = '112234';
        }}
      >
        点击
      </button>
      <div>
        <Select onChange={onSelect} style={{ width: 100 }}>
          <Select.Option value="xx">xxx</Select.Option>
          <Select.Option value="vv">vv</Select.Option>
        </Select>
      </div>
    </div>
  );
};

MyComponent.label = '内容可编辑3';

export default MyComponent;
