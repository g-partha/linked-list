import { LinkedList } from "./linked-list.js";

const testList = new LinkedList();
testList.append("mango");
testList.append("orange");
testList.append("papaya");
testList.append("lichi");
testList.append("jackfruit");

console.log('At index 1', testList.at(1));
testList.removeAt(1);
console.log('At index 1', testList.at(1));
