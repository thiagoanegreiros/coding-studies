function ListNode (x) {
  this.value = x;
  this.next = null;
}

const linkedList = (arr) => {
  let list = new ListNode(arr[0]);

  let selectedNode = list;
  for(let i = 1; i < arr.length; i++){
    selectedNode.next = new ListNode(arr[i]);
    selectedNode = selectedNode.next
  } 

  return list
}

module.exports = {
    linkedList
}