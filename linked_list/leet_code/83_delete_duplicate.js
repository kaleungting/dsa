// Remove duplicates from a sorted list
// given a sorted linked list, remove all duplicates such that each element only appears once

//     * function ListNode(val, next) {
//  * this.val = (val === undefined ? 0 : val)
//             * this.next = (next === undefined ? null : next)
//                 * }

// Input: 1 -> 1 -> 2
// Output: 1 -> 2

// Input: 1 -> 1 -> 2 -> 3 -> 3
// Output: 1 -> 2 -> 3

function deleteDuplicate(head) {
  let newList = new ListNode("Dummy");
  newList.next = head;
  let curr = head;

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return newList.next;
}
