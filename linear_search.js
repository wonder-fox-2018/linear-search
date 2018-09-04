'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  for (let i = 0; i < random_numbers.length; i++) {
    if (random_numbers[i] === target) {
      return i
    }
  } 
  return -1
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var result = []
  for (let i = 0; i < banana_arr.length; i++) {
    if (banana_arr[i] === target) {
      result.push(i)
    }
  }
  return result
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}