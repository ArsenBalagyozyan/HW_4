//1. Solution without recursion
function removeFirstElement (arr) {
  if (arr.length === 0 || arr.length === 1) return [];
  else {
    for (let i = 0; i < arr.length; i++){
      arr[i] = arr[i + 1];
    }
    arr.pop()
  }
  return arr;
}

console.log(removeFirstElement([6, 78, 'n', 0, 1]))

//1.Solution with recursion
function removeFirstElementR (arr, i = 0){
  if (arr.length <= 1) return [];
  if (i === arr.length - 1){
    arr.pop();
    return arr;
  }
  arr[i] = arr[i + 1];
  return removeFirstElementR(arr, i + 1)
}

console.log(removeFirstElementR([6, 78, 'n', 0, 1]))

//2.
function invertObj(obj){
  let newObj = {};
  for(let key in obj){
    newObj[obj[key]] = key;
  } 
     
  return newObj;
}

console.log(invertObj({a:'1', b:'2'}))

//3.
function sortingBooks(arr){
  let res = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i].readStatus === true) res.push(arr[i]);
    res.sort((a, b)=> {return b.percent - a.percent});
    }
    return res;
  }


console.log (sortingBooks([
{ book: "Catcher in the Rye", readStatus: true, percent: 40},
{ book: "Animal Farm", readStatus: true, percent: 20},
{ book: "Solaris", readStatus: false, percent: 90 },
{ book: "The Fall", readStatus: true, percent: 50 },
{ book: "White Nights", readStatus: false, percent: 60 } ,
{ book: "After Dark", readStatus: true, percent: 70 }
]))

//4.
function rotateArray(arr, N) {

if (N < 0) {
  return rotateArray(arr, arr.length - Math.abs(N));
}
if (N > 0) {
  const firstElem = arr.splice(0, 1)[0];
  arr.push(firstElem);
  return rotateArray(arr, N - 1);
}
return arr;
}

console.log('RES 1', rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log('RES 2', rotateArray(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

//5. I solve the problem with friend's help ))
var treeNodes = [
  { parent: null, id: 0 },
  { parent: 0, id: 1 },
  { parent: 0, id: 2 },
  { parent: 1, id: 3 },
  { parent: 1, id: 4 },
  { parent: 2, id: 5 },
  { parent: 4, id: 6 }
];

function buildTree(tree, parentId) {
  for (let i = 0; i < treeNodes.length; i++) {
    if (parentId === treeNodes[i].parent) {
      const id = treeNodes[i].id;  
      tree[id] = buildTree({}, id);
    }
  }
  return tree;
}

console.log('RES', JSON.stringify(buildTree({}, null), null, 4));

//6.

function getAllPossibleSubsets(arr, N) {
  let subsets = [];
  while (arr.length) {
    let subset = [ arr[0] ];
    for (let i = 1; i < arr.length; i++) {    
      subset.push(arr[i]);
      if (i + 1 >= N) {
        subsets.push(subset);
        subset = [ arr[0] ];
      }
    }
    arr.shift();
  }
  return subsets;
}

console.log('RES', getAllPossibleSubsets([1, 2, 3, 4], 2));

//7. Also a friend helped me

function Array2(arr) {
  this.arr = arr;
  return {
    map: (func) => {
      let newArray = [];     
      for (let i = 0; i < this.arr.length; i++) {
        newArray.push(func(this.arr[i], i));
      }
      return newArray;
    }
  };
}

const arr = new Array2(['one', 'two', 'three']);
const newArr = arr.map((v, k) => {
  return [ k, v ];
});

console.log('RES', newArr);
