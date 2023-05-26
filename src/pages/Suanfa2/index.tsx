import React, { useEffect } from 'react';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

interface ListNode {
  val: number;
  next: ListNode | null;
}

const Sufanfa2 = () => {
  useEffect(() => {
    hljs.highlightAll();
    function reversePrint(head: ListNode | null): number[] {
      let current = head;
      const list = [];
      while (current) {
        list.push(current.val);
        current = current.next;
      }

      return list.reverse();
    }

    const a = reversePrint({
      val: 1,
      next: { val: 3, next: { val: 2, next: null } },
    });
    console.log(a);
  }, []);
  return (
    <div>
      <pre>
        <code>
          {`function reversePrint(head: ListNode | null): number[] {
  let current = head;
  const list = [];
  while (current) {
    list.push(current.val);
    current = current.next;
  }

  return list.reverse();
}`}
        </code>
      </pre>
    </div>
  );
};

export default Sufanfa2;
