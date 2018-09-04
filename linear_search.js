'use strict'
/*
// Release 0
console.log("Linear Search")
function linearSearch(target, values) {
  let result = 0
  for ( let i = 0; i < values.length; i++) {
    if ( values[i] === target) {
      result += 1
    }
  }
  if (result === 0) {
    return -1
  }
  return result
}

// let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ]));
// 2
console.log(linearSearch(9, [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ]));
// -1
*/
// Release 1
console.log("Global Linear Search")
function globalLinearSearch(target, values) {
  let result = []
  for ( let i = 0; i < values.length; i++) {
    if ( target === values[i]) {
      result.push(i)
    }
  }
  return result
  if ( result === []) {
    return 'tidak ada'
  }
}

// let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", ["b", "a", "n", "a", "n", "a"]));
// [ 1, 3, 5 ]

// module.exports = {
//   linearSearch,
//   globalLinearSearch
// }
