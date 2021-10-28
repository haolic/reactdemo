import React, { useEffect } from 'react';
import { Modal } from 'antd';

const ContentEditable2 = () => {
  const insertHtmlAtCaret = async (html) => {
    var sel, range;
    if (window.getSelection) {
      // IE9 and non-IE
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        range = sel.getRangeAt(0);
        range.deleteContents();
        // Range.createContextualFragment() would be useful here but is
        // non-standard and not supported in all browsers (IE9, for one)
        var el = document.createElement('div');
        el.innerHTML = html;
        var frag = document.createDocumentFragment(),
          node,
          lastNode;
        while ((node = el.firstChild)) {
          lastNode = frag.appendChild(node);
        }
        range.insertNode(frag);
        // Preserve the selection
        if (lastNode) {
          range = range.cloneRange();
          range.setStartAfter(lastNode);
          range.collapse(true);
          sel.removeAllRanges();

          sel.addRange(range);
        }
      }
    } else if (document.selection && document.selection.type !== 'Control') {
      // IE < 9
      document.selection.createRange().pasteHTML(html);
    }
  };

  const onClick = async () => {
    document.getElementById('test').focus();

    const xx = await new Promise((resolve) => {
      Modal.confirm({
        content: 'xxx',
        onOk: () => resolve(Math.random().toFixed(2)),
      });
    });

    insertHtmlAtCaret(
      `<span style="display: inline-block" contentEditable="false">${xx}</span>`,
    );
  };

  const blur = (e) => {
    const html = e.target.innerHTML;
    const text = e.target.innerText;
    console.log(html);
    console.log(text);

    var div = document.createElement('div');
    if (typeof html == 'string') {
      div.innerHTML = html;
      console.log(div.childNodes);
    }
  };
  return (
    <div>
      <button onClick={onClick}>插入字符</button>
      <div contentEditable="true" id="test" onBlur={blur}></div>
    </div>
  );
};

ContentEditable2.label = '内容可编辑2';

export default ContentEditable2;
