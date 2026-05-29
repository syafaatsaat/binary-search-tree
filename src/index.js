import "./styles.css";
import { Tree } from "./bst.js";

const randomArray = Array.from(
  { length: 15 }, 
  () => Math.floor(Math.random() * 100)
);

const bst = new Tree(randomArray);

bst.printTree();
console.log("Is balanced?", bst.isBalanced());

// BEFORE

// const levelOrderArr = [];
// bst.levelOrderForEachRecursion((value) => {
//   levelOrderArr.push(value);
// });
// console.log("Level order:", levelOrderArr);

// const preOrderArr = [];
// bst.preOrderForEach((value) => {
//   preOrderArr.push(value);
// });
// console.log("Pre-order:", preOrderArr);

// const inOrderArr = [];
// bst.inOrderForEach((value) => {
//   inOrderArr.push(value);
// });
// console.log("In-order:", inOrderArr);

// const postOrderArr = [];
// bst.postOrderForEach((value) => {
//   postOrderArr.push(value);
// });
// console.log("Post-order:", postOrderArr);

bst.insert(101);
bst.insert(369);
bst.insert(521);
bst.insert(678);
bst.insert(420);
//console.log("Is balanced?", bst.isBalanced());

bst.rebalance();
bst.printTree();
console.log("Is balanced?", bst.isBalanced());

// AFTER
const levelOrderArr = [];
bst.levelOrderForEachRecursion((value) => {
  levelOrderArr.push(value);
});
console.log("Level order:", levelOrderArr);

const preOrderArr = [];
bst.preOrderForEach((value) => {
  preOrderArr.push(value);
});
console.log("Pre-order:", preOrderArr);

const inOrderArr = [];
bst.inOrderForEach((value) => {
  inOrderArr.push(value);
});
console.log("In-order:", inOrderArr);

const postOrderArr = [];
bst.postOrderForEach((value) => {
  postOrderArr.push(value);
});
console.log("Post-order:", postOrderArr);
