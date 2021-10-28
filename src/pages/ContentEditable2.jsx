import React, { useRef } from 'react';

const ContentEditable2 = () => {
  const rangeInfo = useRef({});
  const inputRef = useRef();

  const insertHtmlAtCaret = async (html) => {
    var sel, range;
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
    } else if (document.selection && document.selection.type !== 'Control') {
      // IE < 9
      document.selection.createRange().pasteHTML(html);
    }
  };

  const onClick = async () => {
    document.getElementById('test').focus();

    var el = document.createElement('div');
    el.innerHTML =
      '<span style="display: inline-block" contentEditable="false">xxxxx</span>';
    var frag = document.createDocumentFragment(),
      node,
      lastNode;
    while ((node = el.firstChild)) {
      lastNode = frag.appendChild(node);
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

    // insertHtmlAtCaret(
    //   `<span style="display: inline-block" contentEditable="false">${xx}</span>`,
    // );
  };

  const blur = (e) => {
    insertHtmlAtCaret();
    var div = document.createElement('div');
    if (typeof html == 'string') {
      div.innerHTML = e.target.value;
      console.log(div.childNodes);
    }
  };

  const onInput = (e) => {
    console.log(e);
  };
  return (
    <div>
      <div
        contentEditable="true"
        id="test"
        onBlur={blur}
        onInput={onInput}
      ></div>
      <button onClick={onClick}>dianji/</button>
      <input ref={inputRef} />
    </div>
  );
};

ContentEditable2.label = '内容可编辑2';

export default ContentEditable2;
