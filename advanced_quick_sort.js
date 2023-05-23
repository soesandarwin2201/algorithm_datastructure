// in place version
// select the last element of the sub-array as pivot
// array.length -1 
//partition the left side , 
// partition the right side
// print the whole array at the end of every partition

//use the indices 
//partition method should do the partition and also return the index location of the pivot
// know the element which one is greater and one is smaller

//if the element is smaller than the pivot , we have to swaP
//the left sie

// partition
function partition(array){
     // the index of the pivot the in the sub array
     let startIndex = 0;
     let endIndex = array.length - 1;
     let pivot = array[endIndex];  // the last item of the array

     for(let i = startIndex; i <  endIndex; i++){
       if(array[i] < pivot){
          [array[i],array[startIndex]] = [array[startIndex],array[i]];
          startIndex++;
          console.log(array);
       }
     }
     [array[endIndex],array[startIndex]] = [array[startIndex],array[endIndex]];
     console.log(array);
     return startIndex;

}

function advance_quick_sort(array,left,right){
     let leftIndex = 0;
     let rightIndex = array.length - 1;
     if(array.length <= 1){
          return array;
     }

     if(leftIndex  < rightIndex){
          let pivot = partition(array);
          advance_quick_sort(array,leftIndex,pivot - 1);
          advance_quick_sort(array,pivot + 1, rightIndex);
     }
     console.log(array);
}

advance_quick_sort([1, 3, 9, 8, 2, 7, 5])