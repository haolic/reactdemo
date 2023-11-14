import React, { useEffect } from 'react';
import hljs from 'highlight.js';
import listNodeGen from '@/utils/listNodeGen';

const list = [1, 2, 4];
const list2 = [1, 3, 4];

const Suanfa3 = () => {
  useEffect(() => {
    hljs.highlightAll();
    const listNode = listNodeGen(list);
    const listNode2 = listNodeGen(list2);

    function mergeTwoLists(l1, l2) {
      if (!l1) { // 如果一个链表为空，返回另一个链表
        return l2;
      } else if (!l2) {
        return l1;
      } else if (l1.val <= l2.val) { // 如两个链表头节点值相同，优先选择 l1 节点
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
      } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
      }
    }

    const newList = mergeTwoLists(listNode, listNode2);
    console.log(newList);
  }, []);

  return (
    <div>
      <pre>
        <code></code>
      </pre>
    </div>
  );
};

Suanfa3.title = '算法-按顺序合并链表';

export default Suanfa3;
