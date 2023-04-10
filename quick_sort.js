function partition(array,lower,upper){
     let pivot = array[lower];
     let start = lower;
     let end = upper;

     while(start < end) {
          while(array[start] <= pivot && start < end) {
               start++;
          }
          while (array[end] > pivot) {
               end--;
          }
          if(start < end) {
               [array[start],array[end]] = [array[end], array[start]];
          }
     }
     array[lower]= array[end];
     array[end] = pivot;

     return end;
}

function quickSort(array, left, right) {
     if (left < right) {
       let q = partition(array, left, right);
       quickSort(array, left, q - 1); //sort left sub-array
       quickSort(array, q + 1, right); //sort right sub-array
     }
   }

quickSort([90 ,45, 22, 11, 22 ,50]);