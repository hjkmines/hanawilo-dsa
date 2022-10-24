const performance = require('perf_hooks').performance;

const pushNumberToArray1 = (arr, num) => {
    const lastIndex = arr.length - 1; 
    for (let i = 0; i < newArr.length; i++) {
        if (i === lastIndex ) {
        arr.splice(lastIndex, 0, num); 
        }
    }

    return arr
}
  
const pushNumberToArray2 = (arr, num) => {
    return arr.push(num);
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

const t0 = performance.now(); 
    pushNumberToArray1(arr1, 11); 
const t1 = performance.now(); 
console.log(`Time to complete: ${(t1 - t0)/1000}`)

const t2 = performance.now(); 
    pushNumberToArray2(arr1, 11); 
const t3 = performance.now(); 
console.log(`Time to complete: ${(t3 - t2)/1000}`)

