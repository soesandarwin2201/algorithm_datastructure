// given the array => digits
// [5,4,3,2,1] => to sort the array
// [1,0] => the element of the array is no more than 10,
// increment the larger integer by 1
// [4,3,2] => 432 => 433
// return the result of the digit


function plusOne(digits){
     for(let i = digits.length - 1; i >= 0  ; i--){
          digits[i]++;

       if( digits[i] > 10){
          return [1,0]
       }
       else {
          return digits;
          
       }
     }

     return digits;

}

plusOne([7,8,9])