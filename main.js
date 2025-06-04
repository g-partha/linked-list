import { LinkedList } from "./linked-list.js";

const testList = new LinkedList();
testList.append("mango");
testList.append("orange");
testList.append("papaya");
testList.prepend("lichi");
testList.prepend("jackfruit");

console.log(testList);
console.log("first node", testList.firstNode);
console.log("second node", testList.firstNode.nextNode);
console.log("third node", testList.firstNode.nextNode.nextNode);
console.log("fourth node", testList.firstNode.nextNode.nextNode.nextNode);
console.log(testList.size);
console.log(testList.tail);
console.log('At index 0', testList.at(0));
console.log('At index 1', testList.at(1));
console.log('At index 4', testList.at(4));

testList.pop();

console.log(testList.tail);

console.log(testList.contains("mango"));
console.log(testList.contains("not available"));
console.log(testList.toString());