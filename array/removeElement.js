// give the array of integer
// given the value integer
// remove all the element that same with value
// return the length of the modify array

function removeElement(nums,val){
     let index = 0
     for(let i = 0; i < nums.length; i++){
          if(nums[i] !== val){
               nums[index] = nums[i];
               index++;
          }
     }
     return index;
}

removeElement([0,1,2,2,3,0,4,2],2)