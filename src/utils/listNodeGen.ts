export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const listNodeGen = (arr) => {
  if (!arr.length) return null;

  const head = new ListNode(arr[0]);
  let next = head;

  for (let index = 1; index < arr.length; index++) {
    next.next = new ListNode(arr[index]);
    next = next.next;
  }
  return head;
};

export default listNodeGen;
