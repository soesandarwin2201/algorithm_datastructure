// given the array of integer = nums that sorted
// remove the duplicate [1,2,]
// the order of the element
//return the number of unique number length of the nums
// the length of nums = k

function removeDuplicate(nums){
     let uniqueNumIndex = 0;
     for(let i = 0; i < nums.length; i++){
          if(nums[uniqueNumIndex] !== nums[i]){
               uniqueNumIndex++;
               nums[uniqueNumIndex] = nums[i];
          }
     }
     return uniqueNumIndex + 1 ; // the length of the uniqure number
    
}

removeDuplicate([1,1,2])
