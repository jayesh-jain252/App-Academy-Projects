# Array practice

Identify the time complexity of each of these functions with a 1 sentence
justification for your answer. Assume `arr` is an array of length _n_.

## `arr.push()`

Time complexity: O(1)
Space complexity: O(1)
Justification: Just adding one element to the end of an array and returning its length.

[push on MDN][push]

## `arr.pop()`

Time complexity: O(1)
Space complexity: O(1)
Justification: removes the last element from an array and returns that element

[pop on MDN][pop]

## `arr.shift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Removing an element at the beginning of an array means the next element will have an index of 0. Which means that the index of every other element must be decremented by 1.

[shift on MDN][shift]

## `arr.unshift()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Adding an element at the beginning of an array means the new element will have an index of 0. Which means that the index of every other element must be incremented by 1.

[unshift on MDN][unshift]

## `arr.splice()`

Time complexity: O(n)
Space complexity: O(1)
Justification: Removing element at the beginning will lead to decrementing index of every remaining element by 1.

[splice on MDN][splice]

## `arr.slice()`

Time complexity: O(N)
Space complexity: O(N)
Justification: Returns new array and worst case arr.slice(start,end) where start = 0 and end = arr.length - 1

[slice on MDN][slice]

## `arr.indexOf()`

Time complexity: O(N)
Space complexity: O(1)
Justification: Traverse whole array to find the index of a given element

[indexOf on MDN][indexof]

## `arr.map()`

Time complexity: O(N)
Space complexity: O(N)
Justification: Creates new array and traverse every element of the given array.

[map on MDN][map]

## `arr.filter()`

Time complexity: O(N)
Space complexity: O(N)
Justification: Creates new array and traverse every element of the given array.

[filter on MDN][filter]

## `arr.reduce()`

Time complexity: O(N)
Space complexity: O(1)
Justification: returns accumulated value and traverse every element of the given array.

[reduce on MDN][reduce]

## `arr.reverse()`

Time complexity: O(N)
Space complexity: O(1)
Justification: Reverse array in place but traver

[reverse on MDN][reverse]

## `[...arr]`

Time complexity: O(N)
Space complexity: O(1)
Justification: iterate through every item in the array and expand in place

[spread on MDN][spread]

[push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[splice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
[slice]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
[indexof]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
[map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
[filter]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
[reduce]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
[reverse]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
[spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
