// Name: Tommy Cao
// Date: 9/21/20
// Problem number: 3

function countTree(tree) {
  let nodeTotal = 0; // initialize
  
  // traversal tree to obtain total number of node recursively
  function traverseTree(tree) {
      if(tree !== null) { 
          nodeTotal++;
          traverseTree(tree.left); 
          traverseTree(tree.right); 
      } 
  }
  traverseTree(tree);
  return nodeTotal;
}

// const treeArr = [
// { // example input which will output 4
//     left: {
//       left: null,
//       right: null,
//     },
//     right: {
//       left: null,
//       right: {
//         left: null,
//         right: null,
//       },
//     },
// },
// { // output should be 5
//     left: {
//       left: null,
//       right: null,
//     },
//     right: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
// },
// {// output should be 5
//   left: {
//     left: null,
//     right: {
//       left: null,
//       right: null,
//     }
//   },
//   right: {
//     left: {
//       left: null,
//       right: null,
//     },
//     right: null,
//   },
// },
// {// output should be 6
//     left: {
//         left: null,
//         right: {
//           left: null,
//           right: null,
//         }
//       },
//     right: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
// },

// {// output should be 7
//   left: {
//     left: {
//       left: null,
//       right: null,
//     },
//     right: {
//       left: null,
//       right: null,
//     },
//   },
//   right: {
//     left: {
//       left: null,
//       right: null,
//     },
//     right: {
//       left: null,
//       right: null,
//     },
//   },
// },

// {// output should be 15
//   left: {
//     left: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//   },
//   right: {
//     left: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//   },
// },

// {// output should be 12
//   left: {
//     left: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//     right: {
//       left: null,
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//   },
//   right: {
//     left: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//   },
// },
// {// output should be 12
//   left: {
//     left: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       left: null,
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//   },
//   right: {
//     left: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: null,
//     },
//     right: {
//       left: {
//         left: null,
//         right: null,
//       },
//       right: {
//         left: null,
//         right: null,
//       },
//     },
//   },
// },
// ]

// for (let i=0; i<treeArr.length; i++) {
//     console.log(countTree(treeArr[i]));
// }

// Output:
// 4
// 5
// 5
// 6
// 7
// 15
// 12
// 13

module.exports = countTree;