// array of integer
// the target integer
// return the indices of the two number the the total is = target 
// repeat the loop
// the for loop for each item of the array
// difference of the number 

function twoSum(nums, target) {
     for(let i = 0; i < nums.length; i++) {
          let difference = target - nums[i];
          let index = nums.indexOf(difference, i + 1);
          if(index !== - 1){
               return [index,i];
          }
     }

}

twoSum([3,2,4],6);



