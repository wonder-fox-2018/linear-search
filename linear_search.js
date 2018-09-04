'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, random_numbers) => {
  let counter = 0;

  for ( var i = 0 ; i < random_numbers.length ; i ++){
    let current = random_numbers[i]
    if(current === target){
        counter = counter + 1
      }
    }
    if(counter === 0){
      return -1
    }else if(counter > 0){
      return counter
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  var output = []
  for ( var i = 0 ; i < values.length ; i ++){
    if(values[i] === target){
      output.push(i)
    }
  }
  return output
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
