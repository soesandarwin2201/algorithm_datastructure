// first check the first item
// pick the second one
// compare with other sorted array
// insert 
// repeat

// for each item of the array
// for loop
// repeat while loop
// find the position to insert

function insert_sort(array){
     let currentvalue;
     let currentposition;
     for(let i = 1; i < array.length; i++) {
          currentposition = i;
          currentvalue = array[i];
          while( currentposition > 0 && array[currentposition - 1] > currentvalue){
               array[currentposition] = array[currentposition - 1];
               currentposition--;
          }
     
          array[currentposition] = currentvalue;
     }
     console.log(array.join(''));
}

insert_sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);