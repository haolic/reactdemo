import React, { useEffect } from 'react';

const ContentEditable2 = () => {
  useEffect(() => {
    // var cursor = 0; // 光标位置
    // document.onselectionchange = function () {
    //   var range = document.selection.createRange();
    //   var srcele = range.parentElement(); //获取到当前元素
    //   var copy = document.body.createTextRange();
    //   copy.moveToElementText(srcele);
    //   for (
    //     cursor = 0;
    //     copy.compareEndPoints('StartToStart', range) < 0;
    //     cursor++
    //   ) {
    //     copy.moveStart('character', 1); //改变光标位置，实际上我们是在记录cursor的数量.
    //   }
    // };
    // function moveEnd(obj) {
    //   lyTXT1.focus();
    //   var r = document.selection.createRange();
    //   //因为这里死从当前光标开始移动的(好像文本框的是从0算起.)所以我们需要拿到当前光标位置，然后就可以计算出要移动多少位了，这样就可以把光标移动到想要的位置了
    //   r.moveStart('character', lyTXT1.innerText.length - cursor);
    //   r.collapse(true);
    //   r.select();
    // }
  }, []);
  function insertHtmlAtCaret(html) {
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
  }

  const onClick = () => {
    document.getElementById('test').focus();
    insertHtmlAtCaret('<b contentEditable="false">INSERTED</b>');
  };
  const keyDown = (e) => {
    // if (e.keyCode === 13) {
    //   e.preventDefault();
    // }
    
    console.log(e);
  };
  return (
    <div>
      <button onClick={onClick}>插入字符</button>
      <div contentEditable="true" id="test" onKeyDown={keyDown}></div>
    </div>
  );
};

ContentEditable2.label = '内容可编辑2';

export default ContentEditable2;
