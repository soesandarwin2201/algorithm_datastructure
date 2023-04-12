//unsorted array
//return the sorted array
// pivot first => index 0 1 ,2 array[0]
//let left , right
//for loop
//while => recurise 

function quick_sort(array){
     let pivot = array[0]; // the first element
     let leftArray = [];
     let rightArray = [];
     if( array.length <= 1){
          return array;
     }
     for(let i = 1; i < array.length ; i++){
          if(array[i] < pivot){
               leftArray.push(array[i]);
          }
          else {
               rightArray.push(array[i]);
          }
     }
     return [...quick_sort(leftArray),pivot,...quick_sort(rightArray)];
}

let array = [5,8,1,3,7,10,2];
let result = quick_sort(array);
console.log(result);
