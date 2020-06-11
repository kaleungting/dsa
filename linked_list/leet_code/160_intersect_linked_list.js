/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let p1 = headA;
  let p2 = headB;

  while (p1 !== p2) {
    //keep iterating until the two linkedList merges
    p1 = p1.next; //advance pointers
    p2 = p2.next;

    if (p1 === p2) {
      return p1; //if linkedList merges on NULL, it means the two linkLists don't intersect, it'll return NULL
    }
    if (p1 === null) {
      p1 = headB; //move to head of opposite linkedList
    }

    if (p2 === null) {
      p2 = headA; //move to head of opposite linkedList
    }
  }

  return p1;
};

function getIntersectionNodeHash(headA, headB) {
  if (headA === null || headB === null) return null;
  let lists = new Set();
  while (headA) {
    lists.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (lists.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
}
