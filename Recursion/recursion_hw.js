// problem 1: reverse

// Write a recursive function called reverseString which accepts a string and returns a new string in reverse.

// reverseString('tony') // 'ynot'
// reverseString('baker') // 'rekab'

function reverseString(str){
    if(str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0];
}

// problem 2: palidrome

// Write a recursive function called palindrome which returns true 
// if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

// palindrome('tony') // false
// palindrome('monkey') // false
// palindrome('tacocat') // true
// palindrome('sos') // true

const palidrome = (str) => {
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

// problem 3: someRecursive

// Write a recursive function called isItRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to the callback. 
// Otherwise it returns false.

// isItRecursive([1,2,3,4], isOdd) // true
// isItRecursive([4,6,8,9], isOdd) // true
// isItRecursive([4,6,8], isOdd) // false
// isItRecursive([4,6,8], val => val > 10); // false

//This is the callback function: 
const callback = (val) => val % 2 !== 0;

const isItRecursive = (arr, callback) => {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}

// problem 4: flatten 

// Write a recursive function called flatTheArray which accepts an array of arrays 
// and returns a new array with all values flattened.

// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

const flatTheArray = (arr) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    } 
    return newArr;
}

// problem #5: capitalizeFirstLetter

// Write a recursive function called capitalizeTheFirst. 
// Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirstLetter(['tony', 'truck']); // ['Tony', 'Truck']

const capitalizeFirstLetter = (array) => {
    if (array.length === 1) {
        return [array[0][0].toUpperCase() + array[0].substr(1)];
      }
      const res = capitalizeFirstLetter(array.slice(0, -1));
      const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
      res.push(string);
      return res;
}

// problem #6: capitilize all letters

// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.

// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']

const capitalizeAllLetters = (array) => {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
      }
      let res = capitalizeAllLetters(array.slice(0, -1));
      res.push(array.slice(array.length-1)[0].toUpperCase());
      return res;
}