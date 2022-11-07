// ES2015 Version - unoptimized 
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    for (let i = arr.length; i > 0; i--) {
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
        }
      }
    }
    return arr;
}
  
bubbleSort([8,1,2,3,4,5,6,7]);

// 1. Start looping from with a variable called i the end of the array towards the beginning

// 2. Start an inner loop with a variable called j from the beginning until i - 1

// 3. If arr[j] is greater than arr[j+1], swap those two values!

// 4. Return the sorted array

// Optimized BubbleSort with noSwaps
function bubbleSort(arr){
    var noSwaps;
    for(var i = arr.length; i > 0; i--){
      noSwaps = true;
      for(var j = 0; j < i - 1; j++){
        if(arr[j] > arr[j+1]){
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          noSwaps = false;         
        }
      }
      if(noSwaps) break;
    }
    return arr;
}
  
bubbleSort([8,1,2,3,4,5,6,7]);