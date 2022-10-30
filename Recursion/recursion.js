// example 1: spot the base case
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}

// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}


// example 2: spot the base case
function sumRange(num){
    if(num === 1) return 1; 
    return num + sumRange(num-1);
 }

 sumRange(5)

//example 3: spot the base case

function factorialIterative(num){
    let total = 1;
    for(let i = num; i > 1; i--){
        total *= i
    }
    return total;
}

function factorialRecursive(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

//example 4 with helper: spot the base case
function collectOddValues(arr){
    
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0) {
            return;
        }
        
        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }
        
        helper(helperInput.slice(1))
    }
    
    helper(arr)

    return result;

}

collectOddValues([1,2,3,4,5,6,7,8,9])

//example 5 with pure recursion
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])


const run = () => {
    console.log('running');
    run();
}

// example 6: power
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

// Write a function called power which accepts a base and an exponent. 
// The function should return the power of the base to the exponent. 
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}

// example 7: factorial

// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

// Write a function factorial which accepts a number and returns the factorial of that number.
// A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }

// example 8: productOfArray

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// Write a function called productOfArray which takes in an 
// array of numbers and returns the product of them all.

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// example 9: recursiveRange

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

// Write a function called recursiveRange which accepts a number 
// and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }

// example 10: fib

// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Write a recursive function called fib which accepts a number and 
// returns the nth number in the Fibonacci sequence. 
// Recall that the Fibonacci sequence is the sequence of 
// whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and 
// where every number thereafter is equal to the sum of the previous two numbers.

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

// example 11: nestedEvenSum

// Write a recursive function called nestedEvenSum. 
// Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
  nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10
  
  function nestedEvenSum (obj, sum=0) {
      for (var key in obj) {
          if (typeof obj[key] === 'object'){
              sum += nestedEvenSum(obj[key]);
          } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
              sum += obj[key];
          }
      }
      return sum;
  }

  const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


// example 12: collect Strings

// Write a function called collectStrings which accepts an object and returns 
// an array of all the values in the object that have a typeof string

collectStrings(obj) // ["foo", "bar", "baz"])

//recursion with helper

function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

// pure recursion

function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}