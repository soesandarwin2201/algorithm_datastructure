// given the array of integer call nums 
// return the array called answer 
// the current element of the array = multiply of all number in number arrray expect current element of the nums ;
function expectSelf(nums){
     let answer = [];
     let result = 1;
     for(let i = 0 ; i < nums.length ; i++){
          result *= nums[i];
     }
     console.log(result);
     return result;
}

expectSelf([1,2,3,4])