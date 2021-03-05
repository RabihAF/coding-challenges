/** Challenge - Merge Two Sorted Lists
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 *
 * Example 1:
 * Input: l1 = [1,2,4], l2 = [1,3,4]
 * Output: [1,1,2,3,4,4]
 *
 * Example 2:
 * Input: l1 = [], l2 = []
 * Output: []
 *
 * Example 3:
 * Input: l1 = [], l2 = [0]
 * Output: [0]
 *
 * Constraints:
 * The number of nodes in both lists is in the range [0, 50].
 * -100 <= Node.val <= 100
 * Both l1 and l2 are sorted in non-decreasing order.
 */

function ListNode (val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

const l1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(4)
l1.next = node2
node2.next = node3

const l2 = new ListNode(1)
const node5 = new ListNode(3)
const node6 = new ListNode(4)
l2.next = node5
node5.next = node6

const output = new ListNode(1)
const node8 = new ListNode(1)
const node9 = new ListNode(2)
const node10 = new ListNode(3)
const node11 = new ListNode(4)
const node12 = new ListNode(4)
output.next = node8
node8.next = node9
node9.next = node10
node10.next = node11
node11.next = node12

console.assert(JSON.stringify(mergeTwoLists(l1, l2)) === JSON.stringify(output), 'mergeTwoLists - case 1')
console.assert(mergeTwoLists(null, null) === null, 'mergeTwoLists - case 2')
console.assert(JSON.stringify(mergeTwoLists(null, new ListNode())) === JSON.stringify(new ListNode()), 'mergeTwoLists - case 3')
console.assert(JSON.stringify(mergeTwoLists(new ListNode(), null)) === JSON.stringify(new ListNode()), 'mergeTwoLists - case 4')
